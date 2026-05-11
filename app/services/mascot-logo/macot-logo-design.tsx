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
    Globe,
    Clock,
    Sparkles,
    Heart,
    Users,
    Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingForm';
import BlurIn from '@/components/BlurIn';
import SectionHeader from '@/components/SectionHeader';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccordionItem from '@/components/AccordionItem';
import PortfolioSection from '@/components/PortfolioSection';

const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const service = {
    title: 'Mascot Logo Design',
    tagline: 'A Friendly Face That Builds Instant Connection',
    heroHeadline: 'A Character People Love & Remember',
    heroSubhead:
        'We design unique, memorable mascot characters that become the friendly face of your brand. Perfect for businesses wanting emotional connection, brand loyalty, and a personality that stands out in any market.',
    trustCopy: 'Created 90+ Mascot Characters for Brands Worldwide',
    icon: Heart,
    heroImage:
        'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',

    whoFor: [
        'Businesses wanting emotional connection with customers',
        'Brands targeting families, kids, or young audiences',
        'Sports teams, esports, and gaming organizations',
        'Food brands, restaurants, and cafes',
        'Companies wanting a memorable brand personality',
    ],

    whoNotFor: [
        'Businesses wanting serious, corporate-only identity',
        'Clients expecting 100 mascot concepts for $50',
        'Brands in ultra-professional sectors (law, finance)',
        'Projects needing same-day mascot delivery',
    ],

    problems: [
        {
            problem: 'Your brand feels cold and forgettable',
            solution:
                'A friendly mascot character that creates instant emotional bond and memorability.',
        },
        {
            problem: 'Customers do not connect with your logo',
            solution:
                'A relatable character personality that tells your story and builds loyalty.',
        },
        {
            problem: 'You blend in with boring, generic branding',
            solution:
                'A unique mascot that becomes your brand ambassador across all platforms.',
        },
    ],

    deliverables: [
        'Custom mascot character design (multiple poses)',
        'Full color palette for mascot application',
        'Mascot style guide (character rules & usage)',
        'Social media profile icons and covers',
        'Merchandise-ready files (T-shirt, stickers, etc.)',
        'Animated mascot expressions (GIF set)',
        'Business card and stationery mockups',
        'Full ownership & source files',
    ],

    timeline: '10-21 Business Days (Scope Dependent)',
    communication: 'WhatsApp, Email & Weekly Character Previews',

    metrics: [
        { value: '2-4×', label: 'Higher Brand Recall with Mascots' },
        { value: '70%', label: 'Clients See Increased Engagement' },
        { value: '100%', label: 'Full Ownership & Source Files' },
    ],

    process: [
        {
            title: 'Brief & Personality',
            desc: 'You share your brand values, target audience, and the personality traits your mascot should embody.',
        },
        {
            title: 'Character Concepts',
            desc: 'We present 3-5 unique mascot character sketches with different styles and expressions.',
        },
        {
            title: 'Revisions & Poses',
            desc: 'We refine the chosen character and create multiple poses and expressions.',
        },
        {
            title: 'Final Delivery & Guide',
            desc: 'You receive all mascot files, poses, expressions + usage guidelines.',
        },
    ],

    faqs: [
        {
            question: 'How many mascot concepts do I get?',
            answer:
                'We typically present 3-5 unique character concepts in the initial round. Higher-tier packages include unlimited concepts until you find the perfect character.',
        },
        {
            question: 'Do I own the mascot character fully?',
            answer: 'Yes - 100% ownership and all source files delivered upon completion. The character is yours exclusively.',
        },
        {
            question: 'Can I use the mascot on merchandise?',
            answer:
                'Absolutely. Every package includes merchandise-ready files perfect for T-shirts, stickers, mugs, packaging, and promotional items.',
        },
        {
            question: 'What if I need the mascot in different poses later?',
            answer:
                'We create multiple poses during the project. Additional poses or expressions can be requested as add-ons anytime after delivery.',
        },
    ],
};

export default function MascotLogoPage() {
    const Icon = service.icon;

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
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        {service.title} Service
                                    </span>
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
                                        href="#portfolio"
                                        className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center"
                                    >
                                        View Our Work
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
                                        <div className="w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] absolute bottom-1/4 left-1/4 animate-pulse animation-delay-2000 z-0" />
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
                                                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />{' '}
                                                {item}
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
                                                <XCircle size={20} className="text-red-300 dark:text-red-900/50 flex-shrink-0 mt-0.5" />{' '}
                                                {item}
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
                        <SectionHeader tag="The Reality Check" title="Why Brands Without Mascots Struggle to Connect" center={true} />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {service.problems.map((item, idx) => (
                                <BlurIn key={idx} delay={idx * 0.1}>
                                    <div className="group h-full relative">
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-red-200 to-primary/50 z-0 lg:hidden"></div>

                                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 mb-4 lg:mb-6 relative z-10 group-hover:translate-y-1 transition-transform">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-xs font-black text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
                                                    The Struggle
                                                </div>
                                                <XCircle size={20} className="text-slate-300 dark:text-slate-700" />
                                            </div>
                                            <p className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                                                {item.problem}
                                            </p>
                                        </div>

                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 rounded-full p-2 border border-slate-100 dark:border-slate-700 shadow-sm hidden lg:block">
                                            <ArrowDown size={16} className="text-slate-300" />
                                        </div>

                                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-primary/10 dark:border-primary/20 shadow-xl shadow-primary/5 dark:shadow-primary/10 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                                    How We Fix It
                                                </div>
                                                <CheckCircle2 size={20} className="text-primary" />
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                                {item.solution}
                                            </p>
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
                                        Complete Mascot Character & Brand Kit
                                    </h2>
                                    <p className="text-lg text-white mt-4 max-w-2xl">
                                        Everything needed to bring your brand character to life across all platforms.
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
                                                    <div className="text-xs font-bold text-white uppercase tracking-widest">
                                                        Typical Timeline
                                                    </div>
                                                    <div className="font-black text-xl text-white mt-1">
                                                        {service.timeline}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                                                    <MessageCircle className="text-primary" size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-white uppercase tracking-widest">
                                                        Communication
                                                    </div>
                                                    <div className="font-black text-xl text-white mt-1">
                                                        {service.communication}
                                                    </div>
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
                                                    <div className="text-5xl lg:text-6xl font-black mb-2 tracking-tighter group-hover:text-primary transition-colors">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-sm font-bold text-white uppercase tracking-widest">
                                                        {metric.label}
                                                    </div>
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
                <section id="portfolio">
                    <PortfolioSection
                        service="mascot-logo"
                        title="Mascot Characters We Brought to Life"
                    />
                </section>

                {/* PROCESS */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
                    <div className="container mx-auto px-4">
                        <SectionHeader tag="How It Works" title="From Idea to Lovable Character" center={true} />

                        <div className="relative mt-20">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {service.process.map((step, i) => (
                                    <BlurIn key={i} delay={i * 0.1}>
                                        <div className="relative group text-center md:pt-12">
                                            <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 group-hover:border-primary transition-all duration-300 mb-6 md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2">
                                                <span className="text-3xl font-black text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                                                    0{i + 1}
                                                </span>
                                            </div>

                                            <div className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full">
                                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </BlurIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] dark:bg-black text-white">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-12">
                            Why Brands Love Mascot Logos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Heart className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Emotional Connection</h3>
                                <p className="text-white font-medium">
                                    Mascots create instant emotional bonds that turn customers into loyal fans.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Users className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Universal Appeal</h3>
                                <p className="text-white font-medium">
                                    Characters transcend language barriers and connect with all age groups.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Zap className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Memorable Impact</h3>
                                <p className="text-white font-medium">
                                    A unique character is remembered far longer than abstract logos.
                                </p>
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
                                <div
                                    key={i}
                                    className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-2"
                                >
                                    <AccordionItem question={faq.question} answer={faq.answer} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="booking-form">
                    <BookingSection />
                </section>
            </div>
            <Footer />
        </>
    );
}