'use client';

import { motion } from 'framer-motion';
import type { ElementType } from 'react';
import {
  Globe,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  Headphones,
} from 'lucide-react';
import Image from 'next/image'; // ← Added this import
import Link from 'next/link';


type Feature = {
  title: string;
  description: string;
  icon: ElementType;
};

const features: Feature[] = [
  {
    title: 'Clear Communication',
    description:
      'Simple, honest communication so you always know what is happening and why.',
    icon: Globe,
  },
  {
    title: 'Fast & Reliable Delivery',
    description:
      'Structured workflows that keep projects moving without delays or confusion.',
    icon: Zap,
  },
  {
    title: 'Full Ownership',
    description:
      'You fully own your website, designs, and assets once the project is complete.',
    icon: ShieldCheck,
  },
  {
    title: 'Built for Growth',
    description:
      'Everything is designed to support more traffic, more leads, and future expansion.',
    icon: Rocket,
  },
  {
    title: 'Hands-On Team',
    description:
      'You work directly with experienced designers and developers, not middlemen.',
    icon: Users,
  },
  {
    title: 'Ongoing Support',
    description:
      'We stay available even after launch to help you improve and scale confidently.',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Why Dezignloop
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
              A smarter way to build your online presence
            </h2>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-md">
              We focus on clarity, consistency, and results. Every design, website, and strategy
              is built to help your business look professional, attract customers, and grow steadily.
            </p>

            {/* Updated: <img> → <Image> with optimizations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block mt-10 rounded-3xl shadow-2xl overflow-hidden"
            >
              <Image
                  src="/assets/Team.png"
                alt="Team collaboration"
                width={800}
                height={533} // natural aspect ratio of this Unsplash image
                sizes="(max-width: 1024px) 100vw, 50vw" // responsive sizes
                loading="lazy" // safe since below fold on desktop
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApaUAAAAASUVORK5CYII=" // low-res placeholder
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-5 sm:gap-6 p-6 rounded-3xl border border-transparent hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-black/40 transition-all duration-500"
                >
                  {/* Fixed-size icon container */}
                  <div className="
                    flex-shrink-0 w-14 h-14               /* same size for all */
                    rounded-2xl                          /* consistent shape */
                    bg-blue-50 dark:bg-blue-900/30       /* same bg color */
                    flex items-center justify-center     /* perfect centering */
                    text-primary                         /* consistent color */
                    shadow-sm                            /* optional subtle depth */
                  ">
                    <Icon size={28} strokeWidth={2.2} />  {/* same icon size + thickness */}
                  </div>

                  <div>
                    <h3 className="font-black text-xl mb-2 text-slate-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}