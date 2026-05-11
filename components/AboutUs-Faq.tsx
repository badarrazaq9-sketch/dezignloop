'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services does your agency provide?',
    answer:
      'We specialize in branding, software design, web design, UX/UI, social media marketing, digital advertising, video production, and content creation. Whether you need a high-converting website, complete brand identity, lead generation systems, or full digital growth strategy — we handle it end-to-end for small to medium businesses.',
  },
  {
    question: 'Who are your typical clients?',
    answer:
      'Our typical clients are ambitious small businesses, startups, local service providers, e-commerce brands, and growing companies that want to stand out online. We work with entrepreneurs who value clean design, fast performance, real leads, and measurable growth — from Karachi to international markets.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on scope:\n• Simple branding or landing page: 2–4 weeks\n• Full website + branding: 6–10 weeks\n• E-commerce platform or complex app: 10–16 weeks\n• Marketing campaigns or ongoing retainers: flexible monthly\nWe always provide a clear timeline during the free strategy call so you know exactly what to expect.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer transparent, value-based pricing with no hidden fees:\n• Branding packages: starting from $1,500–$4,500\n• Web design & development: $2,500–$12,000+\n• Full digital growth (website + marketing): custom quote\n• Monthly retainers for SEO/social/ads: $800–$3,000+/mo\nEvery project starts with a free discovery call where we scope your needs and give a fixed-price proposal tailored to your goals.',
  },
  {
    question: 'Why are UX and UI important?',
    answer:
      'Great UX (User Experience) and UI (User Interface) directly impact your business results. Good UX makes your site intuitive and enjoyable → visitors stay longer, convert more, and come back. Strong UI builds trust and brand recognition through clean visuals, consistent design, and mobile perfection. Together, they reduce bounce rates, increase leads/sales, and help small businesses compete with bigger players online. Poor design costs you money — we make sure yours works for you.',
  },
];

export default function FAQSectionAboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Subtle background (matching hero/about style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128,128,128,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,128,128,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <HelpCircle className="text-primary" size={20} />
            <span className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            Your Questions
            <br />
            <span className="gradient-text">Answered</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Got questions about working with us? Here are the ones we hear most often.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-primary/50 shadow-xl shadow-primary/10'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 md:px-10 py-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-500 dark:text-slate-400 group-hover:text-primary"
                >
                  <ChevronDown size={28} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-10 pb-8 pt-2">
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Still have questions? We're happy to help.
          </p>
          <a
            href="#booking-form"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1C9FF0] to-[#010FFF] text-white rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Free Strategy Call <ChevronDown size={20} className="rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}