'use client';

import { motion } from 'framer-motion';

export default function TrustedLogos() {
  const logos = [
    'Stripe',
    'Wordpress',
    'NextJs',
    'Figma',
    'Shopify',
    'Airbnb',
    'Notion',
    'Coinbase',
    'OpenAI',
    'Vercel',
    'Linear',
    'Webflow',
  ];

  // Duplicate twice for ultra-smooth loop (helps with wider screens)
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 md:py-16 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <p className="text-center text-xs sm:text-sm font-black tracking-[0.3em] text-slate-400 dark:text-slate-600 uppercase mb-8 md:mb-12">
          Built With Modern, Trusted Platforms
        </p>

        {/* Marquee Wrapper */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 dark:to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 dark:to-transparent pointer-events-none" />

          {/* Scrolling track – optimized for performance */}
          <div
            className="
              flex whitespace-nowrap will-change-transform
              animate-marquee
              hover:pause
            "
            style={{ '--marquee-duration': '35s' } as React.CSSProperties} // slightly faster = less perceived lag
          >
            {duplicatedLogos.map((brand, idx) => (
              <div
                key={`${brand}-${idx}`}
                className="
                  flex-shrink-0 
                  mx-6 sm:mx-10 md:mx-14 lg:mx-20 
                  text-2xl sm:text-3xl md:text-4xl 
                  font-black tracking-tighter 
                  text-slate-700 dark:text-slate-300 
                  opacity-70 hover:opacity-100 
                  transition-opacity duration-300
                  font-synthesis-none  /* prevents fake bold/italic = faster render */
                "
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}