// app/admin/leads/page.tsx
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import LeadsClientTable from '@/components/LeadsClientTable';

export const dynamic = 'force-dynamic'; // force fresh data every request

export default async function AdminLeadsPage() {
  console.log('AdminLeadsPage - Server rendering started');
  console.log('Environment check:', {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    hasServiceKey: !!process.env.SUPABASE_SECRET_KEY,
  });

  let leads = [];
  let fetchError = null;

  try {
    console.log('Attempting Supabase query...');
    const result = await supabaseAdmin
      .from('book_sessions')
      .select('*')
      .order('created_at', { ascending: false });

    console.log('Supabase query result:', {
      dataExists: !!result.data,
      dataLength: result.data?.length ?? 0,
      error: result.error ? result.error.message : null,
      errorCode: result.error?.code,
      errorDetails: result.error,
    });

    if (result.error) throw result.error;

    leads = result.data || [];
    console.log('Successfully prepared leads for client:', leads.length, 'rows');
  } catch (err: any) {
    console.error('Fetch error in AdminLeadsPage:', {
      message: err.message,
      stack: err.stack,
      code: err.code,
    });
    fetchError = err.message || 'Could not load leads from database';
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl w-full border border-red-200 dark:border-red-800">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            Error Loading Leads
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{fetchError}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Check your browser console and terminal logs for more details.
          </p>
        </div>
      </div>
    );
  }

  return <LeadsClientTable leads={leads} />;
}