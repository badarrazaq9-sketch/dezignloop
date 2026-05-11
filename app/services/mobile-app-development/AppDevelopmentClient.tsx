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
  Smartphone
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
    title: 'Local Service Booking App',
    category: 'iOS & Android Mobile App',
    image: 'https://images.unsplash.com/photo-1516321310765-6d6b9d0b0b0e?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1516321310765-6d6b9d0b0b0e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Restaurant Ordering App',
    category: 'Food Delivery & Pickup',
    image: 'https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'E-commerce Shopping App',
    category: 'Product Catalog & Cart',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
    fullImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80',
  },
];

const service = {
  title: 'App Development',
  tagline: 'Custom Mobile Apps That Bring Customers to You',
  heroHeadline: 'Your Business, On Their Phones',
  heroSubhead: 'We build fast, reliable mobile apps for iOS and Android that help local businesses take bookings, sell products, manage orders and connect directly with customers – without complicated tech headaches.',
  trustCopy: 'Built 80+ Mobile Apps for Local & Small Businesses',
  icon: Smartphone,
  heroImage: 'https://images.unsplash.com/photo-1516321310765-6d6b9d0b0b0e?auto=format&fit=crop&w=1200&q=80',

  whoFor: [
    'Local service businesses wanting online bookings & appointments',
    'Restaurants, cafes and food businesses needing order apps',
    'Small shops & stores ready to sell products on mobile',
    'Owners tired of relying only on phone calls or walk-ins',
  ],

  whoNotFor: [
    'Businesses expecting a full app for $500',
    'Companies not ready to maintain or update the app later',
    'Owners wanting complex enterprise-level features on a small budget',
    'Businesses without clear idea of what the app should do',
  ],

  problems: [
    {
      problem: 'Customers keep asking for online booking or ordering',
      solution: 'A simple app lets them book or order anytime, reducing phone time.',
    },
    {
      problem: 'You lose sales because you have no mobile presence',
      solution: 'Your own branded app makes you look modern and trustworthy.',
    },
    {
      problem: 'Existing solutions are too expensive or complicated',
      solution: 'Custom app built exactly for your business at fair price.',
    },
  ],

  deliverables: [
    'Native iOS and/or Android app',
    'Clean & user-friendly UI/UX design',
    'Core features implemented (booking, cart, payments, etc.)',
    'App Store & Google Play submission support',
    'Source code & full ownership',
    '30 days post-launch bug fixes & support',
  ],

  timeline: '4–16 Weeks (depending on package)',
  communication: 'WhatsApp, Email & Weekly Progress Updates',

  metrics: [
    { value: '70–90%', label: 'Clients See More Bookings/Orders' },
    { value: '4–8', label: 'Weeks to First Launch (Starter)' },
    { value: '100%', label: 'You Own the App & Code' },
  ],

  packages: [
    {
      name: 'Basic Package',
      description: 'Perfect for starting with a simple, single-platform app.',
      price: '$999',
      popular: false,
      features: [
        'Development for a single platform (iOS or Android)',
        'Basic UI/UX design',
        'Up to 5 unique app screens',
        'Standard features implementation',
        '2-week development timeline',
        '1 round of revisions',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) or IPA (iOS)',
      ],
    },
    {
      name: 'Standard Package',
      description: 'Best choice for most local businesses – both platforms.',
      price: '$1999',
      popular: true,
      features: [
        'Development for both iOS and Android platforms',
        'Enhanced UI/UX design',
        'Up to 10 unique app screens',
        'Advanced features implementation',
        '4-week development timeline',
        '2 rounds of revisions',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) and IPA (iOS)',
      ],
    },
    {
      name: 'Premium Package',
      description: 'High-end custom app with unlimited flexibility.',
      price: '$4999',
      popular: false,
      features: [
        'Development for both iOS and Android platforms',
        'Custom UI/UX design',
        'Unlimited app screens',
        'Advanced features implementation with API integration',
        '8-week development timeline',
        'Unlimited rounds of revisions',
        'Priority support',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) and IPA (iOS)',
      ],
    },
    {
      name: 'Starter E-Commerce Package',
      description: 'Great entry for small shops wanting to sell online.',
      price: '$2999',
      popular: false,
      features: [
        'Development for a single platform (iOS or Android)',
        'Basic UI/UX design optimized for e-commerce functionalities',
        'Integration with popular payment gateways (e.g., PayPal, Stripe)',
        'Limited product catalog (up to 100 products)',
        'Standard features implementation (e.g., product search, cart management)',
        '8-week development timeline',
        '2 rounds of revisions',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) or IPA (iOS)',
      ],
    },
    {
      name: 'Business E-Commerce Package',
      description: 'Ideal for growing stores with more products and features.',
      price: '$7999',
      popular: false,
      features: [
        'Development for both iOS and Android platforms',
        'Custom UI/UX design tailored to your brand and target audience',
        'Integration with advanced payment gateways and inventory management systems',
        'Expanded product catalog (up to 500 products)',
        'Enhanced features implementation (e.g., personalized recommendations, wishlist)',
        '12-week development timeline',
        '3 rounds of revisions',
        'Priority support',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) and IPA (iOS)',
      ],
    },
    {
      name: 'Enterprise E-Commerce Package',
      description: 'Full-featured app for serious online sellers.',
      price: '$15999',
      popular: false,
      features: [
        'Development for both iOS and Android platforms',
        'Premium UI/UX design with advanced interactive elements and animations',
        'Integration with custom payment solutions and ERP systems',
        'Unlimited product catalog',
        'Comprehensive features implementation (e.g., loyalty programs, multi-language support)',
        '16-week development timeline',
        'Unlimited rounds of revisions',
        'Dedicated project manager',
        '24/7 priority support',
        'Ownership rights',
        'Satisfaction guarantee',
        'Free delivery of final app files',
        'Supported formats: APK (Android) and IPA (iOS)',
      ],
    },
  ],

  process: [
    { title: 'Discovery & Planning', desc: 'We understand your business, customers and exact app goals.' },
    { title: 'Design & Prototype', desc: 'We create wireframes and visual designs for your approval.' },
    { title: 'Development & Testing', desc: 'We build the app, test thoroughly and fix any issues.' },
    { title: 'Launch & Support', desc: 'We submit to app stores and give you training + 30 days support.' },
  ],

  faqs: [
    {
      question: 'Do you build for iOS, Android or both?',
      answer: 'We build native apps for both. Starter packages are single-platform, higher ones include both iOS and Android.',
    },
    {
      question: 'How long does it take?',
      answer: 'Timeline depends on complexity: 2 weeks for Basic, up to 16 weeks for Enterprise E-Commerce.',
    },
    {
      question: 'Will I own the app and code?',
      answer: 'Yes – 100% ownership and full source code delivered to you upon completion.',
    },
    {
      question: 'Can I update the app later?',
      answer: 'Yes. You get all source files so you or any developer can make future changes easily.',
    },
  ],

  addOns: [
    { title: 'Payment Gateway Integration', price: '$499', desc: 'Stripe, PayPal, local gateways setup & testing.' },
    { title: 'Push Notifications Setup', price: '$299', desc: 'Send order updates, promotions and reminders.' },
    { title: 'Ongoing Maintenance', price: '$199/month', desc: 'Bug fixes, updates and store compliance.' },
  ],

  relatedServices: [
    { slug: 'web-design', title: 'Web Design', tagline: 'Website That Works With Your App' },
    { slug: 'branding', title: 'Branding', tagline: 'Logo & Identity for Your App' },
    { slug: 'lead-generation', title: 'Lead Generation', tagline: 'Drive Users to Download Your App' },
  ],
};

export default function AppDevelopmentPage() {
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
            <SectionHeader tag="The Reality Check" title="Why Most Local Businesses Miss Mobile Customers" center={true} />

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
                    Everything Needed for Your Mobile App
                  </h2>
                  <p className="text-lg text-white mt-4 max-w-2xl">
                    Clear deliverables that get your app live and working for customers.
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
          service="app-development"
          title="Mobile Apps We’ve Developed"
        />

        {/* PROCESS */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <SectionHeader tag="How It Works" title="Clear Steps to Your App Launch" center={true} />

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
            <SectionHeader tag="Investment" title="Transparent Pricing for Your App" description="Choose the package that matches your business needs." center={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
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
            <h2 className="text-3xl md:text-5xl font-black mb-12">Why Local Owners Choose DezignLoop for Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Globe className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Built for Local Businesses</h3>
                <p className="text-white font-medium">We understand what small services and shops need in a mobile app.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Clock className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Fast & Affordable</h3>
                <p className="text-white font-medium">Launch-ready apps in weeks, not years – at prices small businesses can afford.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <TrendingUp className="text-white mb-6" size={32} />
                <h3 className="text-xl font-black mb-4">Real Business Results</h3>
                <p className="text-white font-medium">More bookings, orders and revenue – not just a pretty app.</p>
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
            <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">Complete Your Digital Presence</h3>
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