'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left"
    >
      <div className="flex items-center justify-between p-6">
        <h3 className="font-black text-slate-900 dark:text-white">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
          {answer}
        </div>
      )}
    </button>
  );
}
