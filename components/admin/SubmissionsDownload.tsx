// components/admin/SubmissionsDownload.tsx
// "Download submissions (CSV)" card on the admin dashboard. Every
// questionnaire submission is also saved as a JSON file in Vercel Blob
// storage; this button downloads all of them as one CSV via the
// admin-only export route. When the Blob store is not connected yet, a
// note under the button explains the one step that is missing.
import { isBlobConfigured } from '@/lib/submission-store';

export default function SubmissionsDownload() {
  const configured = isBlobConfigured();

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          Questionnaire submission files
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Every questionnaire submission is also saved as a file. Download
          all of them as one CSV spreadsheet.
        </p>
        {!configured && (
          <p className="text-sm text-amber-600 mt-2">
            File storage not connected yet — submissions are currently
            captured by email only. In Vercel: Storage → Create Blob store →
            Connect to this project, then redeploy.
          </p>
        )}
      </div>
      <a
        href="/api/admin/submissions/export"
        className="inline-flex items-center justify-center shrink-0 rounded-xl bg-primary px-5 py-3 text-white font-semibold shadow hover:opacity-90 transition"
      >
        Download submissions (CSV)
      </a>
    </div>
  );
}
