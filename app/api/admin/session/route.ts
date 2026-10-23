// app/api/admin/session/route.ts
// Lets the login page check whether the visitor is already signed in.
import { cookies } from 'next/headers';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/admin-auth';

export async function GET() {
  const cookieStore = await cookies();
  const authenticated = await verifySessionToken(
    cookieStore.get(ADMIN_COOKIE)?.value
  );
  return Response.json({ authenticated });
}
