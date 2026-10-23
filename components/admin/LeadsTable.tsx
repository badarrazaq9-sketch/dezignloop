// components/admin/LeadsTable.tsx
// Read-only table for admin lead data with a text search filter and a
// refresh button. Rows are fetched on the server and passed in as props.
'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'date' | 'text';
}

function formatValue(value: unknown, type?: TableColumn['type']): string {
  if (value === null || value === undefined || value === '') return '—';
  if (type === 'date') {
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  }
  return String(value);
}

export default function LeadsTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: TableColumn[];
  rows: Record<string, unknown>[];
}) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      columns.some((col) =>
        formatValue(row[col.key], col.type).toLowerCase().includes(q)
      )
    );
  }, [query, rows, columns]);

  return (
    <section className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-5 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900">
          {title}{' '}
          <span className="text-sm font-medium text-gray-500">
            ({filtered.length}
            {filtered.length !== rows.length ? ` of ${rows.length}` : ''})
          </span>
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rows..."
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none w-52"
          />
          <button
            onClick={() => router.refresh()}
            className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition"
          >
            Refresh
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="p-6 text-sm text-gray-500">
          {rows.length === 0
            ? 'No rows yet.'
            : 'No rows match your search.'}
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 font-semibold text-gray-600 whitespace-nowrap"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, index) => (
                <tr
                  key={String(row.id ?? index)}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-3 text-gray-800 align-top max-w-xs break-words"
                    >
                      {formatValue(row[col.key], col.type)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
