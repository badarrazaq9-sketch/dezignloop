// app/login/page.tsx
// Replaced 2026-10-23: the old standalone login checked hardcoded
// credentials in the browser (visible to anyone) and used localStorage.
// The admin login now lives at /admin/login and is checked on the server
// against the ADMIN_EMAIL / ADMIN_PASSWORD env vars.
import { redirect } from 'next/navigation';

export default function LegacyLoginPage() {
  redirect('/admin/login');
}
