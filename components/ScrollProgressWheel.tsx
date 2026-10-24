'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const SIZE = 56;
const STROKE_WIDTH = 4;
const RADIUS = (SIZE - STROKE_WIDTH) / 2; // 26
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * ScrollProgressWheel — fixed bottom-right circular scroll progress indicator.
 *
 * - SVG ring fills with the page's scroll percentage (brand blue #1C9FF0),
 *   with the whole-number percentage shown in the center.
 * - Updates are throttled through requestAnimationFrame and the ring carries a
 *   short CSS transition, so movement stays fluid with no layout thrash.
 * - Clicking the wheel smooth-scrolls back to the top.
 * - Hidden on /admin pages.
 * - On the homepage a "Ready to Launch?" popup card is fixed at bottom-right
 *   (bottom-4 right-5, ~185px tall), so there the wheel is lifted above the
 *   card's footprint to avoid any overlap.
 *
 * Removal: delete this file and the <ScrollProgressWheel /> line (plus its
 * import) from app/layout.tsx.
 */
export default function ScrollProgressWheel() {
  const pathname = usePathname();
  const [percent, setPercent] = useState(0);
  const framePending = useRef(false);

  const isAdmin = pathname?.startsWith('/admin') ?? false;

  useEffect(() => {
    if (isAdmin) return;

    const update = () => {
      framePending.current = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        scrollable > 0
          ? Math.min(100, Math.max(0, Math.round((scrollTop / scrollable) * 100)))
          : 0;
      setPercent(pct);
    };

    const requestUpdate = () => {
      if (!framePending.current) {
        framePending.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [isAdmin, pathname]);

  if (isAdmin) return null;

  const dashOffset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  const isHome = pathname === '/';

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll progress"
      title="Back to top"
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-slate-900/10 backdrop-blur transition-transform duration-200 hover:scale-105 dark:bg-slate-900/90 dark:ring-white/15 ${
        isHome ? 'bottom-[212px]' : 'bottom-5'
      }`}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#1C9FF0"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 120ms linear' }}
        />
      </svg>
      <span className="relative text-[11px] font-bold text-slate-700 dark:text-slate-200">
        {percent}%
      </span>
    </button>
  );
}
