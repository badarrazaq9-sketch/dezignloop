'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Users,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  Loader,
  Clock,
  MessageSquare,
  XCircle,
} from 'lucide-react';

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

const TIME_SLOTS = ['10am - 1pm', '1pm - 4pm', '4pm - 8pm', 'Flexible'];

export default function BookingSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design',
    timePreference: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToNextStep = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        return;
      }
      setStep(2);
    }
  };

  const goToPrevStep = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.timePreference) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/book-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Booking confirmed! We'll call you shortly at your preferred time.",
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 6000);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Web Design',
          timePreference: '',
          message: '',
        });
        setStep(1);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Booking failed. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Connection error. Please check your internet and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  return (
    <section
      id="booking-form"
      className="py-24 md:py-32 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight">
              Get Your Free Launch Strategy Session
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium">
              Book a quick call and get clarity on design, tech, pricing, and timelines.
            </p>
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              {[
                'Action: 1-on-1 call with a senior consultant',
                'Plan: Actionable launch roadmap',
                'Next Steps: Clear guidance after the call',
              ].map((text) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-sm sm:text-base md:text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-3xl relative"
            >
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 dark:text-white">
                Schedule Your Free Call
              </h3>

              {/* Progress bar + labels */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-semibold text-sm ${
                      step === 1 ? 'text-primary' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Your Details
                  </span>
                  <span
                    className={`font-semibold text-sm ${
                      step === 2 ? 'text-primary' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Call Preferences
                  </span>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: step === 1 ? '50%' : '100%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Toast / Success Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`mb-6 p-4 rounded-2xl text-center font-medium shadow-lg flex items-center justify-center gap-3
                      ${
                        submitStatus.type === 'success'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border border-green-200 dark:border-green-800/50'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border border-red-200 dark:border-red-800/50'
                      }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 flex-shrink-0" />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            type="text"
                            name="name"
                            placeholder="john lee"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-primary font-bold transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            type="email"
                            name="email"
                            placeholder="yourname@email.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-primary font-bold transition"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+1 234 567 890"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-primary font-bold transition"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={goToNextStep}
                        disabled={!isStep1Valid}
                        className="w-full py-5 rounded-2xl font-black text-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 disabled:bg-slate-400 transition-all flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      {/* Preferred Time */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                          Preferred Call Time
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {TIME_SLOTS.map((slot) => {
                            const active = formData.timePreference === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, timePreference: slot }))
                                }
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                                  active
                                    ? 'border-primary bg-primary/10 text-primary shadow-sm'
                                    : 'border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-200 dark:hover:border-slate-600'
                                }`}
                              >
                                <Clock size={16} />
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-primary font-bold transition"
                        >
                          <option>Web Design</option>
                          <option>Branding</option>
                          <option>Custom Development</option>
                          <option>Mobile App Development</option>
                          <option>Growth Marketing</option>
                        </select>
                      </div>

                      {/* Optional Message */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          Message / Notes (optional)
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-5 top-4 text-slate-400" size={20} />
                          <textarea
                            name="message"
                            placeholder="Anything else we should know before the call?"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-primary font-bold transition resize-vertical"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          type="button"
                          onClick={goToPrevStep}
                          className="flex-1 py-5 rounded-2xl font-black text-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={18} /> Back
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.timePreference}
                          className="flex-1 py-5 rounded-2xl font-black text-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 disabled:bg-slate-400 transition-all flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader size={20} className="animate-spin" />
                              Booking...
                            </>
                          ) : (
                            <>
                              Schedule My Call
                              <ArrowRight />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Limited weekly availability
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}