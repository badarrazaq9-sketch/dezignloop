'use client';

import React from 'react';
import { Star } from 'lucide-react';
import BlurIn from './BlurIn';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  trustpilotUrl: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  trustpilotUrl,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <BlurIn delay={delay}>
      <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
        
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-primary text-primary"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-600 dark:text-slate-400 font-medium mb-6 italic">
          "{quote}"
        </p>

        {/* Bottom */}
        <div className="flex items-center gap-4">
          
          {/* Trustpilot Logo Instead of Image */}
          <a
            href={trustpilotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden shrink-0"
          >
            <img
              src="/trustpilot-logo.svg"
              alt="Trustpilot"
              className="w-7 h-7 object-contain"
            />
          </a>

          {/* Author Info */}
          <div>
            <div className="font-black text-slate-900 dark:text-white">
              {author}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              {role}
            </div>
          </div>
        </div>
      </div>
    </BlurIn>
  );
}