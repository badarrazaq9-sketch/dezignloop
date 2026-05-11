// components/LeadsClientTable.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  time_preference: string;
  message?: string | null;
  contacted_at?: string | null;
  follow_up_count?: number | null;
  last_follow_up_at?: string | null;
  follow_up_notes?: string | null;
}

interface Props {
  leads: Lead[];
}

type Tab = 'all' | 'contacted' | 'followups';

export default function LeadsClientTable({ leads }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [copyStates, setCopyStates] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    console.log('Client auth check:', {
      loggedIn,
      localStorageValue: localStorage.getItem('loggedIn'),
      totalLeadsReceived: leads.length,
    });

    if (!loggedIn) {
      console.warn('Auth check failed → redirecting to /login');
      router.replace('/login');
    }
  }, [router, leads.length]);

  if (!isMounted) {
    return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;
  }

  const handleCopy = async (lead: Lead) => {
    const text = [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone}`,
      `Service: ${lead.service}`,
      `Time Preference: ${lead.time_preference}`,
      `Message: ${lead.message || 'None'}`,
      `Created: ${new Date(lead.created_at).toLocaleString('en-PK')}`,
      lead.contacted_at ? `Contacted: ${new Date(lead.contacted_at).toLocaleString('en-PK')}` : '',
      lead.follow_up_count ? `Follow-ups: ${lead.follow_up_count}` : '',
      lead.last_follow_up_at ? `Last Follow-up: ${new Date(lead.last_follow_up_at).toLocaleString('en-PK')}` : '',
      lead.follow_up_notes ? `Notes: ${lead.follow_up_notes}` : '',
    ].filter(Boolean).join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopyStates((prev) => ({ ...prev, [lead.id]: true }));
      setTimeout(() => setCopyStates((prev) => ({ ...prev, [lead.id]: false })), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    if (activeTab === 'contacted') return !!lead.contacted_at;
    if (activeTab === 'followups') return (lead.follow_up_count ?? 0) > 0;
    return true;
  });

  console.log('Rendering table:', {
    activeTab,
    totalLeads: leads.length,
    filteredLeadsCount: filteredLeads.length,
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Strategy Session Dashboard
        </h1>
        <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Showing {filteredLeads.length} of {leads.length} leads
        </span>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-1 sm:space-x-6 overflow-x-auto pb-1">
          {(['all', 'contacted', 'followups'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-3 font-medium text-sm md:text-base whitespace-nowrap transition-colors
                border-b-2
                ${activeTab === tab
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
              `}
            >
              {tab === 'all' ? 'All Leads' : tab === 'contacted' ? 'Contacted' : 'Follow-ups'}
            </button>
          ))}
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-12 text-center border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
            No leads found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            {activeTab === 'all'
              ? `There are ${leads.length} leads in total — none match the current filters or table is empty.`
              : `No leads match the "${activeTab}" filter.`}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Time</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Contacted</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Follow-ups</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {new Date(lead.created_at).toLocaleString('en-PK')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {lead.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {lead.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {lead.time_preference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {lead.contacted_at ? (
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {new Date(lead.contacted_at).toLocaleDateString('en-PK')}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {lead.follow_up_count && lead.follow_up_count > 0 ? (
                      <span className="text-orange-600 dark:text-orange-400 font-medium">
                        {lead.follow_up_count}x
                      </span>
                    ) : (
                      <span className="text-gray-400">0</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs font-medium transition"
                      >
                        Call
                      </a>
                      <a
                        href={`mailto:${lead.email}?subject=Strategy Session Follow-up`}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-medium transition"
                      >
                        Email
                      </a>
                      <button
                        onClick={() => handleCopy(lead)}
                        className={`px-3 py-1.5 text-white rounded-md text-xs font-medium transition ${
                          copyStates[lead.id] ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700'
                        }`}
                      >
                        {copyStates[lead.id] ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}