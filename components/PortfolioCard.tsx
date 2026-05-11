'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlurIn from './BlurIn';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  onClick?: () => void;
}

export default function PortfolioCard({ image, title, category, onClick }: PortfolioCardProps) {
  return (
    <BlurIn>
      <div onClick={onClick} className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/3] border border-slate-100 dark:border-slate-800">
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ArrowRight size={20} className="text-slate-900 dark:text-white" />
          </div>
        </div>
        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{category}</p>
      </div>
    </BlurIn>
  );
}
