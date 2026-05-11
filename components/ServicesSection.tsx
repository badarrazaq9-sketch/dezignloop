'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ElementType } from 'react';
import {
  Layout,
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  Video,
  ShoppingCart,
  Users,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image'; // ← Added this import

type Service = {
  title: string;
  description: string;
  icon: ElementType;
  slug: string;
};

const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Professional websites that look great, load fast, and turn visitors into customers.',
    icon: Layout,
    slug: '/services/web-design',
  },
  {
    title: 'E-commerce Development',
    description: 'Online stores built to sell, scale, and provide smooth shopping experiences.',
    icon: ShoppingCart,
    slug: '/services/ecommerce-web-development',
  },
  {
    title: 'Logo Design',
    description: 'Professional logo & brand identity that builds trust and makes your business stand out.',
    icon: Palette,
    slug: '/services/logo-design',
  },
  {
    title: 'Lead Generation',
    description: 'Targeted campaigns that deliver high-quality leads ready to convert.',
    icon: Users,
    slug: '/services/lead-generation',
  },
  {
    title: 'SEO',
    description: 'Improve search visibility and attract local customers with proven strategies.',
    icon: TrendingUp,
    slug: '/services/search-engine-optimization-seo',
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow your audience, build engagement, and generate leads on social platforms.',
    icon: Video,
    slug: '/services/social-media-marketing-smm',
  },
  {
    title: 'App Development',
    description: 'Mobile apps designed to engage users and drive growth for iOS and Android.',
    icon: Smartphone,
    slug: '/services/mobile-app-development',
  },
  {
    title: 'Custom Development',
    description: 'Tailored web solutions built around your business goals and processes.',
    icon: Code,
    slug: '/services/custom-development',
  },
  {
    title: 'Video Editing',
    description: 'Engaging video content for ads, social media, and promotional campaigns.',
    icon: Video,
    slug: '/services/video-editing',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            Tailored solutions for modern startups
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <Link
                  href={service.slug}
                  className="
                    block h-full
                    bg-white dark:bg-slate-900 
                    rounded-[2rem] 
                    border border-slate-100 dark:border-slate-800 
                    shadow-sm 
                    hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 
                    hover:-translate-y-2 
                    transition-all duration-500
                  "
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Icon container */}
                    <div className="
                      w-16 h-16 
                      rounded-2xl 
                      bg-slate-100 dark:bg-slate-800 
                      text-primary 
                      group-hover:bg-primary 
                      group-hover:text-white 
                      flex items-center justify-center 
                      transition-all duration-300 
                      mb-8
                    ">
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    <h3 className="
                      text-2xl font-black 
                      tracking-tight 
                      text-slate-900 dark:text-white 
                      mb-4
                    ">
                      {service.title}
                    </h3>

                    <p className="
                      text-slate-500 dark:text-slate-400 
                      leading-relaxed text-sm 
                      mb-8 font-medium 
                      flex-grow
                    ">
                      {service.description}
                    </p>

                    {/* Learn More with nice arrow icon */}
                    <div className="
                      flex items-center gap-2 
                      text-primary font-bold text-sm 
                      opacity-0 translate-y-2 
                      group-hover:opacity-100 group-hover:translate-y-0 
                      transition-all duration-300
                    ">
                      Learn More
                      <ArrowRight 
                        size={16} 
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}