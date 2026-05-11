'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Home,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Shield,
  DollarSign,
  Users,
  Wrench,
  Building,
  FileText,
  Phone,
  Search,
  Layers,
  Monitor,
  PenTool,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';

// Case Study Data for RAM Roofing
const caseStudyData = {
  id: "ram-roofing",
  client: "RAM Roofing",
  industry: "Construction / Roofing Services",
  location: "Local Service Area",
  duration: "5 weeks",
  title: "Building Trust Online for a Local Roofing Company That Actually Shows Up",
  description: "We created a conversion-focused website for RAM Roofing that establishes instant credibility, generates qualified leads, and communicates their reliability promise to homeowners tired of no-show contractors.",
  challenge: "RAM Roofing struggled to stand out in a crowded market of unreliable contractors. They needed a website that immediately communicated their 15+ years of experience, A+ BBB rating, and core promise - they actually show up. Most competitors had outdated sites, but RAM needed to look professional and trustworthy to win high-value roofing jobs.",
  solution: "Built a trust-first website with prominent social proof (BBB A+ rating, 5-year guarantee, 15 years local), clear service explanations, instant quote requests, and financing information upfront. Optimized for 'roofers near me' and emergency repair searches with click-to-call functionality.",
  results: [
    { metric: "Lead Volume", value: 310, suffix: "%", description: "Increase in quote requests", isDecimal: false },
    { metric: "Conversion", value: 24, suffix: "%", description: "Visitor to lead rate", isDecimal: false },
    { metric: "Mobile Calls", value: 68, suffix: "%", description: "Of leads from mobile", isDecimal: false },
    { metric: "Estimates", value: 4.2, suffix: "x", description: "More estimates booked", isDecimal: true }
  ],
  features: [
    "Instant online quote requests",
    "Click-to-call mobile optimization",
    "Service area mapping",
    "Financing options calculator",
    "Insurance claims assistance",
    "Customer review showcase",
    "Emergency repair hotline",
    "Photo gallery of completed work"
  ],
  technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Maps API", "Lead Form Integration", "Google Analytics", "Local SEO Schema", "Click-to-Call Tracking"],
  process: [
    { step: 1, title: "Trust Audit", description: "Identified key trust signals: BBB, guarantee, 15 years local" },
    { step: 2, title: "Conversion Design", description: "Built for emergency searches and quick quote requests" },
    { step: 3, title: "Mobile First", description: "Optimized for 'roofers near me' mobile searches" },
    { step: 4, title: "Local Launch", description: "Dominated local roofing search results" }
  ],
  testimonial: {
    quote: "Our old website was just a digital business card. Now it's our best salesperson - working 24/7, qualifying leads, and booking estimates while we sleep. The 'roofers that actually show up' messaging really resonates with tired homeowners.",
    author: "RAM Roofing Team",
    role: "Owners",
    company: "RAM Roofing"
  },
  liveUrl: "https://caffeineusa.com/pages/food-menu-2023",
  portfolioUrl: "/portfolio",
  images: [
    { url: "/roofing/first-img.png", caption: "Professional Roofing Team - Ready to Serve" },
    { url: "/roofing/forth-img.png", caption: "Quality Roofing Materials & Installation" },
    { url: "/roofing/second-img.png", caption: "Beautiful Finished Roof - Curb Appeal" }
  ]
};

// Services Data - Customize for each client
const services = [
  {
    icon: PenTool,        // Options: PenTool, Monitor, Layers, Search, Palette, Code, Megaphone, LineChart
    title: "Logo Design",
    subtitle: "Brand Identity Foundation",
    description: "Created a distinctive logo mark that captures the brand essence and establishes immediate visual recognition in the market.",
    deliverables: ["Primary Logo Mark", "Monogram Variations", "Brand Guidelines", "Usage Standards"],
    color: "from-amber-500 to-orange-600"  // Gradient colors: from-X-500 to-Y-600
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

// Animated Counter Component - Triggers every time section comes into view
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
    
    // Reset when leaving view
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

// Counter Wrapper Component
function CounterWrapper({ metric, idx }: { metric: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 text-center"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
        <AnimatedCounter 
          value={metric.value} 
          suffix={metric.suffix} 
          duration={2.5}
          isDecimal={metric.isDecimal}
          inView={isInView}
        />
      </div>
      <div className="font-semibold text-slate-900 text-sm sm:text-base mb-1">{metric.metric}</div>
      <div className="text-xs sm:text-sm text-slate-500">{metric.description}</div>
    </motion.div>
  );
}

export default function RamRoofingCaseStudy() {
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
                <Home className="w-3.5 h-3.5" />
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
                  ramroofer.com
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
                { color: '#E95C00', name: 'Bright Orange', usage: 'Primary call-to-action buttons (Schedule, Contact), accents, key highlights' },
{ color: '#04488E', name: 'Royal Blue', usage: 'Navigation bar, section headers, backgrounds for service blocks' },
{ color: '#FFFFFF', name: 'Pure White', usage: 'Main backgrounds, content areas, cards, spacing for clean layout' },
{ color: '#000000', name: 'Pure Black', usage: 'Primary text, footer text, icons, strong contrast elements' },
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
                src="/roofing/text-1.png" 
                alt="Proxima Nova font sample"
                className="w-full rounded-xl shadow-sm"
              />
              <img 
                src="/roofing/text-2.png" 
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
                  <span>Standing out in market of unreliable contractors</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Communicating 'we actually show up' promise</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Winning high-value jobs from skeptical homeowners</span>
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

      {/* Results Section with Animated Counters */}
      <section className="px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-50 text-green-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6 border border-green-100">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Real Results
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Performance Impact</h2>
            <p className="text-slate-600 text-base sm:text-lg">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {caseStudyData.results.map((result, idx) => (
              <CounterWrapper key={idx} metric={result} idx={idx} />
            ))}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Key Features Delivered</h2>
            <p className="text-slate-600 text-base sm:text-lg">Everything built for RAM Roofing</p>
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
                  {idx === 0 && <FileText className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 1 && <Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 2 && <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 3 && <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 4 && <Shield className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 5 && <Star className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 6 && <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 7 && <Building className="w-4 h-4 sm:w-5 sm:h-5" />}
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
            <p className="text-slate-600 text-base sm:text-lg">How we built RAM Roofing's digital presence</p>
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
                    layoutId="process-indicator-ram"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Technology Stack</h2>
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