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
    Palette,
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
    title: 'Logo Design & Brand Identity',
    tagline: 'Visual Identity That Builds Trust Instantly',
    heroHeadline: 'Logos That Make Your Business Memorable',
    heroSubhead:
        'We create professional, timeless logo designs and complete brand identities for small businesses, startups, and local brands. From logo to color palette, typography, and brand guidelines - everything you need to stand out and build trust.',
    trustCopy: 'Designed 150+ Logos & Brand Identities for Small Businesses',
    icon: Palette,
    heroImage:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',

    whoFor: [
        'Small businesses needing a professional look',
        'Startups launching their first brand',
        'Local shops, cafes, and service providers',
        'Entrepreneurs rebranding or refreshing identity',
    ],

    whoNotFor: [
        'Businesses expecting 100 logos for $50',
        'Clients wanting instant AI-generated logos only',
        'Projects needing same-day delivery',
        'Companies without any brand vision or direction',
    ],

    problems: [
        {
            problem: 'Your current logo looks amateur or generic',
            solution:
                'Custom, unique designs that reflect your personality and stand out from competitors.',
        },
        {
            problem: 'Inconsistent branding across materials',
            solution:
                'Complete brand identity kit: logo, colors, fonts, guidelines - everything matches.',
        },
        {
            problem: 'Customers do not remember or trust your brand',
            solution:
                'Timeless, professional identity that builds instant credibility and recognition.',
        },
    ],

    deliverables: [
        'Multiple logo variations (primary, secondary, monochrome)',
        'Full color palette (primary, secondary, accents)',
        'Typography selection and pairing',
        'Brand guidelines PDF (logo usage, do’s and don’ts)',
        'Social media profile icons and covers',
        'Business card and stationery mockups',
        'Source files (AI, EPS, PNG, SVG, JPG)',
        'Unlimited revisions during active month (Premium)',
    ],

    timeline: '5-14 Business Days (Scope Dependent)',
    communication: 'WhatsApp, Email & Weekly Updates',

    metrics: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '3-7x', label: 'Faster Brand Recognition' },
        { value: '100%', label: 'Full Ownership & Source Files' },
    ],

    packages: [
        {
            name: 'Basic',
            originalPrice: '$249.00',
            price: '$125.00',
            popular: false,
            description:
                'Perfect entry-level option for new small businesses or simple logo refresh projects.',
            features: [
                '4 Unique Logo concepts',
                '1 Creative Designer',
                '48 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Final Formats',
                'A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Startup',
            originalPrice: '$349.00',
            price: '$175.00',
            popular: false,
            description:
                'Ideal for startups and growing businesses that want more concepts and free icon design.',
            features: [
                '6 Unique Logo concepts',
                'Free icon design',
                '2 Creative Designers',
                '48 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Final Formats',
                'Moneyback Guarantee*',
                'A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF',
            ],
        },
        {
            name: 'Professional',
            originalPrice: '$399.00',
            price: '$199.00',
            popular: true,
            description:
                'Best value for growing businesses wanting full branding support including business card design.',
            features: [
                '8 Logo concepts',
                '4 Creative Designers',
                '24-48 hrs. Turnaround Time',
                'Unlimited Revision',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Brand Consultation',
                'Moneyback Guarantee*',
                'Business Card, Letterhead, Envelope Design',
                'A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF',
            ],
        },
        {
            name: 'Elite',
            originalPrice: '$489.00',
            price: '$245.00',
            popular: false,
            description:
                'High-impact package with unlimited concepts and extra marketing materials for serious brands.',
            features: [
                'UNLIMITED Logo Design Concepts',
                'By 8 Award Winning Designers',
                '24-48 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                'Icon Design',
                'Double Sided Flyer Design / Bi-Fold Brochure',
                'Free Email Signature',
                'Free Final Formats',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Business',
            originalPrice: '$599.00',
            price: '$299.00',
            popular: false,
            description:
                'Complete branding solution with unlimited concepts and full stationery design for established businesses.',
            features: [
                'UNLIMITED Logo Design Concepts',
                'By 8 Award Winning Designers',
                '24-48 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                'Icon Design',
                'Double Sided Flyer Design / Bi-Fold Brochure',
                'Free Email Signature',
                'Free Final Formats',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Gold',
            originalPrice: '$849.00',
            price: '$425.00',
            popular: false,
            description:
                'Ultimate all-in-one package with unlimited concepts, website, banners, and full branding materials.',
            features: [
                'UNLIMITED Logo Design Concepts',
                'By 8 Award Winning Designers',
                'Icon Design',
                '24-48 hrs. Turnaround Time',
                'UNLIMITED Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                'Free Email Signature',
                '3 Page Custom Website',
                '2 Stock Photos',
                '2 Banner Designs',
                'jQuery Slider',
                'All Final Files Format',
                'Ownership Rights',
                'Satisfaction Guarantee',
                'Unique Design Guarantee',
                'Money Back Guarantee*',
            ],
        },
    ],

    process: [
        {
            title: 'Brief & Discovery',
            desc: 'You share your business story, values, target audience and preferences.',
        },
        {
            title: 'Concepts & Moodboard',
            desc: 'We present 3-5 unique logo concepts + moodboard.',
        },
        {
            title: 'Revisions & Refinement',
            desc: 'We refine based on your feedback until perfect.',
        },
        {
            title: 'Delivery & Guidelines',
            desc: 'You receive all files + full brand guidelines PDF.',
        },
    ],

    faqs: [
        {
            question: 'How many logo concepts do I get?',
            answer:
                'Basic: 4 concepts, Startup: 6 concepts, Professional: 8 concepts, Elite/Business/Gold: unlimited concepts.',
        },
        {
            question: 'Do I own the final logo and files?',
            answer: 'Yes - 100% ownership and all source files delivered upon completion.',
        },
        {
            question: 'Can I use the logo commercially?',
            answer: 'Yes - full commercial rights are transferred to you.',
        },
        {
            question: 'What if I do not like any concepts?',
            answer:
                'We offer unlimited revisions until you are happy (included in all packages).',
        },
    ],

    addOns: [
        {
            title: 'Brand Guidelines Expansion',
            price: '$199',
            desc: 'Extra pages: packaging, social templates, email signature.',
        },
        {
            title: 'Business Card & Stationery Design',
            price: '$149',
            desc: 'Matching business cards, letterhead & envelope design.',
        },
        {
            title: 'Logo Animation (Simple)',
            price: '$99',
            desc: 'Short animated logo for intros & social media.',
        },
    ],

    relatedServices: [
        {
            slug: 'branding',
            title: 'Full Branding',
            tagline: 'Complete Visual Identity',
        },
        {
            slug: 'web-design',
            title: 'Web Design',
            tagline: 'Website That Matches Your Brand',
        },
        {
            slug: 'social-media-marketing-smm',
            title: 'Social Media',
            tagline: 'Showcase Your New Brand',
        },
    ],
};

export default function LogoDesignPage() {
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
                        <SectionHeader tag="The Reality Check" title="Why Most Small Business Logos Fail" center={true} />

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
                                        Complete Logo & Brand Identity Delivered
                                    </h2>
                                    <p className="text-lg text-white mt-4 max-w-2xl">
                                        Everything needed to launch or refresh your brand professionally.
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
                <PortfolioSection
                    service="logo-design"
                    title="Logo Design Projects That Delivered Results"
                />

                {/* PROCESS */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
                    <div className="container mx-auto px-4">
                        <SectionHeader tag="How It Works" title="Clear Steps to Your New Brand" center={true} />

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

                {/* PRICING */}
                <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-4">
                        <SectionHeader
                            tag="Investment"
                            title="Clear Pricing for Logo & Branding"
                            description="Packages designed for small businesses and startups."
                            center={true}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {service.packages.map((pkg, i) => (
                                <BlurIn key={i} delay={i * 0.1}>
                                    <div
                                        className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col ${pkg.popular
                                                ? 'bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white shadow-2xl scale-105 z-10 border-slate-900 dark:border-slate-700'
                                                : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl'
                                            }`}
                                    >
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
                                                    <CheckCircle2
                                                        size={18}
                                                        className={`flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-green-500'
                                                            }`}
                                                    />
                                                    <span
                                                        className={
                                                            pkg.popular ? 'text-slate-200' : 'text-slate-600 dark:text-slate-400'
                                                        }
                                                    >
                                                        {feat}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => smoothScroll('booking-form')}
                                            className={`w-full py-4 rounded-xl font-black text-center transition-all cursor-pointer ${pkg.popular
                                                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                                                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200'
                                                }`}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </BlurIn>
                            ))}
                        </div>

                        <div className="mt-16 max-w-3xl mx-auto">
                            <h4 className="text-center font-black text-xl mb-8 text-slate-900 dark:text-white">
                                Helpful Add-Ons
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {service.addOns.map((addon, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                                <Plus size={16} className="text-slate-400" />
                                            </div>
                                            <div className="font-bold text-slate-900 dark:text-white">
                                                {addon.title}
                                            </div>
                                        </div>
                                        <div className="text-xs text-slate-500 font-medium mb-3 flex-grow">
                                            {addon.desc}
                                        </div>
                                        <div className="font-black text-slate-900 dark:text-white text-lg">
                                            {addon.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] dark:bg-black text-white">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-12">
                            Why Small Businesses Choose DezignLoop for Branding
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Globe className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Built for Small Businesses</h3>
                                <p className="text-white font-medium">
                                    We understand tight budgets and the need for fast, impactful branding.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Clock className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Fast & Affordable</h3>
                                <p className="text-white font-medium">
                                    Professional logos and identities delivered in days, not months - at prices small
                                    businesses can afford.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <TrendingUp className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Real Business Impact</h3>
                                <p className="text-white font-medium">
                                    Branding that increases trust, recognition and conversions - not just pretty
                                    pictures.
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

                <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">
                            Complete Your Brand Launch
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.relatedServices.map((item) => (
                                <Link
                                    href={`/services/${item.slug}`}
                                    key={item.slug}
                                    className="group block bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                            <ArrowRight size={20} />
                                        </div>
                                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                                            {item.title}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                        {item.tagline}
                                    </p>
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