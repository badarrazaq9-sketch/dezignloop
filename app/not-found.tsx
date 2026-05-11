import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | DezignLoop',
  description: 'The page you are looking for does not exist. Browse our services or contact us.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 text-center">
        Page not found. Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-8 py-4 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white rounded-full font-bold hover:scale-105 transition"
        >
          Go Home
        </Link>
        <Link
          href="/services"
          className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}