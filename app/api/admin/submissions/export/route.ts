// app/api/admin/submissions/export/route.ts
// Admin-only download of every saved questionnaire submission as one CSV.
//
// Submissions live as individual JSON files in Vercel Blob storage
// (lib/submission-store.ts). This route reads them all back and streams
// them out as a single spreadsheet file.
//
// Note: the middleware matcher only covers /admin/* pages, not
// /api/admin/*, so this route verifies the admin session cookie itself
// (same pattern as app/api/admin/session/route.ts) and rejects
// unauthenticated requests with 401.
import { cookies } from 'next/headers';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import {
  isBlobConfigured,
  listSubmissions,
  type SubmissionRecord,
} from '@/lib/submission-store';

export const dynamic = 'force-dynamic';

const COLUMNS: { key: keyof SubmissionRecord; label: string }[] = [
  { key: 'received_at', label: 'Received At' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'business', label: 'Business' },
  { key: 'service', label: 'Service Needed' },
  { key: 'budget', label: 'Budget' },
  { key: 'time_preference', label: 'Timeline' },
  { key: 'notes', label: 'Notes' },
];

function csvCell(value: string | null): string {
  let v = value ?? '';
  // Spreadsheet formula-injection guard for cells starting with = + - @.
  if (/^[=+\-@\t\r]/.test(v)) v = `'${v}`;
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

export async function GET() {
  const cookieStore = await cookies();
  const authenticated = await verifySessionToken(
    cookieStore.get(ADMIN_COOKIE)?.value
  );
  if (!authenticated) {
    return Response.json(
      {
        success: false,
        message: 'You must be signed in as admin to download submissions.',
      },
      { status: 401 }
    );
  }

  if (!isBlobConfigured()) {
    return Response.json(
      {
        success: false,
        message:
          'File storage is not connected yet, so there are no saved submission files to download. ' +
          'In Vercel: open this project → Storage → Create Blob store → Connect to the project ' +
          '(that automatically adds BLOB_READ_WRITE_TOKEN), then redeploy. ' +
          'Until then, questionnaire submissions are captured by email only.',
      },
      { status: 503 }
    );
  }

  try {
    const records = await listSubmissions();
    if (records.length === 0) {
      return Response.json(
        {
          success: false,
          message: 'No questionnaire submissions have been saved yet.',
        },
        { status: 404 }
      );
    }

    const lines = [COLUMNS.map((c) => c.label).join(',')];
    for (const record of records) {
      lines.push(COLUMNS.map((c) => csvCell(record[c.key])).join(','));
    }

    return new Response(`${lines.join('\r\n')}\r\n`, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition':
          'attachment; filename="questionnaire-submissions.csv"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('Submissions export failed:', err);
    return Response.json(
      {
        success: false,
        message: 'Could not read the saved submissions. Please try again later.',
      },
      { status: 500 }
    );
  }
}
