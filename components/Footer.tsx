'use client';

import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-32 pb-12 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              {/* Light mode logo */}
              <Image
                src="/assets/logob.png"
                alt="DezignLoop Logo"
                width={200}
                height={36}
                className="block dark:hidden"
                priority
              />
              {/* Dark mode logo */}
              <Image
                src="/assets/logow.png"
                alt="DezignLoop Logo"
                width={200}
                height={36}
                className="hidden dark:block"
                priority
              />
            </div>
<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
  High-end design agency helping brands scale with speed, style, and precision. We specialize in web design, branding, and growth systems that transform ideas into powerful digital products and measurable results.
</p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61580891606731#"
                className="w-12 h-12 rounded-2xl text-black bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-primary dark:text-white hover:border-primary dark:hover:border-primary hover:-translate-y-1 transition-all shadow-sm"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/dezignloop_/"
                className="w-12 h-12 rounded-2xl text-black bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-primary dark:text-white hover:border-primary dark:hover:border-primary hover:-translate-y-1 transition-all shadow-sm"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/dezignloop"
                className="w-12 h-12 rounded-2xl text-black bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-primary dark:text-white hover:border-primary dark:hover:border-primary hover:-translate-y-1 transition-all shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-slate-400 dark:text-slate-500">Services</h4>
            <ul className="space-y-4 font-bold text-slate-600 dark:text-slate-300">
              <li><Link href="/services/web-design" className="hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link href="/services/branding" className="hover:text-primary transition-colors">Branding</Link></li>
              <li><Link href="/services/ecommerce-web-development" className="hover:text-primary transition-colors">Mobile App</Link></li>
              <li><Link href="/services/lead-generation" className="hover:text-primary transition-colors">Lead Generation</Link></li>
              <li><Link href="/services/lead-generation" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>

            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-slate-400 dark:text-slate-500">Company</h4>
            <ul className="space-y-4 font-bold text-slate-600 dark:text-slate-300">
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-slate-400 dark:text-slate-500">Contact</h4>
            <ul className="space-y-4 font-bold text-slate-600 dark:text-slate-300">
              <li>Address: 4th St N #2239, Saint Petersburg, FL, United States, 33712</li>
              <li><a href="mailto:support@dezignloop.com" className="hover:text-primary transition-colors">Email: support@dezignloop.com</a></li>
              <li><a href="tel:+18434109324" className="hover:text-primary transition-colors">Phone: +1 (843)284 3078</a></li>
              <li><a href="#booking-form" className="hover:text-primary transition-colors">Book a Discovery Call</a></li>
            </ul> 
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest">© 2019-2026 DezignLoop. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms And Condtions</Link>
            <Link href="/refund-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
