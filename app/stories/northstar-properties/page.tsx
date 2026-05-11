'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Home,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Calendar,
  ChevronRight,
  Quote,
  Building2,
  Shield,
  Wallet,
  Zap,
  Search,
  Layers,
  PenTool,
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';

// Case Study Data for North Star Properties
const caseStudyData = {
  id: "northstar-properties",
  client: "North Star Properties",
  industry: "Real Estate / Property Management",
  location: "Bend & Portland, Oregon",
  duration: "8 weeks",
  title: "Transforming a Local Property Manager into Oregon's Premium Rental Brand",
  description: "We built a professional, trust-focused website for North Star Properties that positions them as the leading high-end property management company in Oregon's competitive rental market.",
  challenge: "North Star had a dated website that failed to reflect their premium positioning in the upper-end rental market. They needed to attract high-caliber property owners and tenants while streamlining inquiry management across two cities (Bend and Portland).",
  solution: "Designed and developed a sophisticated, mobile-first website with dual-location targeting, integrated inquiry systems, SEO-optimized content for local search dominance, and a professional brand narrative that emphasizes their investor-founded expertise.",
  results: [
    { metric: "Inquiry Increase", value: "180%", description: "Qualified leads in first 60 days", numericValue: 180, suffix: "%" },
    { metric: "Page Speed", value: "98/100", description: "Google PageSpeed score", numericValue: 98, suffix: "/100" },
    { metric: "Local SEO", value: "#1-3", description: "Ranking for key terms", numericValue: 1, suffix: "-3" },
    { metric: "Bounce Rate", value: "-45%", description: "Improved engagement", numericValue: 45, suffix: "%", prefix: "-" }
  ],
  features: [
    "Dual-location landing pages (Bend & Portland)",
    "Property showcase with high-res imagery",
    "Integrated contact forms with routing",
    "Investor-focused content strategy",
    "Mobile-responsive property listings",
    "Trust signals & testimonial integration",
    "Blog/Content hub for SEO",
    "Fast-loading optimized performance"
  ],
  technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "Google Analytics", "SEO Schema"],
  process: [
    { step: 1, title: "Discovery", description: "Analyzed Oregon rental market and competitor positioning" },
    { step: 2, title: "Brand Strategy", description: "Developed 'Stress-Free Property Management' messaging" },
    { step: 3, title: "Design & Build", description: "Created premium aesthetic with dual-city functionality" },
    { step: 4, title: "Launch & SEO", description: "Deployed with local SEO optimization for Bend/Portland" }
  ],
  testimonial: {
    quote: "The new website immediately elevated our brand perception. We're now attracting the high-end property owners we've always wanted to serve, and the inquiry system saves us hours every week.",
    author: "North Star Team",
    role: "Founders",
    company: "North Star Properties"
  },
  liveUrl: "https://northstarproperties.com/  ",
  portfolioUrl: "/portfolio",
  images: [
    { url: "/nothren/first-img.png", caption: "Hero Section - Stress-Free Property Management" },
    { url: "/nothren/forth-img.png", caption: "Property Showcase - Historic Farmhouse Listing" },
    { url: "/nothren/third-img.png", caption: "Services Overview - The North Star Way" }
  ]
};

// Services Data
const services = [
  {
    icon: PenTool,
    title: "Logo Design",
    subtitle: "Brand Identity Foundation",
    description: "Created a sophisticated logo mark that conveys trust, stability, and premium real estate expertise for the Oregon market.",
    deliverables: ["Primary Logo Mark", "Monogram Variations", "Brand Guidelines", "Usage Standards"],
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Monitor,
    title: "Web Development",
    subtitle: "Premium Website",
    description: "Built a fast, mobile-first website with dual-location targeting, property showcases, and integrated inquiry management.",
    deliverables: ["Next.js Website", "Dual-City Pages", "Contact Routing System", "CMS Integration"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Layers,
    title: "Brand Identity",
    subtitle: "Visual System",
    description: "Developed a cohesive visual language with royal blue palette, professional typography, and trust-focused imagery.",
    deliverables: ["Color Palette", "Typography System", "Iconography", "Photo Guidelines"],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Search,
    title: "SEO & Growth",
    subtitle: "Local Dominance",
    description: "Implemented local SEO strategy targeting Bend and Portland markets, driving 180% increase in qualified inquiries.",
    deliverables: ["Local SEO Setup", "Content Strategy", "Google Business", "Analytics Tracking"],
    color: "from-emerald-500 to-teal-600"
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setCount(0);
      setKey(prev => prev + 1);
      let startTime = null;
      const startValue = 0;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (value - startValue) + startValue);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums" key={key}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function NorthStarCaseStudy() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const scrollToProcess = () => {
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4 md:space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {caseStudyData.industry}
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {caseStudyData.location}
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {caseStudyData.duration}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight px-2"
            >
              {caseStudyData.title}
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            >
              {caseStudyData.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2">
              <a 
                href={caseStudyData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105 text-sm sm:text-base"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToProcess}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border-2 border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 rounded-full font-semibold transition-all text-sm sm:text-base"
              >
                View Design Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Website Preview Showcase */}
      <section className="px-4 sm:px-6 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-200"
          >
            <div className="bg-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-slate-300">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="bg-white rounded-md px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-500 text-center font-mono truncate">
                  northstarproperties.com
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={caseStudyData.images[activeImage].url}
                  alt={caseStudyData.images[activeImage].caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <motion.p 
                  key={activeImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-medium text-sm sm:text-lg"
                >
                  {caseStudyData.images[activeImage].caption}
                </motion.p>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 p-4 sm:p-6 bg-white border-t border-slate-100">
              {caseStudyData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-1 aspect-video rounded-lg sm:rounded-xl overflow-hidden transition-all ${
                    activeImage === idx 
                      ? 'ring-2 ring-blue-500 ring-offset-2' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Journey Section - NEW */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-100 text-slate-600 font-medium text-xs sm:text-sm mb-4 border border-slate-200">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Complete Solution
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              From <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Concept to Growth</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Our comprehensive approach transformed North Star Properties into Oregon's premium rental brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActiveService(idx)}
                className={`relative group cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  activeService === idx 
                    ? 'bg-white shadow-xl shadow-slate-200/50 scale-105' 
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                } border border-slate-200`}
              >
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                  {idx + 1}
                </div>

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" style={{
                    color: idx === 0 ? '#f59e0b' : idx === 1 ? '#06b6d4' : idx === 2 ? '#8b5cf6' : '#10b981'
                  }} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className={`text-xs font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3`}>
                  {service.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{
                        color: idx === 0 ? '#f59e0b' : idx === 1 ? '#06b6d4' : idx === 2 ? '#8b5cf6' : '#10b981'
                      }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {idx < services.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block mt-8 relative">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-cyan-200 to-emerald-200 rounded-full" />
            <div className="flex justify-between px-12">
              {services.map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${services[idx].color} ring-4 ring-white`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 md:mb-10 text-center">
            Design <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">System</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Brand Colors</h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">4 Colors</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { color: '#1F3A8A', name: 'Royal Blue', usage: 'Headings, footer, buttons' },
                { color: '#2563EB', name: 'Azure Blue', usage: 'CTAs, highlights, hover states' },
                { color: '#ffffff', name: 'Pure White', usage: 'Backgrounds, cards' },
                { color: '#000000', name: 'Jet Black', usage: 'Primary text, icons, accents' },
              ].map((c, i) => (
                <div key={i} className="group">
                  <div 
                    className="w-full aspect-square rounded-xl shadow-sm mb-2 sm:mb-3 border border-slate-100 relative overflow-hidden" 
                    style={{ backgroundColor: c.color }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{c.name}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase mb-0.5">{c.color}</p>
                  <p className="text-xs text-slate-500">{c.usage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Typography</h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">2 Fonts</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="/car-sales/font2.png" 
                alt="Proxima Nova font sample"
                className="w-full rounded-xl shadow-sm"
              />
              <img 
                src="/car-sales/font2.png" 
                alt="Playfair Display font sample"
                className="w-full rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-orange-50 text-orange-500">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                {caseStudyData.challenge}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Outdated website not reflecting premium brand positioning</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Difficulty attracting high-end property owners</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Manual inquiry management across two cities</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Solution</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                {caseStudyData.solution}
              </p>
              <div className="space-y-2.5">
                {caseStudyData.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-50 text-green-600 font-medium text-xs sm:text-sm mb-4 border border-green-100">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Real Results
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Performance <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">Numbers animate every time you scroll here</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {caseStudyData.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter 
                    value={result.numericValue} 
                    suffix={result.suffix} 
                    prefix={result.prefix}
                    duration={2.5}
                  />
                </div>
                <div className="font-semibold text-slate-900 text-sm mb-1">{result.metric}</div>
                <div className="text-xs text-slate-500">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Key Features Delivered</h2>
            <p className="text-slate-600 text-base sm:text-lg">Everything built for North Star Properties</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {caseStudyData.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                  {idx === 0 && <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 1 && <Home className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 2 && <Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 3 && <Star className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 4 && <Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 5 && <Shield className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 6 && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 7 && <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <p className="font-medium text-slate-900 text-xs sm:text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="px-4 sm:px-6 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Process</h2>
            <p className="text-slate-600 text-base sm:text-lg">How we brought North Star Properties to life</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {caseStudyData.process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActiveProcess(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl transition-all cursor-pointer ${
                  activeProcess === idx 
                    ? 'bg-white shadow-xl shadow-blue-500/5 border-blue-200' 
                    : 'bg-slate-50 border-slate-200'
                } border`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors ${
                  activeProcess === idx 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
                    : 'bg-white text-slate-400 shadow-sm'
                }`}>
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                
                {activeProcess === idx && (
                  <motion.div 
                    layoutId="process-indicator-northstar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {caseStudyData.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-slate-700 font-medium text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-8">
        <TestimonialsSection />
      </div>

      <div className="py-8">
        <BookingSection />
      </div>

      {/* Explore More Projects */}
      <section className="px-4 sm:px-6 py-8 md:py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Explore More Projects</h3>
              <p className="text-slate-600 text-sm sm:text-base">See our complete portfolio of successful client work</p>
            </div>
            <Link href={caseStudyData.portfolioUrl}>
              <button className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white border border-slate-200 rounded-full font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all text-sm sm:text-base">
                View Portfolio
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div> 
  );
}