'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Mail, Twitter, Linkedin } from 'lucide-react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
// import LaunchStarterSection from '@/components/LaunchStarterSection';
import { FAQSection } from '@/components/FAQSection';
import BookingSection from '@/components/BookingForm';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import TrustedLogos from '@/components/TrustedLogos';
import WhyChooseUs from '@/components/WhyChooseUs';
import PortfolioSection from '@/components/PortfolioSection';
import Comparison from '@/components/Comparision';

// Smooth scroll helper
const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Shared Components
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const LeadPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-5 z-40 max-w-sm w-80 sm:w-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800">

        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="font-bold text-slate-900 dark:text-white mb-2">Ready to Launch?</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
          Get a free consultation call within 24 hours.
        </p>

        <button
          onClick={() => {
            smoothScroll('booking-form');
            setShowPopup(false);
          }}
          className="w-full px-4 py-2.5 bg-primary text-white rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-200"
        >
          Schedule Now
        </button>
      </div>
    </motion.div>
  );
};

// Main Home Page Component
const HomePageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Section */}
      <TrustedLogos />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Launch Starter Section */}
      {/* <LaunchStarterSection /> */}
      <Comparison />


      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Portfolio */}
      <PortfolioSection
        mode="homepage"
        title="Featured Projects"
      />

      {/* Stats */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process */}
      <ProcessSection />

      {/* Booking Form */}
      <section id="booking-form">
        <BookingSection />
      </section>

      {/* Stories */}
      <section id="stories">
        <FAQSection />
      </section>



    </>
  );
};

// Main Export
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300 selection:bg-primary/20 selection:text-primary">
      <ScrollToTop />
      <Navbar />
      <LeadPopup />
      <HomePageContent />
      <Footer />
    </div>
  );
}
