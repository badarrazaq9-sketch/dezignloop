'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Deep dive into your brand goals, users, and product scope.',
  },
  {
    step: 2,
    title: 'Design',
    description: 'High-fidelity designs and interactive user flows.',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Clean, fast, SEO-optimized production-ready code.',
  },
  {
    step: 4,
    title: 'Launch',
    description: 'Go-live with monitoring, optimization, and support.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs mb-3 block">
            How we work
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Our Simplified Process
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Turning complex ideas into elegant digital experiences in four focused steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
          {/* Connector line - Simplified */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-slate-100 via-primary/40 to-slate-100 dark:from-slate-800 dark:via-primary/50 dark:to-slate-800 -z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ 
                once: true, 
                margin: "-50px" // Loads earlier
              }}
              transition={{ 
                delay: Math.min(index * 0.08, 0.3), // Reduced delay
                duration: 0.4, // Faster animation
                ease: "easeOut"
              }}
              className="text-center relative z-10 group"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl md:text-2xl font-bold mb-6 mx-auto 
                              group-hover:bg-primary group-hover:text-white group-hover:border-primary 
                              shadow-lg shadow-slate-200/30 dark:shadow-black/30 
                              transition-all duration-300 hover:scale-105">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-2 font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Alternative: Static version without animations for maximum speed
export function StaticProcessSection() {
  return (
    <section id="process" className="py-16 md:py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs mb-3 block">
            How we work
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Our Simplified Process
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Turning complex ideas into elegant digital experiences in four focused steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((item) => (
            <div key={item.step} className="text-center group">
              {/* Step Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl md:text-2xl font-bold mb-6 mx-auto 
                              group-hover:bg-primary group-hover:text-white group-hover:border-primary 
                              shadow-lg shadow-slate-200/30 dark:shadow-black/30 
                              transition-all duration-300 hover:scale-105">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-2 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}