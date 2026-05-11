'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  TrendingUp,
  Palette,
  Check,
  ArrowDown,
  Calendar,
  MessageCircle,
  ArrowRight,
  Plus,
  Globe,
  Clock,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
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
    title: 'Local Plumbing Company Rebrand',
    category: 'Brand Identity & Guidelines',
    image: 'https://images.unsplash.com/photo-1581092160607-798e2415a214?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1581092160607-798e2415a214?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Family Restaurant Visual Identity',
    category: 'Logo, Colors & Signage',
    image: 'https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'HVAC Service Brand Launch',
    category: 'Complete Branding Package',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  },
];

const service = {
  title: 'Branding',
  tagline: 'Look Like the Professional Choice in Your Area',
  heroHeadline: 'A Brand That Builds Trust Fast',
  heroSubhead: 'We create clean, professional and consistent brand identities that help local businesses stand out, charge better prices, win more jobs and stop looking like the budget option.',
  trustCopy: 'Trusted by 180+ Local Service Businesses',
  icon: Palette,
  heroImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',

  whoFor: [
    'New businesses wanting to look established right away',
    'Local services with outdated or homemade looking branding',
    'Companies tired of being seen as the cheap option',
    'Owners ready to attract better customers and higher-paying jobs',
  ],

  whoNotFor: [
    'Businesses searching for a $20-50 logo only',
    'Owners happy using free Canva templates forever',
    'Companies not planning to invest in long-term image',
    'Businesses expecting instant fame without good service',
  ],

  problems: [
    {
      problem: 'Your current look feels homemade or inconsistent',
      solution: 'One clean professional identity used everywhere that raises your value instantly.',
    },
    {
      problem: 'You blend in with every other local competitor',
      solution: 'Distinct colors, logo and style that make you the obvious trusted choice.',
    },
    {
      problem: 'Marketing materials never look good or match',
      solution: 'Ready templates and clear rules so every post, flyer and sign looks pro.',
    },
  ],

  deliverables: [
    'Custom logo (main + simplified versions)',
    'Full color palette with exact codes',
    'Professional font pairing & sizes',
    'Brand style guide (easy PDF)',
    'Business card design (front & back)',
    'Social media profile & story templates',
    'Basic letterhead & email signature',
    '30 days of support after delivery',
  ],

  timeline: '2-4 Weeks',
  communication: 'WhatsApp, Email & Quick Weekly Updates',

  metrics: [
    { value: '75-85%', label: 'Clients See Higher Perceived Value' },
    { value: '2-3×', label: 'Faster Customer Trust' },
    { value: '100%', label: 'You Own All Files Forever' },
  ],

  packages: [
    {
      name: 'Essential Brand Package',
      description: 'Great starting point for new or very small businesses.',
      price: '$499',
      popular: false,
      features: [
        'Custom logo (3 different concepts)',
        'Main logo + simplified version',
        '5-7 color palette',
        'Recommended fonts & sizes',
        'Short brand style guide (PDF)',
        'Social media icons & covers',
        'Business card layout (both sides)',
        '4 rounds of revisions',
        'All source + ready files',
        '100% ownership rights',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No monthly or hidden fees',
      ],
    },
    {
      name: 'Professional Brand Package',
      description: 'Best choice for most local service businesses ready to stand out.',
      price: '$799',
      popular: true,
      features: [
        'Everything in Essential Package',
        'Logo animation (simple loading version)',
        'Detailed brand style guide (10+ pages)',
        '5 ready social media post templates',
        'Professional email signature',
        'Letterhead & envelope design',
        'Favicon and small digital icons',
        '6 rounds of revisions',
        'Dedicated project manager',
        'Faster response times',
        '100% ownership rights',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No monthly or hidden fees',
      ],
    },
    {
      name: 'Premium Brand Package',
      description: 'High-end look for businesses that charge premium rates.',
      price: '$1299',
      popular: false,
      features: [
        'Everything in Professional Package',
        'Unlimited logo concepts & changes',
        'Short tagline + brand voice guide',
        'Mockups showing real-world use',
        'Vehicle magnet / van signage concept',
        'Basic packaging or label design',
        'Extra digital banners & covers',
        'Unlimited revisions during creation',
        'Final expert team review',
        '100% ownership rights',
        'Satisfaction guarantee',
        'Money back guarantee',
        'No monthly or hidden fees',
      ],
    },
  ],

  process: [
    { title: 'Kickoff Conversation', desc: 'We talk about your business, customers, what you do best and your biggest goals.' },
    { title: 'Style & Concept Options', desc: 'You review mood boards and early logo directions before we go deep.' },
    { title: 'Full Design & Feedback', desc: 'We create the complete brand identity and refine everything with you.' },
    { title: 'Final Files & Guide', desc: 'You receive all files plus a short guide showing exactly how to use your brand.' },
  ],

  faqs: [
    {
      question: 'Can I make changes to the logo later?',
      answer: 'Yes. You get all source files (AI, PNG, JPG) so you or any designer can edit later. We also give 30 days of free small adjustments after handover.',
    },
    {
      question: 'What happens if I do not like the designs?',
      answer: 'We show multiple directions early and keep refining until you love it. If we cannot get it right our money-back guarantee covers you completely.',
    },
    {
      question: 'Do you create social media posts too?',
      answer: 'Every package includes branded post templates (square, story, landscape) so your social media always looks consistent and professional.',
    },
    {
      question: 'How soon will I receive everything?',
      answer: 'Most clients get final files in 2-4 weeks depending on the package and how fast feedback comes back.',
    },
  ],

  addOns: [
    { title: 'Tagline + Short Messaging', price: '$199', desc: 'Catchy tagline and 1-page guide on how to talk about your business.' },
    { title: 'Social Media Starter Kit', price: '$249', desc: '30 branded post templates + captions ready for your first month.' },
    { title: 'Local Print & Signage', price: '$399', desc: 'Van lettering, shop sign, banner, flyer concepts ready for printing.' },
  ],

  relatedServices: [
    { slug: 'web-design', title: 'Web Design', tagline: 'Website That Matches Your New Brand' },
    { slug: 'ecommerce-development', title: 'E-commerce Development', tagline: 'Online Store With Professional Branding' },
    { slug: 'search-engine-optimization-seo', title: 'SEO Services', tagline: 'Get Found Looking Like the Best Option' },
  ],
};

export default function BrandingPage() {
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
            <SectionHeader tag="The Reality Check" title="Why Most Local Businesses Stay Invisible" center={true} />

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
                    Everything Needed to Look Professional Immediately
                  </h2>
                  <p className="text-lg text-white mt-4 max-w-2xl">
                    No complicated extras. Just practical brand pieces you can start using right away.
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
        <PortfolioSection 
  service="branding"
  title="Branding & Identity Work We Created"
/>

        {/* PROCESS */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader tag="How It Works" title="Clear Steps - Professional Outcome" center={true} />

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
            <SectionHeader tag="Investment" title="Clear Pricing - Real Value" description="Pick the package that fits your stage and goals." center={true} />

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
            <h2 className="text-3xl md:text-5xl font-black mb-12">Why Local Owners Trust DezignLoop</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Globe className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Made for Local Markets</h3>
                <p className="text-white font-medium">We know how trust works in your city and create brands that win customers fast.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Clock className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Fast Turnaround</h3>
                <p className="text-white font-medium">Professional branding delivered in weeks at prices small businesses can afford.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <TrendingUp className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Real Business Impact</h3>
                <p className="text-white font-medium">Better look = higher prices, better clients and more word-of-mouth jobs.</p>
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
            <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">Finish Your Professional Image</h3>
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