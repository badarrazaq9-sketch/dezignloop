// components/LeadPopup.tsx
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShieldCheck, Clock } from 'lucide-react';

const POPUP_DELAY_MS = 8000; // 8 seconds

const TIME_SLOTS = [
  '10am - 1pm',
  '1pm - 4pm',
  '4pm - 8pm',
  'Flexible',
];

const SERVICE_OPTIONS = ['Web Design', 'Branding', 'App Development', 'Marketing'];
const BUDGET_OPTIONS = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timePreference: string;
};



export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timePreference: '',
  });

 useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenLeadPopup');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
      }, POPUP_DELAY_MS);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage(null);

  try {
    const response = await fetch("/api/lead-popup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitMessage(data.message);
      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        timePreference: "",
      });
      // Close popup after 4 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitMessage(null);
      }, 4000);
    } else {
      setSubmitMessage(data.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    setSubmitMessage("Network error. Please check your connection and try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)} // close on backdrop click
        >
          {/* Inner modal - stop propagation so clicks inside don't close */}
          <motion.div
            initial={{ scale: 0.88, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.88, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close popup"
              className="absolute top-5 right-5 z-10 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-1 h-full">
              {/* Left - Form */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[var(--primary)] font-black uppercase tracking-[0.18em] text-xs mb-5 block">
                  Limited Time Offer
                </span>

                <h3 className="text-3xl lg:text-4xl font-black mb-5 text-slate-900 dark:text-white leading-tight">
                  Get Your Free Digital Growth Audit
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
                  Running a small business is hard enough. We'll review your online presence and show you exactly what will help you grow.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all font-medium"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all font-medium"
                />
                </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all font-medium"
                />

                {/* Service Interest - Dropdown */}
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Service Interest
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                </div>

                {/* Budget Range - Dropdown */}
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Budget Range
                  </option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                {/* Calendly-style Time Preference */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Preferred Time for Call
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {TIME_SLOTS.map((slot) => {
                      const active = formData.timePreference === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              timePreference: slot,
                            }))
                          }
                          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-200 ${
                            active
                              ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] shadow-sm'
                              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          <Clock size={16} />
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[var(--primary)] hover:bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-[var(--primary)]/30 hover:shadow-[var(--primary)]/50 active:scale-[0.98] transition-all duration-200 mt-4"
                >
                  Claim Free Audit Now
                </button>
              </form>
                <p className="text-center text-xs uppercase font-bold text-slate-400 mt-8 tracking-wider flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} className="text-green-500" />
                  100% Secure & Confidential
                </p>
              </div>

              {/* Right - Image + Testimonial (hidden on mobile) */}
            
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}