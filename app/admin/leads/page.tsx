// app/admin/leads/page.tsx
// Replaced 2026-10-23: the leads and bookings tables now live on the main
// admin dashboard at /admin. This route only redirects so old bookmarks
// keep working.
import { redirect } from 'next/navigation';

export default function LegacyAdminLeadsPage() {
  redirect('/admin');
}
