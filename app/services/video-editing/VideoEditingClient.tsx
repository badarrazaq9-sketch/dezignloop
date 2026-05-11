'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  TrendingUp,
  Check,
  ArrowDown,
  Calendar,
  MessageCircle,
  ArrowRight,
  Plus,
  Globe,
  Clock,
  X,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingForm';
import BlurIn from '@/components/BlurIn';
import SectionHeader from '@/components/SectionHeader';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccordionItem from '@/components/AccordionItem';

const smoothScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

type ProofItem = {
  title: string;
  category: string;
  image: string;
  fullImage?: string;
};

const proofItems: ProofItem[] = [
  {
    title: 'Social Media Ad Editing',
    category: 'Short-Form Video Optimization',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'YouTube Channel Revamp',
    category: 'Long-Form Video Editing & Branding',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'E-Commerce Product Videos',
    category: 'Motion Graphics & Conversion Focused Editing',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80',
  },
];

const service = {
  title: 'Video Editing Services',
  tagline: 'Edit Videos That Hold Attention and Drive Action',
  heroHeadline: 'Videos That Stop the Scroll',
  heroSubhead: 'We edit short-form ads, reels, YouTube videos and product content for local businesses and creators. Fast cuts, strong hooks, clean sound and platform-optimized edits that increase views, engagement and real customer actions.',
  trustCopy: 'Edited 200+ Videos for Local Brands & Creators',
  icon: Video,
  heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',

  whoFor: [
    'Local businesses running Facebook/Instagram ads',
    'Restaurants & services wanting engaging reels',
    'Creators & small brands posting regularly',
    'Owners tired of low-performing homemade videos',
  ],

  whoNotFor: [
    'Businesses with no clear video goal',
    'Clients expecting Hollywood-level VFX on small budget',
    'Projects needing same-day turnaround',
    'Raw footage without any direction or plan',
  ],

  problems: [
    {
      problem: 'Videos lose viewers in first 3 seconds',
      solution: 'Strong hooks, fast pacing and attention-grabbing edits from the start.',
    },
    {
      problem: 'Content looks amateur and unprofessional',
      solution: 'Clean cuts, color grading, sound cleanup and polished transitions.',
    },
    {
      problem: 'Ads do not convert or get low engagement',
      solution: 'Platform-specific optimization (aspect ratio, captions, CTAs).',
    },
  ],

  deliverables: [
    'Edited short-form videos (Reels, Shorts, TikTok, Ads)',
    'YouTube & longer-form video editing',
    'Color correction & grading',
    'Sound design & music sync',
    'Motion graphics & text overlays',
    'Multiple formats per platform',
    'Source project files (if requested)',
    '30 days post-delivery support',
  ],

  timeline: '3–10 Business Days per Batch',
  communication: 'WhatsApp, Email & Google Drive Links',

  metrics: [
    { value: '+40–80%', label: 'Average Watch Time Increase' },
    { value: '2–5×', label: 'More Engagement on Edited Content' },
    { value: '100%', label: 'You Own All Final Files' },
  ],

  packages: [
    {
      name: 'Starter Edits',
      description: 'Great for small businesses and creators starting video content.',
      price: '$349',
      popular: false,
      features: [
        'Up to 6 short videos per month',
        'Basic cuts, captions & transitions',
        'Simple color correction',
        'Stock music & sound effects',
        '1 round of revisions per video',
        'Delivery in 5–7 business days',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No hidden fees',
      ],
    },
    {
      name: 'Professional Edits',
      description: 'Best choice for local businesses running ads and growing online.',
      price: '$649',
      popular: true,
      features: [
        'Up to 12 short videos per month',
        'Advanced hooks & pacing',
        'Professional color grading',
        'Custom text animations & motion graphics',
        'Sound design & voiceover sync',
        '2 rounds of revisions per video',
        'Priority turnaround (3–5 days)',
        'Multiple aspect ratios & formats',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No hidden fees',
      ],
    },
    {
      name: 'Premium Video Package',
      description: 'High-end editing for brands wanting maximum impact and quality.',
      price: '$1149',
      popular: false,
      features: [
        'Up to 20 videos per month (short + long-form)',
        'Premium editing with cinematic feel',
        'Advanced motion graphics & VFX elements',
        'Custom music editing & sound design',
        'Unlimited revisions during active month',
        'Dedicated editor + weekly calls',
        '4K delivery & source files',
        'Same-week turnaround on priority',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No hidden fees',
      ],
    },
  ],

  process: [
    { title: 'Brief & Raw Files', desc: 'You send goals, raw footage and references.' },
    { title: 'First Cut & Feedback', desc: 'We deliver rough edit for your review.' },
    { title: 'Revisions & Polish', desc: 'We refine based on feedback until perfect.' },
    { title: 'Final Delivery', desc: 'You receive all formats + source files if needed.' },
  ],

  faqs: [
    {
      question: 'What platforms do you optimize for?',
      answer: 'We tailor edits for Instagram Reels, TikTok, YouTube Shorts, Facebook Ads, YouTube long-form and more.',
    },
    {
      question: 'Do I need to provide music or assets?',
      answer: 'We use royalty-free libraries or your own music. We can also suggest licensed tracks.',
    },
    {
      question: 'Can I get the project files?',
      answer: 'Yes – all final exports are yours. Source project files available on Premium package.',
    },
    {
      question: 'How many revisions do I get?',
      answer: 'Starter: 1 round per video, Professional: 2 rounds, Premium: unlimited during active month.',
    },
  ],

  addOns: [
    { title: 'Extra Short Videos', price: '$49 each', desc: 'Additional reels or shorts beyond package limit.' },
    { title: 'Thumbnail Design', price: '$29 each', desc: 'High-converting custom thumbnails.' },
    { title: 'Voiceover Recording', price: '$99 per video', desc: 'Professional voiceover added.' },
  ],

  relatedServices: [
    { slug: 'social-media-marketing-smm', title: 'Social Media Marketing', tagline: 'Content Strategy & Posting' },
    { slug: 'branding', title: 'Branding', tagline: 'Consistent Style for Videos' },
    { slug: 'lead-generation', title: 'Lead Generation', tagline: 'Ads That Convert Video Views' },
  ],
};

export default function VideoEditingPage() {
  const Icon = service.icon;
  const [selectedItem, setSelectedItem] = useState<ProofItem | null>(null);

  return (
    <>
      <Navbar />
      <div className="pt-32 bg-white dark:bg-slate-950">

        {/* HERO */}
        <section className="container mx-auto px-4 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 z-10">
              <BlurIn>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary mb-8 transition-colors"
                >
                  <ArrowRight className="rotate-180" size={16} />
                  Back to Services
                </Link>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-100 dark:border-blue-800 w-fit">
                  <Icon size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{service.title} Service</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.95]">
                  {service.heroHeadline}
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                  {service.heroSubhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => smoothScroll('booking-form')}
                    className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-center cursor-pointer"
                  >
                    Get Free Consultation
                  </button>
                  <a
                    href="#pricing"
                    className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center"
                  >
                    View Packages
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-slate-500">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{service.trustCopy}</span>
                </div>
              </BlurIn>
            </div>

            <div className="lg:w-1/2 w-full">
              <BlurIn delay={0.2}>
                <div className="h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden relative">
                  <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
                    <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px] absolute top-1/4 right-1/4 animate-pulse z-0" />
                    <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] absolute bottom-1/4 left-1/4 animate-pulse animation-delay-2000 z-0" />
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700 z-0"
                    />
                    <div className="relative z-10 w-32 h-32 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 border border-white/20 dark:border-white/5 backdrop-blur-md">
                      <Icon size={48} className="text-primary drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </BlurIn>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <BlurIn delay={0.1}>
                <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-green-100 dark:border-green-900/30 shadow-sm h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Check size={20} strokeWidth={4} />
                    </div>
                    This Is Perfect For You If
                  </h3>
                  <ul className="space-y-4">
                    {service.whoFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurIn>
              <BlurIn delay={0.2}>
                <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-red-50 dark:border-red-900/30 shadow-sm h-full opacity-80 hover:opacity-100 transition-all">
                  <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 dark:text-red-400">
                      <XCircle size={20} strokeWidth={3} />
                    </div>
                    We Might Not Be the Best Fit If
                  </h3>
                  <ul className="space-y-4">
                    {service.whoNotFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-medium text-slate-500 dark:text-slate-400">
                        <XCircle size={20} className="text-red-300 dark:text-red-900/50 flex-shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurIn>
            </div>
          </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <SectionHeader tag="The Reality Check" title="Why Most Business Videos Get Ignored" center={true} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {service.problems.map((item, idx) => (
                <BlurIn key={idx} delay={idx * 0.1}>
                  <div className="group h-full relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-red-200 to-primary/50 z-0 lg:hidden"></div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 mb-4 lg:mb-6 relative z-10 group-hover:translate-y-1 transition-transform">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-black text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">The Frustration</div>
                        <XCircle size={20} className="text-slate-300 dark:text-slate-700" />
                      </div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">{item.problem}</p>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 rounded-full p-2 border border-slate-100 dark:border-slate-700 shadow-sm hidden lg:block">
                      <ArrowDown size={16} className="text-slate-300" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-primary/10 dark:border-primary/20 shadow-xl shadow-primary/5 dark:shadow-primary/10 relative z-10 group-hover:-translate-y-1 transition-transform">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">How We Fix It</div>
                        <CheckCircle2 size={20} className="text-primary" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </BlurIn>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES & METRICS */}
        <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                      What You Get
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">
                    Professional Video Editing Delivered
                  </h2>
                  <p className="text-lg text-white mt-4 max-w-2xl">
                    Everything needed to make your videos perform better and look pro.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-12">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-primary" strokeWidth={4} />
                      </div>
                      <span className="font-bold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                          <Calendar className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white uppercase tracking-widest">Typical Timeline</div>
                          <div className="font-black text-xl text-white mt-1">{service.timeline}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                          <MessageCircle className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white uppercase tracking-widest">Communication</div>
                          <div className="font-black text-xl text-white mt-1">{service.communication}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  {service.metrics.map((metric, i) => (
                    <BlurIn key={i} delay={0.2 + i * 0.1}>
                      <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] flex items-center justify-between hover:bg-white/10 transition-colors group">
                        <div>
                          <div className="text-5xl lg:text-6xl font-black mb-2 tracking-tighter group-hover:text-primary transition-colors">{metric.value}</div>
                          <div className="text-sm font-bold text-white uppercase tracking-widest">{metric.label}</div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <TrendingUp size={32} />
                        </div>
                      </div>
                    </BlurIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        {/* <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <SectionHeader tag="Real Results" title="Videos That Performed Better After Editing" center={true} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-12 md:mt-16">
              {proofItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-xl"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-black mb-6">
                      {item.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <button
                onClick={() => smoothScroll('booking-form')}
                className="inline-flex items-center gap-2 font-black text-lg border-b-2 border-primary hover:text-primary transition-colors pb-1 text-slate-800 dark:text-white cursor-pointer"
              >
                Want videos that convert? Let us talk <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={() => setSelectedItem(null)}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                  className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <img
                    src={selectedItem.fullImage || selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />

                  <div className="p-6 md:p-8">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-2 mb-3">
                      {selectedItem.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section> */}

        {/* PROCESS */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader tag="How It Works" title="Clear Steps to Better Videos" center={true} />

            <div className="relative mt-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {service.process.map((step, i) => (
                  <BlurIn key={i} delay={i * 0.1}>
                    <div className="relative group text-center md:pt-12">
                      <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 group-hover:border-primary transition-all duration-300 mb-6 md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2">
                        <span className="text-3xl font-black text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">0{i + 1}</span>
                      </div>

                      <div className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full">
                        <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">{step.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </BlurIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <SectionHeader tag="Investment" title="Clear Pricing for Video Editing" description="Monthly packages designed for local businesses and creators." center={true} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {service.packages.map((pkg, i) => (
                <BlurIn key={i} delay={i * 0.1}>
                  <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col ${pkg.popular ? 'bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white shadow-2xl scale-105 z-10 border-slate-900 dark:border-slate-700' : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl'}`}>
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-black dark:border-white">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                      <div className="text-sm opacity-70 font-medium mb-6 min-h-[40px]">{pkg.description}</div>
                      <div className="text-4xl font-black tracking-tight">{pkg.price}</div>
                    </div>

                    <div className="overflow-y-auto h-[20em] space-y-4 mb-8 flex-grow text-sm">
                      {pkg.features.map((feat, j) => (
                        <div key={j} className="flex items-start gap-3 font-bold">
                          <CheckCircle2 size={18} className={`flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-green-500'}`} />
                          <span className={pkg.popular ? 'text-slate-200' : 'text-slate-600 dark:text-slate-400'}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={() => smoothScroll('booking-form')} className={`w-full py-4 rounded-xl font-black text-center transition-all cursor-pointer ${pkg.popular ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200'}`}>
                      Get Started
                    </button>
                  </div>
                </BlurIn>
              ))}
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <h4 className="text-center font-black text-xl mb-8 text-slate-900 dark:text-white">Helpful Add-Ons</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.addOns.map((addon, i) => (
                  <div key={i} className="flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        <Plus size={16} className="text-slate-400" />
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">{addon.title}</div>
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-3 flex-grow">{addon.desc}</div>
                    <div className="font-black text-slate-900 dark:text-white text-lg">{addon.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] dark:bg-black text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12">Why Local Brands & Creators Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Video className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Made for Performance</h3>
                <p className="text-white font-medium">Every edit is built to increase watch time, engagement and conversions.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Clock className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Fast Turnaround</h3>
                <p className="text-white font-medium">Professional edits delivered in days, not weeks – perfect for weekly posting.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <TrendingUp className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Real Results Focus</h3>
                <p className="text-white font-medium">More views, messages and customers – not just pretty videos.</p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeader tag="Questions" title="Common Questions Answered" center={true} />
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-2">
                  <AccordionItem question={faq.question} answer={faq.answer} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking-form">
          <BookingSection />
        </section>

        <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">Grow Your Video Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedServices.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug} className="group block bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}