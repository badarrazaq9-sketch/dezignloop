'use client';

import Link from 'next/link';
import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import type { ElementType } from 'react';
import {
  Layout,
  ShoppingCart,
  Palette,
  Users,
  Search,
  Smartphone,
  Code,
  Video,
  Smile,
  Box,
} from 'lucide-react';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';

type Service = {
  title: string;
  tagline: string;
  description: string;
  whoFor: string[];
  icon: ElementType;
  slug: string;
};

export const metadata: Metadata = {
  title: 'Our Services – Web Design, SEO, Apps & Marketing',
  description:
    'Full range of digital services for small businesses: professional web design, branding, local SEO, mobile app development, and growth marketing. Get started today.',
  alternates: {
    canonical: '/services',
  },
};

const services: Service[] = [
  // HIGH-CONVERSION ENTRY SERVICES
  // These are easier to sell through Facebook ads

  {
    title: 'Logo Design',
    tagline: 'Build a brand people remember',
    description:
      'Professional logo designs that make your business look trustworthy, modern, and memorable from day one.',
    whoFor: ['Startups', 'Small Businesses', 'Brands', 'Entrepreneurs'],
    icon: Palette,
    slug: 'logo-design',
  },

  {
    title: '3D Logo Design',
    tagline: 'Premium logos with depth & style',
    description:
      'Modern 3D logo concepts designed to give your brand a premium and visually powerful identity.',
    whoFor: ['Gaming Brands', 'YouTubers', 'Startups', 'Businesses'],
    icon: Box,
    slug: 'ThreeDlogo',
  },

  {
    title: 'Mascot Logo Design',
    tagline: 'Bold mascot branding that stands out',
    description:
      'Creative mascot logos perfect for gaming, sports, esports, and modern digital brands.',
    whoFor: ['Esports Teams', 'Streamers', 'Brands', 'Startups'],
    icon: Smile,
    slug: 'mascot-logo',
  },

  {
    title: 'Branding',
    tagline: 'Complete brand identity systems',
    description:
      'From colors to typography and brand style guides — we create branding that builds trust and recognition.',
    whoFor: ['Startups', 'Entrepreneurs', 'Companies'],
    icon: Palette,
    slug: 'branding',
  },

  // UPSELL AFTER LOGO / BRANDING

  {
    title: 'Web Design',
    tagline: 'Professional websites that convert',
    description:
      'Fast, modern, and mobile-friendly websites designed to turn visitors into paying customers.',
    whoFor: ['Startups', 'Small Businesses', 'Brands'],
    icon: Layout,
    slug: 'web-design',
  },

  {
    title: 'E-commerce Development',
    tagline: 'Online stores built to sell',
    description:
      'Scalable e-commerce websites with smooth shopping experiences and high-converting product pages.',
    whoFor: ['Retailers', 'Online Shops', 'Brands'],
    icon: ShoppingCart,
    slug: 'ecommerce-web-development',
  },

  {
    title: 'Mobile App Development',
    tagline: 'Apps your customers love to use',
    description:
      'Custom iOS and Android apps built for startups, businesses, and growing digital brands.',
    whoFor: ['Startups', 'Businesses', 'SaaS Platforms'],
    icon: Smartphone,
    slug: 'mobile-app-development',
  },

  {
    title: 'Custom Development',
    tagline: 'Tailored digital solutions',
    description:
      'Custom web applications and software solutions built around your unique business goals.',
    whoFor: ['Enterprises', 'SaaS Platforms', 'Agencies'],
    icon: Code,
    slug: 'custom-development',
  },

  // RETENTION & MARKETING SERVICES
  // These are strong recurring revenue upsells

  {
    title: 'Social Media Marketing',
    tagline: 'Grow your audience & sales',
    description:
      'Data-driven social media campaigns that help brands increase engagement, leads, and conversions.',
    whoFor: ['Brands', 'Startups', 'Businesses'],
    icon: Users,
    slug: 'social-media-marketing-smm',
  },

  {
    title: 'Lead Generation',
    tagline: 'Get qualified leads consistently',
    description:
      'Targeted lead generation campaigns designed to bring you high-quality customers ready to buy.',
    whoFor: ['B2B Companies', 'Service Providers', 'Agencies'],
    icon: Users,
    slug: 'lead-generation',
  },

  {
    title: 'SEO',
    tagline: 'Rank higher on Google',
    description:
      'SEO strategies that increase your visibility, drive organic traffic, and grow long-term revenue.',
    whoFor: ['Local Businesses', 'E-commerce Stores', 'Brands'],
    icon: Search,
    slug: 'search-engine-optimization-seo',
  },

  {
    title: 'Video Editing',
    tagline: 'Content that grabs attention fast',
    description:
      'Professional editing for reels, ads, YouTube videos, and social media content that converts viewers into customers.',
    whoFor: ['Content Creators', 'Brands', 'Businesses'],
    icon: Video,
    slug: 'video-editing',
  },
];


export default function ServicesSection() {
  return (
    <>
      <Navbar />
      <section id="services" className="pt-48 pb-32 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
              Full-Stack Digital Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
              From web design to app development and marketing, we provide end-to-end digital services designed to grow your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    tagline={service.tagline}
                    description={service.description.substring(0, 120)}
                    tags={service.whoFor.slice(0, 2)}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
            <section id="booking-form" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
              <BookingSection />
            </section>
      
            <TestimonialsSection />
      <Footer />
    </>
  );
}
