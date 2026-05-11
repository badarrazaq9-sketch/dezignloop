'use client';

import { motion } from 'framer-motion';
import TrustBadge from './TrustBadge';
import Link from "next/link";

export default function HeroSection() {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative 
    pt-44 pb-16 
    md:pt-40 md:pb-16 
    px-12          /* 3rem = 48px on mobile */
    md:px-16       /* ≈64px on md+ */
    lg:px-20       /* optional: even more on lg+ */
    overflow-hidden 
    bg-white dark:bg-slate-950relative 
    pt-44 pb-24 
    md:pt-52 md:pb-40 
    px-4 md:px-8 lg:px-12    /* mobile=16px → md=32px → lg=48px (3rem) */
    overflow-hidden 
    bg-white dark:bg-slate-950">

      {/* Subtle grid background – thin lines, same subtle color */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
  linear-gradient(to right, rgba(128,128,128,0.08) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(128,128,128,0.08) 1px, transparent 1px)
`,
backgroundSize: '28px 28px',
backgroundPosition: 'center',
        }}
      />

      {/* Optional: keep your blobs for some soft energy – or remove if you want pure grid */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-12 group cursor-default hover:border-primary/30 transition-colors"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Digital Growth Partner for Small Businesses</span>
        </motion.div>

        {/* Heading */}
       <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.6 }}
  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-slate-900 dark:text-white mb-8"
>
  Turn Your Business Idea<br />
  <span className="gradient-text">Into a Brand That Grows</span>
</motion.h1>

{/* Subheading */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12"
>
  Dezignloop builds clean brands, high performing websites, and marketing systems
  for businesses that want real visibility, real leads, and steady growth.
</motion.p>

{/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 sm:mb-20"
>
 <Link
  href="/services"
  className="
    inline-flex items-center justify-center
    px-10 py-5 
    min-w-[220px] sm:min-w-[260px]
    bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] 
    text-white rounded-full 
    font-black text-lg 
    shadow-xl hover:scale-105 transition-all duration-300
  "
>
  View Services
</Link>

  <button
    onClick={() => smoothScroll('booking-form')}
    className="
      px-10 py-5 
      min-w-[220px] sm:min-w-[260px]
      bg-white dark:bg-slate-900 
      border-2 border-black dark:border-white 
      rounded-full 
      font-black text-lg 
      text-black dark:text-white 
      hover:bg-slate-200 dark:hover:bg-slate-800 
      transition-all duration-300
    "
  >
    Free Strategy Call
  </button>
</motion.div>


        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <TrustBadge />
        </motion.div>

      </div>
    </section>
  );
}