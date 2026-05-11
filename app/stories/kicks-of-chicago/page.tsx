'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  ShoppingBag,
  Clock,
  Globe,
  ChevronRight,
  Zap,
  BarChart3,
  Mail,
  Smartphone,
  Palette,
  Headphones,
  Search,
  Layers,
  PenTool,
  Monitor,
  ArrowUpRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingForm';
import Footer from '@/components/Footer';

// Case Study Data for Beckett Simonon
const caseStudyData = {
  id: "beckett-simonon",
  client: "Beckett Simonon",
  industry: "D2C E-Commerce / Fashion",
  location: "Colombia / US Market",
  duration: "16 weeks",
  title: "Revolutionizing D2C Men's Footwear with Ethical Manufacturing and Made-to-Order Excellence",
  description: "We crafted a sophisticated e-commerce platform for Beckett Simonon that showcases their handcrafted, made-to-order men's footwear while educating customers about ethical manufacturing and fair pricing.",
  challenge: "Beckett Simonon needed a sophisticated e-commerce platform that could handle made-to-order manufacturing workflows, educate customers about longer wait times, showcase ethical manufacturing practices, and support expansion into international markets with complex shipping and tax requirements.",
  solution: "Built a custom Shopify Plus platform with made-to-order management, interactive product education, artisan storytelling features, and global commerce infrastructure. Integrated Klaviyo for marketing automation and created immersive product experiences that convert visitors into educated buyers.",
  results: [
    { metric: "Revenue Growth", value: "340%", description: "Year-over-year revenue increase", numericValue: 340, suffix: "%", prefix: "" },
    { metric: "AOV Increase", value: "2.5x", description: "Average order value growth", numericValue: 2.5, suffix: "x", prefix: "", isDecimal: true },
    { metric: "Customer Growth", value: "150%", description: "Active customer base expansion", numericValue: 150, suffix: "%", prefix: "" },
    { metric: "Conversion Rate", value: "45%", description: "Improvement through education", numericValue: 45, suffix: "%", prefix: "" }
  ],
  features: [
    "Advanced made-to-order system",
    "Interactive product education",
    "Artisan storytelling platform",
    "Multi-currency & international",
    "Klaviyo marketing automation",
    "Mobile-first responsive design",
    "Custom product configurator",
    "Customer support integration"
  ],
  technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shopify Plus", "Klaviyo", "PostgreSQL", "Redis", "AWS", "Vercel"],
  process: [
    { step: 1, title: "Discovery & Research", description: "User interviews, competitor analysis, and requirements gathering" },
    { step: 2, title: "Strategy & Design", description: "Wireframes, prototypes, and visual design system creation" },
    { step: 3, title: "Development", description: "Shopify Plus custom theme and order management system" },
    { step: 4, title: "Launch & Optimization", description: "Phased rollout with A/B testing and performance tuning" }
  ],
  testimonial: {
    quote: "DezignLoop didn't just build us a website—they transformed our entire digital presence. The made-to-order management system they created has streamlined our operations and the educational content strategy has significantly improved our conversion rates.",
    author: "Nicholas Hurtado",
    role: "Co-Founder & CEO",
    company: "Beckett Simonon"
  },
  liveUrl: "https://www.beckettsimonon.com/ ",
  portfolioUrl: "/portfolio",
  images: [
    { url: "/shoes/first-img.png", caption: "Premium Handcrafted Leather Shoes - Made to Order" },
    { url: "/shoes/second-img.png", caption: "E-Commerce Platform - Seamless Shopping Experience" },
    { url: "/shoes/third-img.png", caption: "Artisan Craftsmanship - Ethical Manufacturing" }
  ]
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Animated Counter Component
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

export default function BeckettSimononCaseStudy() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const scrollToProcess = () => {
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: PenTool,
      title: "Logo Design",
      subtitle: "Brand Identity Foundation",
      description: "Crafted a timeless, artisanal logo that reflects Beckett Simonon's commitment to handcrafted quality and ethical manufacturing. The mark balances heritage craftsmanship with modern minimalism.",
      deliverables: ["Primary Logo Mark", "Monogram Variations", "Brand Guidelines", "Usage Standards"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Monitor,
      title: "Web Development",
      subtitle: "E-Commerce Platform",
      description: "Built a sophisticated Shopify Plus experience with made-to-order workflows, immersive product storytelling, and seamless global commerce capabilities.",
      deliverables: ["Custom Shopify Theme", "Order Management System", "Mobile-First Design", "Global Commerce Setup"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Layers,
      title: "Brand Identity",
      subtitle: "Visual System & Assets",
      description: "Developed a comprehensive visual language including typography, color systems, photography guidelines, and packaging design that elevates the unboxing experience.",
      deliverables: ["Color Palette", "Typography System", "Packaging Design", "Photography Guidelines"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Search,
      title: "SEO & Growth",
      subtitle: "Organic Performance",
      description: "Implemented technical SEO architecture, content strategy for ethical manufacturing education, and performance optimization driving 340% organic growth.",
      deliverables: ["Technical SEO Setup", "Content Strategy", "Performance Optimization", "Analytics Integration"],
      color: "from-emerald-500 to-teal-600"
    }
  ];

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
                <ShoppingBag className="w-3.5 h-3.5" />
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
                  beckettsimonon.com
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
              Our comprehensive approach transformed Beckett Simonon's digital presence across every touchpoint
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
                onMouseEnter={() => setActiveService(idx)}
                className={`relative group cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  activeService === idx 
                    ? 'bg-white shadow-xl shadow-slate-200/50 scale-105' 
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                } border border-slate-200`}
              >
                {/* Step Number */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} style={{
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
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0`} style={{
                        color: idx === 0 ? '#f59e0b' : idx === 1 ? '#06b6d4' : idx === 2 ? '#8b5cf6' : '#10b981'
                      }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
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
                { color: '#141416', name: 'Night / Deep Black', usage: 'Primary text, headers, icons, footer background' },
                { color: '#FFFFFF', name: 'Pure White', usage: 'Main backgrounds, spacing, content panels' },
                { color: '#D1D1CE', name: 'Rock Gray (Light Neutral)', usage: 'Section backgrounds, card backgrounds, subtle UI panels' },
                { color: '#BEB6AB', name: 'Sand / Warm Neutral', usage: 'Secondary accents, muted highlights, subtle borders' },
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
                src="/shoes/01-03.png" 
                alt="Proxima Nova font sample"
                className="w-full rounded-xl shadow-sm"
              />
              <img 
                src="/shoes/01-04.png" 
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
                  <span>Complex made-to-order manufacturing workflows</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Educating customers about wait times vs. quality</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>International expansion with multi-currency</span>
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
            className="text-center mb-6 md:mb-10"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-50 text-cyan-600 font-medium text-xs sm:text-sm mb-4 border border-cyan-100">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Platform Performance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Results That <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Matter</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Measurable impact across all key business metrics
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {[
                { value: 156, suffix: '%', label: 'Revenue Growth', sublabel: 'Year over year', isDecimal: false },
                { value: 42, suffix: '%', label: 'Conversion Rate', sublabel: 'Increase from 2.1%', isDecimal: false },
                { value: 89, suffix: '%', label: 'Cart Completion', sublabel: 'Abandonment reduced', isDecimal: false },
                { value: 4.8, suffix: '/5', label: 'Customer Rating', sublabel: 'Satisfaction score', isDecimal: true },
                { value: 68, suffix: '%', label: 'Repeat Purchase', sublabel: 'Customer retention', isDecimal: false },
                { value: 2.3, suffix: 's', label: 'Page Load', sublabel: 'Average load time', isDecimal: true },
                { value: 99.9, suffix: '%', label: 'Uptime', sublabel: 'Platform reliability', isDecimal: true },
                { value: 24, suffix: '/7', label: 'Support', sublabel: 'Live chat available', isDecimal: false },
              ].map((metric, idx) => (
                <CounterWrapper key={idx} metric={metric} idx={idx} />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Top Performer</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold mb-0.5">156% Revenue Growth</p>
              <p className="text-xs sm:text-sm text-slate-400">Exceeded projections by 40%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500">Performance</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">2.3s Load Time</p>
              <p className="text-xs sm:text-sm text-slate-500">60% faster than industry avg</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 sm:col-span-2 md:col-span-1"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500">Experience</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">4.8/5 Rating</p>
              <p className="text-xs sm:text-sm text-slate-500">Based on 12K+ reviews</p>
            </motion.div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Platform Capabilities</h2>
            <p className="text-slate-600 text-base sm:text-lg">Comprehensive features for D2C footwear excellence</p>
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
                  {idx === 0 && <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 1 && <Zap className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 2 && <Palette className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 3 && <Globe className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 4 && <Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 5 && <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 6 && <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {idx === 7 && <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <p className="font-medium text-slate-900 text-xs sm:text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 grid md:grid-cols-2 gap-4 md:gap-6 items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop " 
                alt="Order Management Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Made-to-Order <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Management</span>
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
                Our custom order management system seamlessly integrates with Beckett Simonon's 
                production workflow. From order placement to final delivery, every step is tracked 
                and communicated to customers through automated email updates.
              </p>
              <ul className="space-y-2">
                {[
                  'Real-time production status updates',
                  'Automated customer communication',
                  'Inventory forecasting and planning',
                  'Quality control checkpoints',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
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
            <p className="text-slate-600 text-base sm:text-lg">How we built Beckett Simonon's digital platform</p>
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
                    layoutId="process-indicator-beckett"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Technology Stack</h2>
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-8 md:mt-12 px-4 sm:px-6"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 lg:p-10 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">System Architecture</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">Frontend Layer</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>Next.js 14 App Router</li>
                  <li>React Server Components</li>
                  <li>Tailwind CSS + shadcn/ui</li>
                  <li>Framer Motion Animations</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">API & Services Layer</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>Shopify Plus Storefront API</li>
                  <li>Custom Order Management API</li>
                  <li>Klaviyo REST API</li>
                  <li>Payment Gateway APIs</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold mb-3 text-cyan-400 text-sm sm:text-base">Data Layer</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li>Shopify Plus Backend</li>
                  <li>PostgreSQL Database</li>
                  <li>Redis Cache</li>
                  <li>AWS S3 Storage</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>



      <TestimonialsSection />
      <BookingSection />

      {/* Explore More Projects */}
      <section className="px-4 sm:px-6 py-8 md:py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Explore More Projects</h3>
              <p className="text-slate-600 text-sm sm:text-base">See our complete portfolio of successful client work</p>
            </div>
            <a href={caseStudyData.portfolioUrl}>
              <button className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white border border-slate-200 rounded-full font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all text-sm sm:text-base">
                View Portfolio
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}