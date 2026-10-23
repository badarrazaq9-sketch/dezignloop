// lib/admin-auth.ts
// Admin session helpers for the single-admin dashboard.
//
// The session cookie carries a small signed token (payload + HMAC-SHA256
// signature). Only Web Crypto (crypto.subtle) is used, so this file works
// both in the Edge middleware and in Node route handlers.
//
// The signing secret is SESSION_SECRET when set, otherwise ADMIN_PASSWORD.
// Credentials themselves never leave the server: login compares against
// ADMIN_EMAIL / ADMIN_PASSWORD env vars in the login API route only.

export const ADMIN_COOKIE = 'dezignloop_admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

export function isAdminAuthConfigured(): boolean {
  return Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD);
}

function getSessionSecret(): string | null {
  return process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || null;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecodeToBytes(value: string): Uint8Array {
  const padded = value
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

export async function createSessionToken(email: string): Promise<string | null> {
  const secret = getSessionSecret();
  if (!secret) return null;

  const payload = {
    sub: email,
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
  };
  const payloadPart = base64UrlEncode(
    new TextEncoder().encode(JSON.stringify(payload))
  );
  const key = await hmacKey(secret);
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(payloadPart)
  );
  return `${payloadPart}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  const secret = getSessionSecret();
  if (!secret) return false; // fail closed when no signing secret exists

  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadPart, signaturePart] = parts;

  try {
    const key = await hmacKey(secret);
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      base64UrlDecodeToBytes(signaturePart),
      new TextEncoder().encode(payloadPart)
    );
    if (!valid) return false;

    const payload = JSON.parse(
      new TextDecoder().decode(base64UrlDecodeToBytes(payloadPart))
    );
    return (
      typeof payload.exp === 'number' &&
      payload.exp > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}
