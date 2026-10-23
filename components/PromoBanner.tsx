'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const STORAGE_KEY = 'dezignloop-promo-banner-dismissed-halloween-2026';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') setVisible(false);
    } catch {
      // localStorage unavailable — keep the banner visible for this load
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — dismissal still applies to this page view
    }
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] w-full bg-gradient-to-r from-[#160a2a] via-[#0d0518] to-black text-white border-b border-orange-500/25">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 pr-12 sm:px-6">
        <p className="text-center text-xs leading-snug sm:text-sm">
          <span aria-hidden="true">🎃 </span>
          <span className="font-semibold">Halloween Sale</span>
          <span className="text-white/60"> — </span>
          <span className="font-bold text-orange-400">30% OFF</span>
          <span> all web design &amp; development packages</span>
          <span className="mt-0.5 block text-[11px] text-white/60 sm:ml-2 sm:mt-0 sm:inline sm:text-xs">
            Offer ends Oct 31
          </span>
        </p>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-orange-400 sm:px-4 sm:text-xs"
        >
          <span className="hidden sm:inline">Claim Offer</span>
          <span className="sm:hidden">Claim</span>
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss Halloween sale banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
