'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

import { motion } from 'framer-motion';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';

const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`flex items-center justify-between w-full max-w-6xl px-6 py-2.5 rounded-full border transition-all duration-500 mx-auto ${scrolled ? 'glass-nav border-white/50 dark:border-white/10 dark:bg-slate-900/80 shadow-xl shadow-slate-200/40 dark:shadow-black/40 scale-95' : 'bg-transparent border-transparent'}`}>
        
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group"
        >
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
        </Link>

        {/* Desktop menu - visible only on lg and above */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-black dark:text-white">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/stories" className="hover:text-primary transition-colors">Stories</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          
          {/* "Book Free Call" button - visible on md and above (kept as original) */}
          <button
            onClick={() => smoothScroll('booking-form')}
            className="hidden md:inline bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 cursor-pointer border-0 ring-1 ring-white/20 focus:outline-none focus:ring-0"
          >
            Book Free Call
          </button>

          {/* Hamburger - visible below lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - now includes all links + CTA */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-4 right-4 mt-3 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 lg:hidden border border-slate-200 dark:border-slate-700"
        >
          <div className="flex flex-col space-y-4 text-base font-medium text-slate-900 dark:text-white">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Home</Link>
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">About Us</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Services</Link>
            <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Portfolio</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Pricing</Link>
            <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Stories</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Contact</Link>
          

            <button
              onClick={() => {
                smoothScroll('booking-form');
                setMobileMenuOpen(false);
              }}
              className="mt-4 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white px-6 py-3 rounded-full font-bold text-center hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Book Free Call
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}