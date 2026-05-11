'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import {
  Globe,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  Headphones,
  Infinity,
  TimerOff,
  Gavel,
  AlertOctagon,  // valid: warning for hidden fees
  Link2Off,      // valid: broken link for scattered work
} from 'lucide-react';

export default function Comparison() {
  return (
    <section
      id="why-us"
      className={`
        py-20 md:py-24
        bg-gradient-to-br from-[#1C9FF0] to-[#010FFF]
        text-slate-200 dark:text-slate-300
        relative overflow-hidden
      `}
    >
      {/* Subtle grain/noise – reduced opacity for faster render */}
      <div
        className={`
          absolute inset-0
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          opacity-[0.05] dark:opacity-[0.03]
          pointer-events-none
        `}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-white px-4 py-1.5 text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            Compare Options
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-white dark:text-black"
          >
            Why DezignLoop Beats The Rest
          </motion.h2>
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`
            bg-white/80 dark:bg-slate-900/50
            backdrop-blur-xl
            rounded-3xl md:rounded-[2.5rem]
            p-8 md:p-10 lg:p-12
            border border-slate-200/60 dark:border-slate-700/50
            shadow-xl dark:shadow-2xl shadow-black/10 dark:shadow-blue-950/30
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 relative">
            {/* Vertical divider on desktop */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-slate-300 dark:bg-slate-700/60 -translate-x-1/2" />

            {/* LEFT — DezignLoop Premium */}
            <div className="md:pr-8 lg:pr-12 space-y-10">
           <div className="flex items-center gap-3.5">
  <Image
    src="/assets/logob.png" // Path relative to the 'public' folder
    alt="Infinity Logo"
    width={200}  // Set your desired width
    height={150} // Set your desired height
  />

</div>
            
               
              <div className="space-y-7 md:space-y-9">
                {[
                  { icon: Infinity, title: 'All-in-One Service', desc: 'Design, website, and marketing handled together in one place.' },
                  { icon: Zap, title: 'Reliable Delivery', desc: 'Projects finished on time with clear updates at every step.' },
                  { icon: ShieldCheck, title: 'Full Ownership', desc: 'You keep every file, design, and website from day one.' },
                  { icon: Globe, title: 'Transparent Pricing', desc: 'Flat, clear fees with no hidden costs or surprises.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`
                        flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11
                        rounded-xl bg-blue-100 dark:bg-blue-900/30
                        text-blue-700 dark:text-blue-400
                        flex items-center justify-center text-xl
                      `}
                    >
                      <item.icon size={24} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-blue-100">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Freelancers / Agencies */}
            <div className="md:pl-8 lg:pl-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3.5 mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-500 dark:text-slate-400">
                  Freelancers / Agencies
                </h3>
              </div>

              <div className="space-y-7 md:space-y-9">
                {[
                  { icon: Link2Off, title: 'Scattered Work', desc: 'Multiple providers make communication slow and confusing.' },
                  { icon: TimerOff, title: 'Long Delays', desc: 'Projects often take much longer than initially expected, slowing progress.' },
                  { icon: Gavel, title: 'Ownership Issues', desc: 'You may not fully own the designs or digital content you pay for.' },
                  { icon: AlertOctagon, title: 'Hidden Fees', desc: 'Extra charges appear unexpectedly as work progresses.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`
                        flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11
                        rounded-xl bg-red-100 dark:bg-red-900/30
                        text-red-700 dark:text-red-400
                        flex items-center justify-center text-xl
                      `}
                    >
                      <item.icon size={24} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-red-800 dark:text-red-300">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}