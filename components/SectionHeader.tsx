'use client';

import React from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
  level?: 'h1' | 'h2';
}

export default function SectionHeader({ tag, title, description, center = false, level = 'h2' }: SectionHeaderProps) {
  const Heading = level === 'h1' ? 'h1' : 'h2';
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {tag && (
        <div className={`inline-block mb-4 ${center ? 'flex justify-center' : ''}`}>
          <span className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      )}
      <Heading className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
        {title}
      </Heading>
      {description && (
        <p className="inline-flex text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl ">
          {description}
        </p>
      )}
    </div>
  );
}
