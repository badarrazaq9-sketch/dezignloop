// lib/supabase-rest.ts
// Server-only helpers for talking to Supabase over its REST API (PostgREST)
// with plain fetch. No client library and no import-time throws, so pages
// and API routes can degrade gracefully when the database is not configured.
//
// Env vars used:
//   NEXT_PUBLIC_SUPABASE_URL          - project URL
//   SUPABASE_SERVICE_ROLE_KEY         - service role key (reads, bypasses RLS)
//   SUPABASE_SECRET_KEY               - accepted as a fallback name for the
//                                       service key (older scaffold naming)
//   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY
//                                     - public key used for form inserts
//                                       (RLS allows anon INSERT only)

export interface SupabaseConfig {
  url: string | null;
  serviceKey: string | null;
  anonKey: string | null;
  /** Canonical names of the env vars that still need to be set. */
  missing: string[];
}

export function getSupabaseConfig(): SupabaseConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SECRET_KEY ||
    null;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    null;

  const missing: string[] = [];
  if (!url) missing.push('NEXT_PUBLIC_SUPABASE_URL');
  if (!serviceKey) missing.push('SUPABASE_SERVICE_ROLE_KEY');

  return { url, serviceKey, anonKey, missing };
}

function restHeaders(
  key: string,
  extra?: Record<string, string>
): Record<string, string> {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    ...extra,
  };
}

/** Read rows from a table, newest first. Throws on any failure. */
export async function fetchTableRows(
  table: string,
  limit = 200
): Promise<Record<string, unknown>[]> {
  const { url, serviceKey } = getSupabaseConfig();
  if (!url || !serviceKey) throw new Error('Supabase is not configured');

  const endpoint = `${url}/rest/v1/${table}?select=*&order=created_at.desc&limit=${limit}`;
  const res = await fetch(endpoint, {
    headers: restHeaders(serviceKey),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Could not read ${table} (status ${res.status})`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/** Exact row count for a table, optionally only rows created after `sinceIso`. */
export async function fetchTableCount(
  table: string,
  sinceIso?: string
): Promise<number> {
  const { url, serviceKey } = getSupabaseConfig();
  if (!url || !serviceKey) throw new Error('Supabase is not configured');

  let endpoint = `${url}/rest/v1/${table}?select=id&limit=1`;
  if (sinceIso) {
    endpoint += `&created_at=gte.${encodeURIComponent(sinceIso)}`;
  }
  const res = await fetch(endpoint, {
    headers: restHeaders(serviceKey, { Prefer: 'count=exact' }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Could not count ${table} (status ${res.status})`);

  // PostgREST reports the exact total in the content-range header, e.g. "0-0/42".
  const range = res.headers.get('content-range');
  const total = range?.split('/')[1];
  const parsed = total ? parseInt(total, 10) : NaN;
  return Number.isNaN(parsed) ? 0 : parsed;
}

/**
 * Insert one row. Uses the service key when available, otherwise the public
 * key (RLS policy allows anon INSERT on the lead tables). Never throws and
 * never exposes database error details to callers.
 */
export async function insertRow(
  table: string,
  row: Record<string, unknown>
): Promise<{ ok: boolean; configured: boolean }> {
  const { url, serviceKey, anonKey } = getSupabaseConfig();
  const key = serviceKey || anonKey;
  if (!url || !key) return { ok: false, configured: false };

  try {
    const res = await fetch(`${url}/rest/v1/${table}`, {
      method: 'POST',
      headers: restHeaders(key, { Prefer: 'return=minimal' }),
      body: JSON.stringify(row),
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`Supabase insert into ${table} failed (status ${res.status})`);
      return { ok: false, configured: true };
    }
    return { ok: true, configured: true };
  } catch (err) {
    console.error(`Supabase insert into ${table} failed`, err);
    return { ok: false, configured: true };
  }
}
