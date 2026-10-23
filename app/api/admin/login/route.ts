// app/api/admin/login/route.ts
// Single-admin login. Compares the submitted email + password against the
// ADMIN_EMAIL / ADMIN_PASSWORD environment variables on the server only.
// FAILS CLOSED: when either env var is unset, every login is rejected.
import { createHash, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
  isAdminAuthConfigured,
} from '@/lib/admin-auth';

export const runtime = 'nodejs';

function digest(value: string): Buffer {
  return createHash('sha256').update(value, 'utf8').digest();
}

/** Timing-safe comparison that also hides the expected value's length. */
function safeCompare(submitted: string, expected: string): boolean {
  return timingSafeEqual(digest(submitted), digest(expected));
}

const REJECTED = { success: false, message: 'Invalid email or password' };

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return Response.json(REJECTED, { status: 401 });
  }

  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }

  const email =
    typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  const expectedEmail = process.env.ADMIN_EMAIL!.trim().toLowerCase();
  const expectedPassword = process.env.ADMIN_PASSWORD!;

  const emailOk = safeCompare(email, expectedEmail);
  const passwordOk = safeCompare(password, expectedPassword);
  if (!emailOk || !passwordOk) {
    return Response.json(REJECTED, { status: 401 });
  }

  const token = await createSessionToken(expectedEmail);
  if (!token) {
    return Response.json(REJECTED, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });

  return Response.json({ success: true });
}
