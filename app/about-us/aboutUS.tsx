'use client';
import Script from 'next/script';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Users, Trophy, ArrowRight } from 'lucide-react';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FAQSectionAboutUs from '@/components/AboutUs-Faq';

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD Structured Data
// ────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dezignloop.com/#organization",
      "name": "DezignLoop",
      "url": "https://dezignloop.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dezignloop.com/assets/logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.facebook.com/dezignloop",
        "https://www.instagram.com/dezignloop",
        "https://www.linkedin.com/company/dezignloop",
        "https://twitter.com/dezignloop"
      ],
      "description": "DezignLoop is a premium web design agency and digital growth partner specializing in small business websites, brand transformation, high-performing websites, lead generation systems, CRM solutions, web applications, logo design, and full-scale ecommerce development.",
      "foundingDate": "2019",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "email": "support@dezignloop.com",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://dezignloop.com/#website",
      "url": "https://dezignloop.com",
      "name": "DezignLoop",
      "publisher": {
        "@id": "https://dezignloop.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dezignloop.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://dezignloop.com/#business",
      "name": "DezignLoop",
      "image": "https://dezignloop.com/assets/Team.png",
      "url": "https://dezignloop.com",
      "telephone": "+1-XXX-XXX-XXXX",
      "email": "support@dezignloop.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "City",
        "addressRegion": "State",
        "postalCode": "00000",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "Web Design",
        "Web Development",
        "E-commerce Development",
        "CRM Development",
        "Web Application Development",
        "Logo Design",
        "Brand Identity",
        "Digital Marketing",
        "Lead Generation Systems"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Web Design & Development",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom website design and development for small businesses, including responsive design, SEO optimization, and high-converting layouts."
    },
    {
      "@type": "Service",
      "serviceType": "E-commerce Development",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Full-scale ecommerce development including Shopify, WooCommerce, and custom solutions with payment gateway integration and inventory management."
    },
    {
      "@type": "Service",
      "serviceType": "CRM Development",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom CRM solutions and integrations to help businesses manage customer relationships, automate workflows, and drive sales growth."
    },
    {
      "@type": "Service",
      "serviceType": "Logo Design & Brand Identity",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional logo design and complete brand identity packages including color palettes, typography, and brand guidelines."
    },
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/about-us/#webpage",
      "url": "https://dezignloop.com/about-us",
      "name": "About Us - DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Learn about DezignLoop, a premium web design agency helping businesses grow with websites, branding, CRM, ecommerce, and digital marketing."
    }
  ]
};

// ────────────────────────────────────────────────
// Centralized content — edit text here only
// ────────────────────────────────────────────────
const content = {
  badge: {
    label: 'Your Digital Growth Partner',
  },
  hero: {
    title: 'We Build Brands That',
    highlight: 'Dominate & Grow',
    description:
      'DezignLoop is a premium web design agency and digital growth partner specializing in small business websites, brand transformation, high-performing websites, lead generation systems, and full-scale ecommerce development — helping ambitious businesses turn ideas into visible, profitable online brands.',
    cta: 'Start Your Project',
  },
  story: {
    title: 'Crafting Digital Excellence Since 2019',
    paragraph1:
      'Founded in 2019, DezignLoop started with a simple mission: help small businesses break through digital noise with clean, modern websites and smart marketing systems. Today, we\'re a full-service branding agency and web design company trusted by entrepreneurs worldwide for brand transformation, high-converting small business websites, ecommerce development, and sustainable digital growth.',
    paragraph2:
      'We don\'t just build websites — we engineer online growth engines that deliver real leads, stronger brands, and measurable revenue.',
    badgeYears: '7+ Years',
    badgeSubtitle: 'Empowering Business Growth',
  },
  whyChoose: {
    title: 'Why Businesses Choose DezignLoop',
    cards: [
      {
        icon: 'zap',
        title: 'Precision & Speed',
        text: 'Lightning-fast delivery of high-performing websites and brand transformation without compromising quality.',
      },
      {
        icon: 'users',
        title: 'Client-First Growth',
        text: 'Every small business website and lead generation system is built around your unique goals for real digital growth.',
      },
      {
        icon: 'trophy',
        title: 'Proven Results',
        text: 'From startups to established brands — consistent wins in branding, ecommerce development, and online visibility.',
      },
    ],
  },
  cta: {
    title: 'Ready to Transform Your Brand?',
    description:
      "Let's build your high-converting website, powerful brand identity, and digital growth strategy — together.",
    primaryButton: 'Get in Touch',
    secondaryButton: 'Explore Services',
  },
  contactTeaser: {
    text: 'Questions? Reach us anytime at',
    email: 'support@dezignloop.com',
  },
};

// Animation variants (unchanged)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutUsPage() {
  return (
                 

    <div className="bg-white dark:bg-slate-950 min-h-screen">
     <Script
    id="schema-about"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
         <Navbar />
      {/* Hero-like Section */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-40 px-4 md:px-8 lg:px-12 overflow-hidden">
        {/* Background grid + blobs */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128,128,128,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128,128,128,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-12"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
              {content.badge.label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-slate-900 dark:text-white mb-8"
          >
            {content.hero.title}
            <br />
            <span className="gradient-text">{content.hero.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mb-12"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all duration-300"
            >
              {content.hero.cta} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
                {content.story.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {content.story.paragraph1}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {content.story.paragraph2}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <Image
                  src="/assets/Team.png" // ← replace with your real image
                  alt="DezignLoop team working on brand transformation and web design projects"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white px-8 py-4 rounded-2xl shadow-xl">
                <p className="font-black text-xl">{content.story.badgeYears}</p>
                <p className="text-sm">{content.story.badgeSubtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-16"
          >
            {content.whyChoose.title}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {content.whyChoose.cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#1C9FF0]/10 to-[#010FFF]/10 flex items-center justify-center">
                  {card.icon === 'zap' && <Zap className="text-primary" size={32} />}
                  {card.icon === 'users' && <Users className="text-primary" size={32} />}
                  {card.icon === 'trophy' && <Trophy className="text-primary" size={32} />}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-transparent via-slate-50 dark:via-slate-900/30 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8"
          >
            {content.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            {content.cta.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="px-12 py-6 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all duration-300 min-w-[280px]"
            >
              {content.cta.primaryButton}
            </Link>
            <Link
              href="/services"
              className="px-12 py-6 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-black text-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 min-w-[280px]"
            >
              {content.cta.secondaryButton}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Small contact teaser */}
      <div className="py-16 text-center text-slate-500 dark:text-slate-400 text-sm">
        {content.contactTeaser.text}{' '}
        <a
          href={`mailto:${content.contactTeaser.email}`}
          className="hover:text-primary transition-colors"
        >
          {content.contactTeaser.email}
        </a>
    
      </div>
           <section id="booking-form" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <BookingSection />
      </section>
             <FAQSectionAboutUs />
         <TestimonialsSection />
      
            <Footer />
    </div>

    
  );
}