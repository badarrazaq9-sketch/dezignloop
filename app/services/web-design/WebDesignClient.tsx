'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  TrendingUp,
  Layout,
  Check,
  ArrowDown,
  Calendar,
  MessageCircle,
  ArrowRight,
  Plus,
  Globe,
  Clock, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyTermsSection from '@/components/PrivacyTermsSection';
import BookingSection from '@/components/BookingForm';
import BlurIn from '@/components/BlurIn';
// import ServiceHeroIllustration from '@/components/ServiceHeroIllustration';
import SectionHeader from '@/components/SectionHeader';
import PortfolioCard from '@/components/PortfolioCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccordionItem from '@/components/AccordionItem';

const smoothScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Type for each proof/portfolio card
type ProofItem = {
  title: string;
  category: string;
  image: string;
  fullImage?: string; // optional: higher-res version for lightbox
};

// Sample data – replace with your real projects
const proofItems: ProofItem[] = [
  {
    title: 'Local HVAC Authority Site',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80 ',
    fullImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80 ',
  },
  {
    title: 'Family Restaurant Rebrand',
    category: 'Web Design & Branding',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80 ',
    fullImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80 ',
  },
  {
    title: 'Law Firm Digital Presence',
    category: 'Web Design & SEO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80 ',
    fullImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80 ',
  },
  // Add more items if you want (grid will auto-adjust)
];

const service = {
  title: 'Web Design',
  tagline: 'Websites That Work As Hard As You Do',
  heroHeadline: 'A Website That Gets You Customers',
  heroSubhead: 'Stop wasting money on pretty websites. We create high-performing digital storefronts that turn local searches into paying customers. Simple, effective, results-driven.',
  trustCopy: 'Trusted by 250+ Local Businesses Across America',
  icon: Layout,
  heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80 ',

  whoFor: [
    'Local service businesses ready to dominate their area',
    'New businesses needing a professional launch pad',
    'Established companies with outdated websites that need a refresh',
    'Anyone tired of watching competitors steal customers online',
  ],

  whoNotFor: [
    'Businesses looking for the cheapest option available',
    'Companies that want a website without understanding their customers',
    'Those expecting overnight success without quality service behind the site',
    'Businesses not ready to handle an increase in customer calls',
  ],

  problems: [
    {
      problem: 'Your Current Site Looks Dated or DIY',
      solution: 'Custom designs that instantly show professionalism and trust, making your business the obvious choice.',
    },
    {
      problem: 'Nobody Can Find Your Business on Google',
      solution: 'Built-in local SEO that helps nearby customers find your business exactly when they need it.',
    },
    {
      problem: 'Visitors Leave Without Calling or Buying',
      solution: 'Smart layouts that guide visitors naturally to book, call, or buy without any confusion.',
    },
  ],

  deliverables: [
    'Custom Mobile-First Design',
    'Google Business Profile Integration',
    'Contact Forms & Click-to-Call Setup',
    'Basic On-Page SEO Setup',
    'Content Management System (WordPress)',
    'SSL Security Certificate',
    'Fast Loading Speed Optimization',
    '30 Days Post-Launch Support',
  ],

  timeline: '1-3 Weeks Depending on Package',
  communication: 'Direct Phone & Email Access',

  metrics: [
    { value: '3x', label: 'More Customer Inquiries' },
    { value: '2s', label: 'Average Load Time' },
    { value: '100%', label: 'You Own Everything' },
  ],

  packages: [
    {
      name: 'Special',
      description: 'Perfect for getting started online without breaking the bank.',
      price: '$244',
      popular: false,
      features: [
        '1 Page Professional Design',
        'Mobile Responsive Layout',
        'Contact/Query Form',
        '1 Custom Banner Design',
        '3 Revision Rounds',
        'W3C Certified Clean Code',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
    {
      name: 'Classic',
      description: 'The sweet spot for most small businesses ready to look established.',
      price: '$394',
      popular: true,
      features: [
        '3 Page Complete Website',
        'Mobile Responsive Layout',
        'Hover Effects & Interactions',
        '2 Custom Banner Designs',
        'Sliding Hero Banner',
        '2 Professional Stock Photos',
        'Contact/Query Form',
        '6 Revision Rounds',
        'W3C Certified Clean Code',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
    {
      name: 'Unlimited',
      description: 'Serious web presence with unlimited flexibility to grow.',
      price: '$819',
      popular: false,
      features: [
        'Up to 5 Pages Website Design',
        'WordPress Content Management',
        '3 Custom Banner Designs',
        'Sliding Hero Banner',
        'Interactive Hover Effects',
        '3 Professional Stock Photos',
        'Search Engine Submission',
        'Unlimited Revisions',
        'W3C Certified Clean Code',
        'Expert Design & Dev Team',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
    {
      name: 'Elite',
      description: 'Premium presence for businesses ready to dominate their market.',
      price: '$1,399',
      popular: false,
      features: [
        '5 Pages Custom High-End Design',
        'WordPress Content Management',
        '5 Custom Banner Designs',
        'Sliding Interactive Banners',
        'Advanced Hover Effects',
        '5 Professional Stock Photos',
        'Mobile Responsive Design',
        'Online Booking Integration',
        '5 Professional Email Addresses',
        'Google Friendly Sitemap',
        'Search Engine Submission',
        'W3C Certified Clean Code',
        'Expert Design & Dev Team',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
    {
      name: 'Identity',
      description: 'Comprehensive solution for growing brands with complex needs.',
      price: '$1,799',
      popular: false,
      features: [
        '10 Pages Custom High-End Design',
        'WordPress or PHP Development',
        '10 Custom Interactive Banners',
        'Advanced Special Effects',
        '10 Professional Stock Photos',
        'Mobile Responsive Design',
        'Online Booking System',
        'Payment Gateway Integration',
        'Google Friendly Sitemap',
        'Search Engine Submission',
        'W3C Certified Clean Code',
        'Award-Winning Design Team',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
    {
      name: 'Corporate',
      description: 'Enterprise-level solution for established businesses scaling up.',
      price: '$3,399',
      popular: false,
      features: [
        '15-20 Pages Custom Design',
        'WordPress & PHP Development',
        'Up to 15 Custom Banner Designs',
        'Advanced Interactive Features',
        '15 Professional Stock Photos',
        'Unlimited Revisions',
        'Content Management System',
        'Online Booking & Payments',
        'Multi-Language Support',
        'Custom Dynamic Forms',
        'Newsletter Signup Integration',
        'Social Media Live Feeds',
        'Mobile Responsive Design',
        'Google Friendly Sitemap',
        'Search Engine Submission',
        'W3C Certified Clean Code',
        'Award-Winning Design Team',
        'Complete Deployment',
        'Full Source Files Handover',
        'Dedicated Project Manager',
        'Complete Ownership Rights',
        'Satisfaction Guarantee',
        'Money Back Guarantee',
        'No Monthly Fees Ever',
      ],
    },
  ],

  process: [
    { title: 'Discovery Call', desc: 'We learn about your business, your customers, and what success looks like for you. No cookie-cutter approaches here.' },
    { title: 'Design & Review', desc: 'You see exactly what your site will look like before we build it. Your feedback shapes the final result.' },
    { title: 'Development & Build', desc: 'We code everything to modern standards, optimize for speed, and ensure it works perfectly on every device.' },
    { title: 'Launch & Support', desc: 'We handle the technical launch and stay available for 30 days to ensure everything runs smoothly.' },
  ],

  faqs: [
    {
      question: 'Will I be able to update the website myself?',
      answer: 'Absolutely. We build on WordPress, the same platform powering 40% of the web. If you can use Microsoft Word, you can update your website. We also provide a simple video walkthrough showing you exactly how to make changes.',
    },
    {
      question: 'What if I do not like the design?',
      answer: 'You get multiple revision rounds included in every package. We do not move forward until you are thrilled with the design. Plus, our money-back guarantee means if we cannot get it right, you do not pay.',
    },
    {
      question: 'Are there any monthly fees or hidden costs?',
      answer: 'Never. You own your website completely. The only ongoing costs are your domain name and hosting (typically $10-20/month), which you control. We do not lock you into any proprietary systems or surprise you with bills.',
    },
    {
      question: 'How long until my website is live?',
      answer: 'Most sites launch within 1-3 weeks depending on the package and how quickly you provide feedback. We work on your timeline, not ours. Rush options are available if you need to launch faster.',
    },
  ],

  addOns: [
    { title: 'Copywriting', price: '$50/page', desc: 'Sales-focused copy that speaks directly to your ideal customers and drives action.' },
    { title: 'Logo Design', price: '$99', desc: 'Clean, memorable logo that works across all your marketing materials.' },
    { title: 'GMB Setup', price: '$149', desc: 'Complete optimization so you show up in local searches and Google Maps.' },
  ],

  relatedServices: [
    { slug: 'branding', title: 'Branding', tagline: 'Stand Out in a Crowded Market' },
    { slug: 'search-engine-optimization-seo', title: 'SEO Services', tagline: 'Get Found by Local Customers' },
    { slug: 'logo-design', title: 'Logo Design', tagline: 'Make a Memorable First Impression' },
  ],
};

export default function WebDesignPage() {
  const Icon = service.icon;
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ProofItem | null>(null);

  return (
    <>
      <Navbar />
      <div className="pt-32 bg-white dark:bg-slate-950">

        {/* ================= HERO ================= */}
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
            {/* Visual Block */}
            <div className="lg:w-1/2 w-full">
              <BlurIn delay={0.2}>
                <div className="h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden relative">

                  <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center group">

                    {/* Gradient wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />

                    {/* Noise texture */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://grainy-gradients.vercel.app/noise.svg ')] opacity-20 z-0 mix-blend-overlay" />

                    {/* Glow blobs */}
                    <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px] absolute top-1/4 right-1/4 animate-pulse z-0" />
                    <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] absolute bottom-1/4 left-1/4 animate-pulse animation-delay-2000 z-0" />

                    {/* Background image */}
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700 z-0"
                    />

                    {/* Center icon card */}
                    <div className="relative z-10 w-32 h-32 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 border border-white/20 dark:border-white/5 backdrop-blur-md">
                      <Icon size={48} className="text-primary drop-shadow-lg" />
                    </div>

                  </div>
                </div>
              </BlurIn>
            </div>

          </div>
        </section>

        {/* ================= WHO IT'S FOR ================= */}
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
                    {service.whoFor.map((item: string, i: number) => (
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
                    {service.whoNotFor.map((item: string, i: number) => (
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

        {/* ================= PROBLEM → SOLUTION (REDESIGNED) ================= */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <SectionHeader tag="The Reality Check" title="Why Most Small Business Websites Fail" center={true} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {service.problems.map((item: any, idx: number) => (
                <BlurIn key={idx} delay={idx * 0.1}>
                  <div className="group h-full relative">
                    {/* Connection Line */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-red-200 to-primary/50 z-0 lg:hidden"></div>

                    {/* Problem Card */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 mb-4 lg:mb-6 relative z-10 group-hover:translate-y-1 transition-transform">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-black text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">The Frustration</div>
                        <XCircle size={20} className="text-slate-300 dark:text-slate-700" />
                      </div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">{item.problem}</p>
                    </div>

                    {/* Connector Icon */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 rounded-full p-2 border border-slate-100 dark:border-slate-700 shadow-sm hidden lg:block">
                      <ArrowDown size={16} className="text-slate-300" />
                    </div>

                    {/* Solution Card */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-primary/10 dark:border-primary/20 shadow-xl shadow-primary/5 dark:shadow-primary/10 relative z-10 group-hover:-translate-y-1 transition-transform ">
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

        {/* ================= DELIVERABLES & METRICS ================= */}
        <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Left Column: Deliverables */}
              <div className="lg:col-span-7">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                      What You Get
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-white">
                    Everything You Need to Succeed Online
                  </h2>

                  <p className="text-lg text-white mt-4 max-w-2xl">
                    No technical headaches, no surprise upsells. Just a complete website solution that works.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-12">
                  {service.deliverables.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-primary" strokeWidth={4} />
                      </div>
                      <span className="font-bold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>



                {/* Timeline & Communication Card */}
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
                          <div className="text-xs font-bold text-white uppercase tracking-widest">How We Communicate</div>
                          <div className="font-black text-xl text-white mt-1">{service.communication}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6">
                  {service.metrics.map((metric: any, i: number) => (
                    <BlurIn key={i} delay={0.2 + (i * 0.1)}>
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

        {/* ================= PROOF/PORTFOLIO ================= */}
        <PortfolioSection
          service="web-design"
          title="Web Design Projects That Delivered Results"
        />
        {/* ================= PROCESS (REDESIGNED) ================= */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader tag="How It Works" title="Simple Process, Stunning Results" center={true} />

            <div className="relative mt-20">
              {/* Connector Line */}
              {/* <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-primary/50 to-slate-200 dark:from-slate-800 dark:via-primary/50 dark:to-slate-800 rounded-full"></div> */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {service.process.map((step: any, i: number) => (
                  <BlurIn key={i} delay={i * 0.1}>
                    <div className="relative group text-center md:pt-12">
                      {/* Number Badge */}
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

        {/* ================= PRICING ================= */}
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <SectionHeader tag="Investment" title="Transparent Pricing, Real Value" description="Choose the package that matches where you are today and where you want to go tomorrow." center={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {service.packages.map((pkg: any, i: number) => (
                <BlurIn key={i} delay={i * 0.1}>
                  <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col ${pkg.popular ? 'bg-gradient-to-br from-[#1C9FF0] to-[#010FFF]  bg-gradient-to-br from-[#1C9FF0] to-[#010FFF]  text-white shadow-2xl scale-105 z-10 border-slate-900 dark:border-slate-700' : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-#000 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xl'}`}>
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

                    <div className="overflow-y-auto h-[20em] space-y-4 mb-8 flex-grow">
                      {pkg.features.map((feat: string, j: number) => (
                        <div key={j} className="flex items-start gap-3 text-sm font-bold">
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

            {/* Add-ons */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h4 className="text-center font-black text-xl mb-8 text-slate-900 dark:text-white">Popular Add-Ons to Maximize Your Results</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.addOns.map((addon: any, i: number) => (
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

        {/* ================= WHY US ================= */}
        <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF]  dark:bg-black text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12">Why Local Business Owners Trust DezignLoop</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Globe className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Built for Local Markets</h3>
                <p className="text-white font-medium">We understand how customers in your area actually search and make decisions. Every site is optimized for local discovery.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Clock className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Fast Turnaround</h3>
                <p className="text-white font-medium">Most agencies take months. We deliver in weeks because we know every day without a proper website is lost revenue.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <TrendingUp className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Results That Matter</h3>
                <p className="text-white font-medium">Pretty designs do not pay bills. We focus on the metrics that grow your business: calls, bookings, and sales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <TestimonialsSection />

        {/* ================= FAQs ================= */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeader tag="Common Questions" title="Everything You Need to Know" center={true} />
            <div className="space-y-4">
              {service.faqs.map((faq: any, i: number) => (
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
        {/* ================= RELATED SERVICES ================= */}
        <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">Complete Your Digital Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedServices.map((item: any) => (
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