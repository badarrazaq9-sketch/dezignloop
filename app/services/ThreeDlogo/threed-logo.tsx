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
    Box,
    Layers,
    Sparkles,
    Monitor,
    Smartphone,
    RotateCcw,
    Video,
    FileOutput,
    Palette
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
    title: '3D Logo Design',
    tagline: 'Stand Out with Depth, Shadow & Real Impact',
    heroHeadline: 'A Logo That Pops Off the Screen',
    heroSubhead:
        'We create stunning 3D logos with real depth, lighting, and texture that make your brand unforgettable on websites, social media, video intros, and physical signage. From static renders to full animations — everything you need to look modern and premium.',
    trustCopy: 'Created 120+ 3D Logos for Modern Businesses',
    icon: Box,
    heroImage:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',

    whoFor: [
        'Small businesses wanting a modern, tech-forward image',
        'Startups launching apps, SaaS, or digital products',
        'Brands active on video, social media, and digital ads',
        'Companies needing logos that work in animated intros',
        'Owners who want to look premium and cutting-edge',
    ],

    whoNotFor: [
        'Businesses wanting only a flat, minimalist logo',
        'Clients expecting 100 3D logos for $50',
        'Companies not planning any digital or video presence',
        'Projects needing same-day 3D delivery',
    ],

    problems: [
        {
            problem: 'Your flat logo looks boring on modern screens',
            solution:
                '3D depth, lighting, and shadow that instantly grab attention on any digital platform.',
        },
        {
            problem: 'You get lost in a sea of generic 2D logos',
            solution:
                'A dimensional brand mark that people remember and recognize instantly.',
        },
        {
            problem: 'Your logo does not work for video or animation',
            solution:
                '3D files ready for motion graphics, spin animations, and video intros.',
        },
    ],

    deliverables: [
        'Multiple 3D logo renders (PNG with transparency)',
        'Rotating 360° animation (MP4/GIF)',
        'Source 3D files (Blender/OBJ/FBX)',
        'Flat 2D version for print & embroidery',
        'Social media profile icons and covers',
        'Business card and stationery mockups',
        'Video intro animation (5-15 seconds)',
        'Full ownership & source files',
    ],

    timeline: '7-21 Business Days (Scope Dependent)',
    communication: 'WhatsApp, Email & Weekly Video Previews',

    metrics: [
        { value: '3-5×', label: 'More Engagement on Social Media' },
        { value: '85%', label: 'Clients Report Looking More Premium' },
        { value: '100%', label: 'Full Ownership & Source Files' },
    ],

    packages: [
        {
            name: 'Basic 3D',
            originalPrice: '$349.00',
            price: '$175.00',
            popular: false,
            description:
                'Perfect entry-level 3D option for new businesses wanting their first dimensional logo.',
            features: [
                '2 Unique 3D Logo concepts',
                '1 Creative 3D Designer',
                '72 hrs. Turnaround Time',
                'Unlimited Revisions',
                'High-res PNG renders with transparency',
                'Simple 360° spin animation (GIF)',
                'Flat 2D backup version',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Final Formats',
                'PNG, JPG, GIF, MP4',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Startup 3D',
            originalPrice: '$499.00',
            price: '$249.00',
            popular: false,
            description:
                'Ideal for startups and growing businesses that want more 3D concepts and free icon design.',
            features: [
                '4 Unique 3D Logo concepts',
                'Free 3D icon design',
                '2 Creative 3D Designers',
                '72 hrs. Turnaround Time',
                'Unlimited Revisions',
                'High-res renders + transparency',
                '360° spin animation (GIF/MP4)',
                'Flat 2D backup version',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Final Formats',
                'Moneyback Guarantee*',
                'PNG, JPG, GIF, MP4, Blender',
            ],
        },
        {
            name: 'Professional 3D',
            originalPrice: '$599.00',
            price: '$299.00',
            popular: true,
            description:
                'Best value for growing businesses wanting full 3D branding support including video intro.',
            features: [
                '6 3D Logo concepts',
                '4 Creative 3D Designers',
                '48-72 hrs. Turnaround Time',
                'Unlimited Revision',
                'Advanced lighting & material effects',
                '5-second animated video intro',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Free Brand Consultation',
                'Moneyback Guarantee*',
                'Business Card, Letterhead, Envelope Design',
                'PNG, JPG, GIF, MP4, Blender, OBJ',
            ],
        },
        {
            name: 'Elite 3D',
            originalPrice: '$749.00',
            price: '$375.00',
            popular: false,
            description:
                'High-impact 3D package with unlimited concepts and extra marketing materials for serious brands.',
            features: [
                'UNLIMITED 3D Logo Design Concepts',
                'By 6 Award Winning 3D Designers',
                '48-72 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                '3D Icon Design',
                'Double Sided Flyer Design / Bi-Fold Brochure',
                '10-second animated video intro',
                'Free Email Signature',
                'Free Final Formats',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Business 3D',
            originalPrice: '$899.00',
            price: '$449.00',
            popular: false,
            description:
                'Complete 3D branding solution with unlimited concepts and full stationery design for established businesses.',
            features: [
                'UNLIMITED 3D Logo Design Concepts',
                'By 8 Award Winning 3D Designers',
                '48-72 hrs. Turnaround Time',
                'Unlimited Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                '3D Icon Design',
                'Double Sided Flyer Design / Bi-Fold Brochure',
                '15-second animated video intro',
                'Free Email Signature',
                'Free Final Formats',
                'Ownership Rights',
                'Unique Design Guarantee',
                'Satisfaction Guarantee',
                'Moneyback Guarantee*',
            ],
        },
        {
            name: 'Gold 3D',
            originalPrice: '$1199.00',
            price: '$599.00',
            popular: false,
            description:
                'Ultimate all-in-one 3D package with unlimited concepts, website, banners, and full branding materials.',
            features: [
                'UNLIMITED 3D Logo Design Concepts',
                'By 8 Award Winning 3D Designers',
                '3D Icon Design',
                '48-72 hrs. Turnaround Time',
                'UNLIMITED Revisions',
                'Stationary Design (Letterhead, Envelope, Business Cards)',
                'Free Email Signature',
                '3 Page Custom Website',
                '2 Stock Photos',
                '2 Banner Designs',
                'jQuery Slider',
                '30-second animated video intro',
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
            desc: 'You share your business story, values, target audience and 3D style preferences.',
        },
        {
            title: '3D Concepts & Moodboard',
            desc: 'We present 3-5 unique 3D logo concepts + material/lighting moodboard.',
        },
        {
            title: 'Revisions & Refinement',
            desc: 'We refine based on your feedback until the 3D look is perfect.',
        },
        {
            title: 'Renders & Animation Delivery',
            desc: 'You receive all 3D files, renders, animations + usage guidelines.',
        },
    ],

    faqs: [
        {
            question: 'How many 3D logo concepts do I get?',
            answer:
                'Basic: 2 concepts, Startup: 4 concepts, Professional: 6 concepts, Elite/Business/Gold: unlimited concepts.',
        },
        {
            question: 'Do I own the final 3D logo and files?',
            answer: 'Yes - 100% ownership and all source 3D files (Blender, OBJ, FBX) delivered upon completion.',
        },
        {
            question: 'Can I use the 3D logo for print and merchandise?',
            answer:
                'Yes. Every package includes a flat 2D version optimized for print, embroidery, and single-color use. The 3D version is perfect for digital, video, and large-format signage.',
        },
        {
            question: 'What if I do not like any 3D concepts?',
            answer:
                'We offer unlimited revisions until you are happy (included in all packages).',
        },
    ],

    addOns: [
        {
            title: 'Extended Animation (30 sec)',
            price: '$249',
            desc: 'Longer animated intro for YouTube, ads, and presentations.',
        },
        {
            title: '3D Social Media Starter Kit',
            price: '$199',
            desc: '15 branded 3D motion posts and story templates for Instagram/TikTok.',
        },
        {
            title: '3D Signage Mockups',
            price: '$349',
            desc: 'Realistic 3D mockups of your logo on storefront, vehicle, and billboard.',
        },
    ],

    relatedServices: [
        {
            slug: 'logo-design',
            title: 'Logo Design',
            tagline: 'Flat Logo & Brand Identity',
        },
        {
            slug: 'branding',
            title: 'Full Branding',
            tagline: 'Complete Visual Identity',
        },
        {
            slug: 'motion-graphics',
            title: 'Motion Graphics',
            tagline: 'Full Video Package with Your 3D Logo',
        },
    ],
};

export default function ThreeDLogoPage() {
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
                        <SectionHeader tag="The Reality Check" title="Why Flat Logos Are Getting Ignored" center={true} />

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
                                        Complete 3D Logo & Animation Delivered
                                    </h2>
                                    <p className="text-lg text-white mt-4 max-w-2xl">
                                        Everything needed to launch or refresh your brand with real 3D impact.
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
                    service="3d-logo"
                    title="3D Logo Projects That Delivered Results"
                />

                {/* PROCESS */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
                    <div className="container mx-auto px-4">
                        <SectionHeader tag="How It Works" title="From Sketch to Stunning 3D" center={true} />

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
                            title="Clear Pricing for 3D Logo & Animation"
                            description="Packages designed for businesses ready to stand out with depth."
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
                                            <div className="text-sm opacity-70 font-medium mb-2 min-h-[40px]">{pkg.description}</div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-lg line-through font-medium ${pkg.popular ? 'text-white/50' : 'text-slate-400'}`}>
                                                    {pkg.originalPrice}
                                                </span>
                                            </div>
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

                        {/* <div className="mt-16 max-w-3xl mx-auto">
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
                        </div> */}
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] dark:bg-black text-white">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-12">
                            Why Businesses Choose 3D Logos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Layers className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Depth That Demands Attention</h3>
                                <p className="text-white font-medium">
                                    3D logos naturally draw the eye on crowded social feeds and busy websites.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Monitor className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Built for Digital First</h3>
                                <p className="text-white font-medium">
                                    Perfect for video intros, app icons, ads, and anywhere your brand lives online.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Sparkles className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Instant Premium Feel</h3>
                                <p className="text-white font-medium">
                                    A 3D logo signals modern, professional, and high-value before you say a word.
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

                {/* <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white">
                            Complete Your 3D Brand Experience
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
                </section> */}
            </div>
            <Footer />
        </>
    );
}