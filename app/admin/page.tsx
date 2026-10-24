// app/admin/page.tsx
// Admin dashboard: lead stats + tables for popup_leads and book_sessions.
// Data is read on the server with the Supabase service key (PostgREST);
// the key never reaches the browser. When the database env vars are not
// set yet, the page still renders and explains exactly what is missing.
import {
  fetchTableCount,
  fetchTableRows,
  getSupabaseConfig,
} from '@/lib/supabase-rest';
import LeadsTable, { type TableColumn } from '@/components/admin/LeadsTable';
import LogoutButton from '@/components/admin/LogoutButton';
import SubmissionsDownload from '@/components/admin/SubmissionsDownload';

export const dynamic = 'force-dynamic';

const POPUP_COLUMNS: TableColumn[] = [
  { key: 'created_at', label: 'Date', type: 'date' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'service', label: 'Service' },
  { key: 'budget', label: 'Budget' },
  { key: 'time_preference', label: 'Preferred Time' },
];

const BOOKING_COLUMNS: TableColumn[] = [
  { key: 'created_at', label: 'Date', type: 'date' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'service', label: 'Service' },
  { key: 'time_preference', label: 'Preferred Time' },
  { key: 'message', label: 'Message' },
  { key: 'contacted_at', label: 'Contacted', type: 'date' },
  { key: 'follow_up_count', label: 'Follow-ups' },
  { key: 'last_follow_up_at', label: 'Last Follow-up', type: 'date' },
  { key: 'follow_up_notes', label: 'Follow-up Notes' },
];

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-2 text-4xl font-black text-gray-900">{value}</p>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-gray-900">
              Dezign<span className="text-primary">Loop</span> Admin
            </h1>
            <p className="text-sm text-gray-500">
              Questionnaire leads &amp; booking sessions
            </p>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <SubmissionsDownload />
        {children}
      </main>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const config = getSupabaseConfig();

  // Database not wired up yet: render a clear setup panel instead of crashing.
  if (!config.url || !config.serviceKey) {
    return (
      <Shell>
        <div className="bg-white rounded-2xl shadow border border-amber-300 p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-amber-600 mb-3">
            Database not connected yet
          </h2>
          <p className="text-gray-700 mb-4">
            The admin login works, but the dashboard cannot read any leads
            until these environment variables are set in Vercel (Project →
            Settings → Environment Variables), followed by a redeploy:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-900 font-mono text-sm mb-4">
            {config.missing.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            Both values live in the Supabase dashboard under Project Settings →
            API. The service role key is server-only — it is never sent to the
            browser.
          </p>
        </div>
      </Shell>
    );
  }

  const weekAgoIso = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  let popupLeads: Record<string, unknown>[] = [];
  let bookSessions: Record<string, unknown>[] = [];
  let totalLeads = 0;
  let totalBookings = 0;
  let newThisWeek = 0;
  let loadError = false;

  try {
    [popupLeads, bookSessions, totalLeads, totalBookings] = await Promise.all([
      fetchTableRows('popup_leads'),
      fetchTableRows('book_sessions'),
      fetchTableCount('popup_leads'),
      fetchTableCount('book_sessions'),
    ]);
    const [leadsThisWeek, bookingsThisWeek] = await Promise.all([
      fetchTableCount('popup_leads', weekAgoIso),
      fetchTableCount('book_sessions', weekAgoIso),
    ]);
    newThisWeek = leadsThisWeek + bookingsThisWeek;
  } catch (err) {
    console.error('Admin dashboard data load failed:', err);
    loadError = true;
  }

  if (loadError) {
    return (
      <Shell>
        <div className="bg-white rounded-2xl shadow border border-red-200 p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-red-600 mb-3">
            Could not load lead data
          </h2>
          <p className="text-gray-700 mb-4">
            The database is configured, but the lead tables could not be read.
            The most common cause: the schema SQL has not been run in Supabase
            yet, so the <code className="font-mono text-sm">popup_leads</code>{' '}
            and <code className="font-mono text-sm">book_sessions</code>{' '}
            tables do not exist.
          </p>
          <p className="text-sm text-gray-500">
            Run the delivered schema file (dezignloop-supabase-schema.sql) in
            the Supabase SQL Editor, then refresh this page.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Questionnaire leads (total)" value={totalLeads} />
        <StatCard label="Booking sessions (total)" value={totalBookings} />
        <StatCard label="New this week" value={newThisWeek} />
      </div>

      <LeadsTable
        title="Questionnaire Leads"
        columns={POPUP_COLUMNS}
        rows={popupLeads}
      />
      <LeadsTable
        title="Booking Sessions"
        columns={BOOKING_COLUMNS}
        rows={bookSessions}
      />
    </Shell>
  );
}
