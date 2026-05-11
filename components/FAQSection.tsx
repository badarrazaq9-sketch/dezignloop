'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/* Accordion Item */
const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        <span className="font-bold text-lg md:text-xl text-slate-800 dark:text-white group-hover:text-primary transition-colors pr-6">
          {question}
        </span>
        <ChevronDown
          size={24}
          className={`text-slate-400 dark:text-slate-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${question.replace(/\s+/g, '-')}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden"
            layout // smoother height transitions
            style={{ willChange: 'height, opacity' }} // GPU optimization
          >
            <p className="pb-6 text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* FAQ Section */
export const FAQSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            Commonly Asked Questions
          </h2>
        </div>

       <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 space-y-4">
  <AccordionItem
    question="How quickly can I expect delivery?"
    answer="For our starter packages, we deliver initial concepts within 48 hours. Most web design, branding, and app development projects launch within 7–14 days depending on scope."
  />
  <AccordionItem
    question="Do I retain full ownership of the work?"
    answer="Yes. Once payment is completed, all source files, designs, and intellectual property for your website, branding, or app are fully transferred to you."
  />
  <AccordionItem
    question="Are revisions included in every package?"
    answer="Absolutely. Each service package includes multiple revision rounds to ensure the final result aligns perfectly with your goals."
  />
  <AccordionItem
    question="Do you provide ongoing support after delivery?"
    answer="Yes. Optional monthly retainers are available for website updates, app maintenance, marketing optimization, and continuous improvements."
  />
  <AccordionItem
    question="What is the pricing structure for your services?"
    answer="Pricing depends on the scope of the project. We offer transparent packages tailored to your needs, with clear deliverables and no hidden costs."
  />
</div>
      </div>
    </section>
  );
};

