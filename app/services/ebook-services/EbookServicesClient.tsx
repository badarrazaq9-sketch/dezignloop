'use client';

import React from 'react';
import Link from 'next/link';
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    TrendingUp,
    Check,
    ArrowDown,
    Calendar,
    MessageCircle,
    Globe,
    Clock,
    BookOpen,
} from 'lucide-react';
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

const service = {
    title: 'eBook Services',
    tagline: 'From Manuscript to Published Book',
    heroHeadline: 'Your Book, Professionally Published',
    heroSubhead:
        'We turn your finished manuscript into a polished eBook readers love — professional formatting, a cover that sells, and publishing setup handled for you. Kindle, EPUB, and PDF, ready to sell.',
    trustCopy: 'Formatting, Covers & Publishing Support for Authors',
    icon: BookOpen,
    heroImage:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',

    whoFor: [
        'Authors finishing their first book',
        'Coaches and consultants turning knowledge into a book',
        'Small businesses creating lead magnets and guides',
        'Creators publishing workbooks and journals',
    ],

    whoNotFor: [
        'Books needing full ghostwriting from scratch — we format and design finished manuscripts',
        'Same-day turnaround requests',
        'Projects without a finished or near-finished manuscript',
    ],

    problems: [
        {
            problem: 'Your manuscript looks unprofessional as an eBook',
            solution:
                'Clean, professional formatting that reads beautifully on every device — phone, tablet, and Kindle.',
        },
        {
            problem: 'Your cover does not sell the book',
            solution:
                'Custom cover design that grabs attention in a crowded store and tells readers what your book is about.',
        },
        {
            problem: 'Publishing feels confusing and technical',
            solution:
                'Step-by-step publishing setup on Amazon KDP and other platforms, so your book goes live without the headache.',
        },
    ],

    deliverables: [
        'Professional eBook formatting for Kindle, EPUB, and PDF',
        'Custom eBook cover design that sells the book',
        'Interior layout and typesetting',
        'Table of contents, chapter headings, and page styling',
        'Linked table of contents and NCX navigation for EPUB',
        'Preserved styling — italics, bold, and underline',
        'Clickable endnotes and footnotes',
        'Publishing setup help for Amazon KDP and other platforms',
        'Author bio page and back-matter setup',
        'Print-ready PDF version for paperback',
        'Exact file set delivered: EPUB, Amazon-optimized EPUB, PDF, Word doc',
        'Source files and full ownership',
    ],

    timeline: 'Quoted Upfront — Depends on Book Length',
    communication: 'WhatsApp, Email & Weekly Updates',

    metrics: [
        { value: '100%', label: 'Full Ownership & Source Files' },
        { value: '3+', label: 'Formats: Kindle, EPUB & PDF' },
        { value: '1-on-1', label: 'Direct Communication Throughout' },
    ],

    process: [
        {
            title: 'Share Your Manuscript',
            desc: 'Send your finished manuscript and tell us about your book and your readers.',
        },
        {
            title: 'Cover & Formatting',
            desc: 'We design your cover and format your book for Kindle, EPUB, and PDF.',
        },
        {
            title: 'Review & Refine',
            desc: 'You review the formatted book and cover, and we revise until it feels right.',
        },
        {
            title: 'Publish & Sell',
            desc: 'We help set up publishing so your book is live and ready for readers.',
        },
    ],

    packages: [
        {
            name: 'Debutant',
            originalPrice: '$998.00',
            price: '$499.00',
            popular: false,
            description:
                'Everything you need to publish your first book. Regularly $998.',
            features: [
                'Formatting & Editing',
                'Publishing (Paperback & Hardback)',
                'Book Cover Design',
                'Book Launch',
                'Book Publishing on Apple',
                'Book Publishing on Google',
                'ISBN & Copyright Registration',
                'Copyright Registration on Amazon',
                'Illustrated Book Interior Layout',
                'Dedicated Project Manager',
                'International Distribution',
                'Expedited service available (+$50)',
            ],
        },
        {
            name: 'Fire Starter',
            originalPrice: '$2,000.00',
            price: '$1,000.00',
            popular: true,
            description:
                'For authors ready to reach every major store. Regularly $2,000.',
            features: [
                'Formatting & Editing',
                'Publishing (Paperback & Hardback)',
                'Book Cover Design',
                'Book Launch',
                'Book Publishing on Apple, Google, Amazon & Barnes & Noble',
                'ISBN & Copyright Registration',
                'Copyright Registration on Amazon',
                'Illustrated Book Interior Layout',
                'Dedicated Project Manager',
                'International Distribution',
                'Expedited service available (+$50)',
            ],
        },
        {
            name: 'Best Seller',
            originalPrice: '$4,000.00',
            price: '$2,000.00',
            popular: false,
            description:
                'The complete publishing package, premium cover included. Regularly $4,000.',
            features: [
                'Formatting & Editing',
                'Publishing (Paperback & Hardback)',
                'Book Cover Design (Premium)',
                'Book Launch',
                'Book Publishing on Apple, Google, Amazon & Barnes & Noble',
                'Book Publishing at Ingram (Paperback & Hardback)',
                'ISBN & Copyright Registration',
                'Copyright Registration on Amazon',
                'Illustrated Book Interior Layout',
                'Dedicated Project Manager',
                'International Distribution',
                'Expedited service available (+$50)',
            ],
        },
    ],

    faqs: [
        {
            question: 'What formats will my eBook work on?',
            answer:
                'Kindle (Amazon), EPUB (Apple Books, Google Play, Kobo), and PDF. Your book reads cleanly on phones, tablets, and e-readers.',
        },
        {
            question: 'Do you design the cover too?',
            answer:
                'Yes — custom cover design is part of the service. A strong cover is what makes readers stop scrolling and click your book.',
        },
        {
            question: 'Can you publish the book for me?',
            answer:
                'We set up your publishing accounts on Amazon KDP and other platforms and walk you through the launch, so your book goes live without the technical confusion.',
        },
        {
            question: 'How long does it take?',
            answer:
                'It depends on your book length and how many revisions you want. After we see your manuscript, you get a clear timeline quoted upfront — no surprises.',
        },
        {
            question: 'Do I keep ownership of my book?',
            answer:
                'Yes — 100%. All files, the cover, and every right to your book stay with you.',
        },
    ],

    relatedServices: [
        {
            slug: 'branding',
            title: 'Full Branding',
            tagline: 'An Author Brand to Match Your Book',
        },
        {
            slug: 'web-design',
            title: 'Web Design',
            tagline: 'An Author Website That Sells Books',
        },
        {
            slug: 'social-media-marketing-smm',
            title: 'Social Media',
            tagline: 'Promote Your Book to New Readers',
        },
    ],
};

export default function EbookServicesPage() {
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
                                        {service.title}
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
                        <SectionHeader tag="The Reality Check" title="Why Most Self-Published eBooks Struggle" center={true} />

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
                                            <p className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-tight opacity-70 group-hover:opacity-100 transition-opacity min-h-[3.5rem] flex items-center">
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
                                        A Complete, Ready-to-Sell eBook
                                    </h2>
                                    <p className="text-lg text-white mt-4 max-w-2xl">
                                        Everything needed to publish your book professionally.
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

                        <div className="mt-16 text-center">
                            <p className="text-white/80 font-bold">
                                Your book, ready for Amazon KDP, Apple Books, Kobo, Barnes &amp; Noble, IngramSpark, and Draft2Digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
                    <div className="container mx-auto px-4">
                        <SectionHeader tag="How It Works" title="Clear Steps to Your Published Book" center={true} />

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
                            tag="Pricing"
                            title="Simple Packages for Every Author"
                            description="Pick the package that fits your book. No hidden fees."
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
                                            <div className="text-4xl font-black tracking-tight">
                                                <span className="line-through opacity-50 text-2xl mr-3">{pkg.originalPrice}</span>
                                                {pkg.price}
                                            </div>
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

                        <p className="text-center text-slate-500 dark:text-slate-400 font-medium mt-12">
                            Need something custom — a longer book or a rush job?{' '}
                            <button
                                onClick={() => smoothScroll('booking-form')}
                                className="text-primary font-bold hover:underline cursor-pointer"
                            >
                                Get a custom quote
                            </button>
                            .
                        </p>
                    </div>
                </section>

                {/* WHY US */}
                <section className="py-24 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] dark:bg-black text-white">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-12">
                            Why Authors Choose DezignLoop for eBooks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <BookOpen className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Built for Authors</h3>
                                <p className="text-white font-medium">
                                    We understand manuscripts, readers, and what makes a book sell — not just files and formats.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Clock className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Done-For-You Publishing</h3>
                                <p className="text-white font-medium">
                                    Formatting, cover, and publishing setup handled in one place — you focus on writing.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <Globe className="text-white mb-6" size={32} />
                                <h3 className="text-xl font-black mb-4">Your Book, Your Rights</h3>
                                <p className="text-white font-medium">
                                    Full ownership and all source files stay with you — always.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />

                <section className="pt-8 pb-24 bg-slate-50 dark:bg-slate-900">
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
                            Complete Your Author Launch
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
