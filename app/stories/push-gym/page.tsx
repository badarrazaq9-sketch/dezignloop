'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Dumbbell,
  Clock,
  MapPin,
  Globe,
  Calendar,
  ChevronRight,
  Quote,
  Zap,
  Users,
  Award,
  Target,
  BarChart3,
  Shield,
  Play,
  Search,
  Layers,
  Monitor,
  PenTool
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';

// Case Study Data for Matrix Fitness
const caseStudyData = {
  id: "matrix-fitness",
  client: "Matrix Fitness",
  industry: "Commercial Fitness Equipment / B2B Manufacturing",
  location: "Global (50+ Countries)",
  duration: "16 weeks",
  title: "Powering a Global Fitness Empire with a Digital Experience to Match",
  description: "We architected a scalable, multi-language digital platform for Matrix Fitness that serves commercial gym owners, hotels, and corporate wellness managers across 50+ countries with immersive product experiences and data-driven insights.",
  challenge: "Matrix Fitness needed to transition from a traditional equipment catalog to an immersive digital experience that could serve diverse B2B buyers globally. Their existing site couldn't handle complex product configurations, multi-language requirements, or the rich media needed to showcase premium equipment to decision-makers.",
  solution: "Built a headless commerce platform with 3D product visualization, interactive space planning tools, multi-language support (12 languages), and a resource hub with research-backed fitness insights. Integrated with their global dealer network and CRM for seamless lead management.",
  results: [
    { metric: "Lead Quality", value: "340%", description: "Increase in qualified B2B inquiries", numericValue: 340, suffix: "%" },
    { metric: "Global Reach", value: "50+", description: "Countries with localized experience", numericValue: 50, suffix: "+" },
    { metric: "Engagement", value: "4.2x", description: "Longer session duration", numericValue: 4.2, suffix: "x", isDecimal: true },
    { metric: "Dealer Network", value: "2,500+", description: "Connected dealer partners", numericValue: 2500, suffix: "+" }
  ],
  features: [
    "3D product configurator & visualization",
    "Interactive gym space planning tool",
    "Multi-language & multi-currency support",
    "Research hub with fitness insights",
    "Dealer locator & lead routing",
    "Virtual equipment tours",
    "ROI calculator for gym owners",
    "Integration with Salesforce CRM"
  ],
  technologies: ["Next.js 14", "TypeScript", "Three.js", "Sanity CMS", "Salesforce API", "Algolia Search", "AWS CloudFront", "Figma"],
  process: [
    { step: 1, title: "Global Discovery", description: "Audited 12 regional markets and B2B buyer personas across segments" },
    { step: 2, title: "Platform Architecture", description: "Designed headless infrastructure for scale and localization" },
    { step: 3, title: "Immersive Experience", description: "Built 3D configurator and interactive tools with Three.js" },
    { step: 4, title: "Global Rollout", description: "Launched with 12 languages and regional dealer integrations" }
  ],
  testimonial: {
    quote: "This digital transformation has completely changed how we engage with commercial buyers. The 3D configurator alone has reduced our sales cycle by 40% because clients can visualize their exact equipment package before we even talk.",
    author: "Matrix Digital Team",
    role: "Global Marketing",
    company: "Matrix Fitness (Johnson Health Tech)"
  },
  liveUrl: "https://world.matrixfitness.com/eng",
  portfolioUrl: "/portfolio",
  images: [
    { url: "/matrix/first-img.png", caption: "Commercial Gym Solutions - Cardio & Strength" },
    { url: "/matrix/second-img.png", caption: "Premium Equipment - Onyx Collection" },
    { url: "/matrix/third-img.png", caption: "Interactive 3D Product Configurator" }
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
// Animated Counter Component
function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2.5, isDecimal = false }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const startValue = 0;
      
      const animate = (currentTime) => {
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
  }, [isInView, hasStarted, value, duration, isDecimal]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MatrixFitnessCaseStudy() {
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

      {/* Hero Section - SAME THEME AS NORTH STAR */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Meta Tags - BLUE THEME */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100 flex items-center gap-2">
                <Dumbbell className="w-4 h-4" />
                {caseStudyData.industry}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {caseStudyData.location}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {caseStudyData.duration}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
            >
              {caseStudyData.title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              {caseStudyData.description}
            </motion.p>

            {/* CTA Buttons - BLUE THEME */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href={caseStudyData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToProcess}
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 rounded-full font-semibold transition-all"
              >
                View Design Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Website Preview Showcase */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-200"
          >
            {/* Browser Chrome */}
            <div className="bg-slate-200 px-4 py-3 flex items-center gap-2 border-b border-slate-300">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-4 py-1.5 text-sm text-slate-500 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  world.matrixfitness.com
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
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <motion.p 
                  key={activeImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-medium text-lg"
                >
                  {caseStudyData.images[activeImage].caption}
                </motion.p>
              </div>
            </div>

            {/* Thumbnail Navigation - BLUE THEME */}
            <div className="flex gap-3 p-6 bg-white border-t border-slate-100">
              {caseStudyData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-1 aspect-video rounded-xl overflow-hidden transition-all ${
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
              { color: '#E10600', name: 'Performance Red', usage: 'Primary CTA buttons (Shop Now / Learn More), highlights, active states, accents' },
{ color: '#FFFFFF', name: 'Pure White', usage: 'Main backgrounds, sections, content space for clean layout and contrast' },
{ color: '#000000', name: 'Pure Black', usage: 'Primary text, headers, icons, footer text and high-contrast emphasis' },
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
                src="/matrix/text-1.png" 
                alt="Proxima Nova font sample"
                className="w-full rounded-xl shadow-sm"
              />
              <img 
                src="/matrix/text-2.png" 
                alt="Playfair Display font sample"
                className="w-full rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - SAME THEME AS NORTH STAR */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                  <TrendingUp className="w-6 h-6 rotate-180" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {caseStudyData.challenge}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <span>Static catalog couldn't showcase premium equipment value</span>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <span>No support for 12+ languages and global markets</span>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <span>Complex B2B buying process not supported digitally</span>
                </div>
              </div>
            </motion.div>

            {/* Solution - BLUE THEME */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Solution</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {caseStudyData.solution}
              </p>
              <div className="space-y-3">
                {caseStudyData.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section with Animated Counters - BLUE THEME */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 font-medium text-sm mb-6 border border-green-100">
              <TrendingUp className="w-4 h-4" />
              Global Impact
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Results</h2>
            <p className="text-slate-600 text-lg">Measurable improvements across 50+ countries</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {caseStudyData.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter 
                    value={result.numericValue} 
                    suffix={result.suffix} 
                    prefix={result.prefix}
                    duration={2.5}
                    isDecimal={result.isDecimal}
                  />
                </div>
                <div className="font-semibold text-slate-900 mb-1">{result.metric}</div>
                <div className="text-sm text-slate-500">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - BLUE THEME */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Platform Capabilities</h2>
            <p className="text-slate-600">Enterprise-grade features for global B2B sales</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyData.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {idx === 0 && <Play className="w-5 h-5" />}
                  {idx === 1 && <Target className="w-5 h-5" />}
                  {idx === 2 && <Globe className="w-5 h-5" />}
                  {idx === 3 && <BarChart3 className="w-5 h-5" />}
                  {idx === 4 && <MapPin className="w-5 h-5" />}
                  {idx === 5 && <Zap className="w-5 h-5" />}
                  {idx === 6 && <TrendingUp className="w-5 h-5" />}
                  {idx === 7 && <Shield className="w-5 h-5" />}
                </div>
                <p className="font-medium text-slate-900 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - BLUE THEME */}
      <section id="process-section" className="px-6 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-slate-600 text-lg">How we built a global fitness platform</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {caseStudyData.process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActiveProcess(idx)}
                className={`relative p-6 rounded-2xl transition-all cursor-pointer ${
                  activeProcess === idx 
                    ? 'bg-white shadow-xl shadow-blue-500/5 border-blue-200' 
                    : 'bg-slate-50 border-slate-200'
                } border`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-4 transition-colors ${
                  activeProcess === idx 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
                    : 'bg-white text-slate-400 shadow-sm'
                }`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                
                {activeProcess === idx && (
                  <motion.div 
                    layoutId="process-indicator-matrix"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-2xl"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - BLUE THEME */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Enterprise Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudyData.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-6 py-3 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
            <li>Shopify Plus Storefront API</li>
            <li>Custom Order Management API</li>
            <li>Klaviyo REST API</li>
            <li>Payment Gateway APIs</li>
          </ul>
        </article>

        <article className="bg-white/10 rounded-xl p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">
            Data Layer
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <li>Shopify Plus Backend</li>
            <li>PostgreSQL Database</li>
            <li>Redis Cache</li>
            <li>AWS S3 Storage</li>
          </ul>
        </article>

      </div>
    </div>
  </div>
</section>

      {/* Testimonial */}
      <TestimonialsSection />

      <BookingSection />

      {/* Explore More Projects - BLUE THEME */}
      <section className="px-6 py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Explore More Projects</h3>
              <p className="text-slate-600">See our complete portfolio of successful client work</p>
            </div>
            <Link href={caseStudyData.portfolioUrl}>
              <button className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all">
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