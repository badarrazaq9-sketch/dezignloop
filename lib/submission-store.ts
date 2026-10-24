// lib/submission-store.ts
// File storage for questionnaire submissions, backed by Vercel Blob.
//
// Every questionnaire submission is saved as one small JSON file under
// `questionnaire-submissions/` so the admin can later download all of
// them as a single CSV (see app/api/admin/submissions/export/route.ts).
// This is ADDITIONAL capture next to the notification email — it never
// replaces it.
//
// Contract:
// - When BLOB_READ_WRITE_TOKEN is not set, storage is simply not
//   configured: saves are skipped silently (a server log line only) and
//   listings report "not configured" instead of throwing. Callers keep
//   working exactly as before (email-only capture).
// - Blobs are written with private access by default because they hold
//   personal data (names, emails, phones). If the connected Blob store
//   was created as a public store, set BLOB_ACCESS=public to match it.
import { get, list, put } from '@vercel/blob';

export const SUBMISSIONS_PREFIX = 'questionnaire-submissions/';

export interface SubmissionRecord {
  received_at: string;
  name: string;
  email: string;
  phone: string | null;
  business: string | null;
  service: string | null;
  budget: string | null;
  time_preference: string | null;
  notes: string | null;
}

export function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function blobAccess(): 'private' | 'public' {
  return process.env.BLOB_ACCESS === 'public' ? 'public' : 'private';
}

/**
 * Save one submission as a JSON file in Blob storage.
 * Returns true only when the file was actually written; false when
 * storage is not configured or the write failed (logged server-side).
 */
export async function saveSubmission(
  record: SubmissionRecord
): Promise<boolean> {
  if (!isBlobConfigured()) {
    console.log(
      'Blob storage not configured (BLOB_READ_WRITE_TOKEN unset) — submission kept email-only.'
    );
    return false;
  }

  const stamp = record.received_at.replace(/:/g, '-');
  const suffix = Math.random().toString(36).slice(2, 10);
  const pathname = `${SUBMISSIONS_PREFIX}${stamp}-${suffix}.json`;

  try {
    await put(pathname, JSON.stringify(record, null, 2), {
      access: blobAccess(),
      contentType: 'application/json',
      addRandomSuffix: false,
    });
    return true;
  } catch (err) {
    console.error('Failed to save submission to Blob storage:', err);
    return false;
  }
}

function toRecord(value: unknown): SubmissionRecord | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Record<string, unknown>;
  const str = (v: unknown): string | null =>
    typeof v === 'string' && v ? v : null;
  const name = str(raw.name);
  const email = str(raw.email);
  if (!name || !email) return null;
  return {
    received_at: str(raw.received_at) ?? '',
    name,
    email,
    phone: str(raw.phone),
    business: str(raw.business),
    service: str(raw.service),
    budget: str(raw.budget),
    time_preference: str(raw.time_preference),
    notes: str(raw.notes),
  };
}

/**
 * Read back every saved submission, oldest first.
 * Throws only when Blob itself errors; individual unreadable files are
 * skipped so one bad file can never break the whole export.
 */
export async function listSubmissions(): Promise<SubmissionRecord[]> {
  const records: SubmissionRecord[] = [];
  let cursor: string | undefined;

  // Page through the store (1000 files per page, hard cap of 10 pages).
  for (let page = 0; page < 10; page += 1) {
    const result = await list({
      prefix: SUBMISSIONS_PREFIX,
      cursor,
      limit: 1000,
    });

    for (const blob of result.blobs) {
      try {
        const res = await get(blob.pathname, { access: blobAccess() });
        if (!res || res.statusCode !== 200 || !res.stream) continue;
        const text = await new Response(res.stream).text();
        const record = toRecord(JSON.parse(text));
        if (record) records.push(record);
      } catch (err) {
        console.error('Skipping unreadable submission file:', blob.pathname, err);
      }
    }

    if (!result.hasMore || !result.cursor) break;
    cursor = result.cursor;
  }

  records.sort((a, b) => a.received_at.localeCompare(b.received_at));
  return records;
}
