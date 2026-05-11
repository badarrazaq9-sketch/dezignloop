// app/contact/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Building, ArrowRight } from 'lucide-react';

import BlurIn from '@/components/BlurIn';
import SectionHeader from '@/components/SectionHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingForm';
import LeadPopup from '@/components/LeadPopup';
import TestimonialsSection from '@/components/TestimonialsSection';

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-40 pb-24 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header - TEXT ONLY CHANGE */}
          <SectionHeader
            tag="Contact Us"
            title="Get Your Free Website Consultation"
            description="Tell us about your business. We'll show you exactly how to get more customers online."
            center={true}
          />

          {/* Vertical Stack */}
          <div className="max-w-4xl mx-auto space-y-16 mt-16">
            {/* Top: Contact Info */}
            <BlurIn>
              <div className="space-y-12">
                {/* Direct Channels */}
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">
                    Direct Channels
                  </h3>

                  <div className="space-y-8">
                    {/* Phone - MOVED FIRST (VISUAL ONLY) */}
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                          Call Us
                        </div>
                        <a
                          href="tel:+18434109324"
                          className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                        >
                          +1 (843) 410-9324
                        </a>
                        {/* ADDED TEXT ONLY */}
                        <div className="text-sm text-slate-500 mt-1 font-medium">
                          We reply within 2 hours during business hours
                        </div>
                      </div>
                    </div>

                    {/* Email - MOVED SECOND */}
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                          Email Us
                        </div>
                        <a
                          href="mailto:support@dezignloop.com"
                          className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                        >
                          support@dezignloop.com
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Building size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                          Office
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          4th St N #2239, Saint Petersburg, FL, United States, 33712
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Not Ready CTA - BUTTON COLOR ONLY */}
                <div className="bg-gradient-to-br from-primary to-[#010FFF] p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
                  <h3 className="text-2xl font-black mb-4">Not ready to chat yet?</h3>
                  <p className="font-medium opacity-90 mb-8 leading-relaxed">
                    Check out our detailed pricing packages to see exactly what you get and how much it costs. No hidden fees.
                  </p>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 bg-[#1a3a2f] text-white px-6 py-3 rounded-xl font-black hover:bg-[#0f241c] transition-colors"
                  >
                    View Pricing <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </BlurIn>
          </div>
        </div>
      </main>

      {/* Booking Section - ADDED TEXT ONLY, BOOKINGSECTION UNCHANGED */}
      <BlurIn delay={0.2}>
       
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            Join 250+ business owners who switched to professional websites
          </p>
          <BookingSection />
     
      </BlurIn>

      <LeadPopup />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default ContactPage;