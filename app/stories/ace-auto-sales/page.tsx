'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Car,
  Clock,
  Globe,
  ChevronRight,
  Gavel,
  Users,
  Search,
  Truck,
  Shield,
  BarChart3,
  Zap,
  Layers,
  Monitor,
  PenTool
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';

// Case Study Data for Openlane EU
const caseStudyData = {
  id: "openlane-eu",
  client: "Openlane EU",
  industry: "Automotive / B2B Marketplace",
  location: "Europe (Multi-Country)",
  duration: "20 weeks",
  title: "Revolutionizing European Used Car Remarketing with a Digital Auction Platform",
  description: "We engineered a sophisticated, multi-language B2B marketplace for Openlane EU that connects dealers, fleet operators, and remarketing professionals across Europe with seamless vehicle auctions and real-time inventory management.",
  challenge: "Openlane needed to modernize their European vehicle remarketing operations with a unified digital platform. They faced challenges with fragmented markets, multi-language requirements, complex B2B buyer journeys, and the need for real-time auction functionality across different countries with varying regulations.",
  solution: "Built a headless commerce platform with live auction capabilities, multi-language support (12+ languages), real-time vehicle inspection reports, integrated financing options, and a dealer network management system. Optimized for B2B procurement workflows and cross-border vehicle trading.",
  results: [
    { metric: "Dealer Adoption", value: 450, suffix: "+", description: "Active B2B dealers onboarded", numericValue: 450 },
    { metric: "Vehicle Volume", value: 25, suffix: "K+", description: "Monthly vehicles auctioned", numericValue: 25 },
    { metric: "Cross-Border", value: 35, suffix: "%", description: "International transactions", numericValue: 35 },
    { metric: "Auction Speed", value: 2.3, suffix: "x", description: "Faster sales cycle", numericValue: 2.3, isDecimal: true }
  ],
  features: [
    "Real-time live auction platform",
    "Multi-language & multi-currency",
    "Vehicle inspection reporting",
    "Dealer verification & ratings",
    "Cross-border logistics integration",
    "Financing & payment solutions",
    "Inventory management system",
    "Analytics dashboard for dealers"
  ],
  technologies: ["Next.js 14", "TypeScript", "Node.js", "WebSocket API", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
  process: [
    { step: 1, title: "Market Research", description: "Analyzed European remarketing regulations and dealer needs" },
    { step: 2, title: "Platform Architecture", description: "Designed scalable auction infrastructure with real-time bidding" },
    { step: 3, title: "Integration", description: "Connected vehicle data, logistics, and payment systems" },
    { step: 4, title: "EU Rollout", description: "Launched across 12 countries with localized compliance" }
  ],
  testimonial: {
    quote: "The platform transformed how we operate across Europe. Dealers now have instant access to inventory across borders, and our auction volume has exceeded projections by 40%. The real-time bidding system is exactly what the European remarketing market needed.",
    author: "Openlane EU Team",
    role: "Digital Operations",
    company: "Openlane Europe"
  },
  liveUrl: "https://www.openlane.eu/en",
  portfolioUrl: "/portfolio",
  images: [
    { url: "/car-sales/preview1.png", caption: "Premium Vehicle Inventory - European Marketplace" },
    { url: "/car-sales/preview2.png", caption: "Live Auction Platform - Real-Time Bidding" },
    { url: "/car-sales/preview3.png", caption: "Dealer Network - Cross-Border Trading" }
  ]
};

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

// Animated Counter Component - Triggers EVERY time section comes into view
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isDecimal?: boolean;
  inView: boolean;
}

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2.5, isDecimal = false, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const prevInViewRef = useRef(false);

  useEffect(() => {
    // Trigger animation when coming into view (every time)
    if (inView && !prevInViewRef.current) {
      let startTime: number | null = null;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentCount = isDecimal 
          ? parseFloat((easeOutQuart * (value - startValue) + startValue).toFixed(1))
          : Math.floor(easeOutQuart * (value - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
    
    // Reset when leaving view so it can animate again
    if (!inView && prevInViewRef.current) {
      setCount(0);
    }
    
    prevInViewRef.current = inView;
  }, [inView, value, duration, isDecimal]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

// Services Data
const services = [
  {
    icon: PenTool,
    title: "Logo Design",
    subtitle: "Brand Identity Foundation",
    description: "Created a distinctive logo mark that captures the brand essence and establishes immediate visual recognition in the market.",
    deliverables: ["Primary Logo Mark", "Monogram Variations", "Brand Guidelines", "Usage Standards"],
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Monitor,
    title: "Web Development",
    subtitle: "Digital Platform",
    description: "Built a fast, responsive website with modern architecture, seamless user experience, and conversion-optimized interfaces.",
    deliverables: ["Custom Website", "Responsive Design", "CMS Integration", "Performance Optimization"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Layers,
    title: "Brand Identity",
    subtitle: "Visual System",
    description: "Developed a comprehensive visual language including color systems, typography, and cohesive brand assets.",
    deliverables: ["Color Palette", "Typography System", "Brand Assets", "Style Guide"],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Search,
    title: "SEO & Growth",
    subtitle: "Organic Performance",
    description: "Implemented technical SEO, content strategy, and analytics setup to drive sustainable organic growth.",
    deliverables: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Tracking"],
    color: "from-emerald-500 to-teal-600"
  }
];

// FIXED: Counter Wrapper that animates every time it comes into view
function CounterWrapper({ metric, idx }: { metric: any, idx: number }) {
  const ref = useRef(null);
  // CRITICAL: Remove once: true so it triggers every time
  const isInView = useInView(ref, { margin: "-100px", once: false });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className="text-center group"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 tabular-nums">
        <AnimatedCounter 
          value={metric.value} 
          suffix={metric.suffix} 
          duration={2}
          isDecimal={metric.isDecimal}
          inView={isInView}
        />
      </div>
      <p className="font-semibold text-slate-900 text-sm mb-1">{metric.label}</p>
      <p className="text-xs text-slate-500">{metric.sublabel}</p>
    </motion.div>
  );
}

export default function OpenlaneEUCaseStudy() {
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
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4 md:space-y-6"
          >
            {/* Meta Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs sm:text-sm">
              <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                {caseStudyData.industry}
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                {caseStudyData.location}
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {caseStudyData.duration}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight px-2"
            >
              {caseStudyData.title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            >
              {caseStudyData.description}
            </motion.p>

            {/* CTA Buttons */}
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
      <section className="px-4 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-200"
          >
            {/* Browser Chrome */}
            <div className="bg-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-slate-300">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="bg-white rounded-md px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-500 text-center font-mono truncate">
                  openlane.eu
                </div>
              </div>
            </div>

            {/* Main Image */}
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
              
              {/* Caption Overlay */}
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

            {/* Thumbnail Navigation */}
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

      {/* Services Journey Section */}
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
              Our comprehensive approach transformed the digital presence across every touchpoint
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  activeService === idx 
                    ? 'bg-white shadow-xl shadow-slate-200/50 scale-105' 
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                } border border-slate-200`}
                onMouseEnter={() => setActiveService(idx)}
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" style={{
                    color: idx === 0 ? '#f59e0b' : idx === 1 ? '#06b6d4' : idx === 2 ? '#8b5cf6' : '#10b981'
                  }} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className={`text-xs font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3`}>
                  {service.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
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

                {/* Arrow (desktop only) */}
                {idx < services.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Connection Line (Desktop) */}
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

      {/* Design System Section */}
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 md:mb-12 text-center">
            Design <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">System</span>
          </h2>
          
          {/* Color Palette */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Brand Colors</h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">4 Colors</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { color: '#0057FF', name: 'Brand Blue', usage: 'Navigation header, primary buttons, links, active states' },
                { color: '#0A0A0A', name: 'Pure Black', usage: 'Primary text, icons, footer text, strong contrast elements' },
                { color: '#FFFFFF', name: 'Pure White', usage: 'Page backgrounds, content containers, spacing' },
                { color: '#F2F2F2', name: 'Light Gray', usage: 'Section backgrounds, card backgrounds, form fields' },
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
          
          {/* Typography - Images Only */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
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
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl bg-orange-50 text-orange-500">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4 md:mb-6">
                {caseStudyData.challenge}
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Fragmented European remarketing markets</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Complex multi-language B2B requirements</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Need for real-time auction functionality</span>
                </div>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Solution</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4 md:mb-6">
                {caseStudyData.solution}
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                {caseStudyData.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section with Animated Counters - FIXED */}
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-50 text-cyan-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6 border border-cyan-100">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Platform Performance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Results That <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Matter</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Measurable impact across all key business metrics (scroll away and back to re-animate)
            </p>
          </motion.div>

          {/* Unified Metrics Grid - Counter animates every time */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: 450, suffix: '+', label: 'Dealer Adoption', sublabel: 'Active B2B dealers', isDecimal: false },
                { value: 25, suffix: 'K+', label: 'Vehicle Volume', sublabel: 'Monthly auctioned', isDecimal: false },
                { value: 35, suffix: '%', label: 'Cross-Border', sublabel: 'International deals', isDecimal: false },
                { value: 2.3, suffix: 'x', label: 'Auction Speed', sublabel: 'Faster sales cycle', isDecimal: true },
              ].map((metric, idx) => (
                <CounterWrapper key={idx} metric={metric} idx={idx} />
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Top Performer</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">450+ Dealers</p>
              <p className="text-xs sm:text-sm text-slate-400">Active across 12 countries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500">Volume</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">25K+ Vehicles</p>
              <p className="text-xs sm:text-sm text-slate-500">Monthly auction throughput</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 sm:col-span-2 md:col-span-1"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500">Cross-Border</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">35% International</p>
              <p className="text-xs sm:text-sm text-slate-500">Cross-border transactions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Platform Capabilities</h2>
            <p className="text-slate-600 text-base sm:text-lg">Enterprise features for European vehicle remarketing</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {caseStudyData.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 sm:p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                  {idx === 0 && <Gavel className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 1 && <Globe className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 2 && <Search className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 3 && <Users className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 4 && <Truck className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 5 && <Shield className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 6 && <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 7 && <Zap className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <p className="font-medium text-slate-900 text-xs sm:text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="px-4 sm:px-6 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Our Process</h2>
            <p className="text-slate-600 text-base sm:text-lg">How we built Europe's premier vehicle marketplace</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {caseStudyData.process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActiveProcess(idx)}
                className={`relative p-4 sm:p-6 rounded-2xl transition-all cursor-pointer ${
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
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                
                {activeProcess === idx && (
                  <motion.div 
                    layoutId="process-indicator-openlane"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Enterprise Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {caseStudyData.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white text-slate-700 font-medium text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 lg:p-10 text-white">
            
            <header className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold">
                System Architecture
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <article className="bg-white/10 rounded-xl p-4 sm:p-5">
                <h3 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">
                  Frontend Layer
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>Next.js 14 App Router</li>
                  <li>React Server Components</li>
                  <li>Tailwind CSS + shadcn/ui</li>
                  <li>Framer Motion Animations</li>
                </ul>
              </article>

              <article className="bg-white/10 rounded-xl p-4 sm:p-5">
                <h3 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">
                  API & Services Layer
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>WebSocket Real-time API</li>
                  <li>RESTful Services</li>
                  <li>Payment Gateway APIs</li>
                  <li>Logistics Integration</li>
                </ul>
              </article>

              <article className="bg-white/10 rounded-xl p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">
                  Data Layer
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>PostgreSQL Database</li>
                  <li>Redis Cache</li>
                  <li>AWS S3 Storage</li>
                  <li>Docker & Kubernetes</li>
                </ul>
              </article>

            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BookingSection />

      {/* Explore More Projects */}
      <section className="px-4 sm:px-6 py-10 md:py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2">Explore More Projects</h3>
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