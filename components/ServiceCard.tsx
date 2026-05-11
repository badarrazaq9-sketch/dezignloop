'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ElementType } from 'react';

type ServiceCardProps = {
  icon: ElementType;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  onClick?: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  tagline,
  description,
  tags,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem]
      border border-slate-100 dark:border-slate-800
      shadow-lg hover:shadow-2xl hover:shadow-slate-200/50
      dark:hover:shadow-black/50
      hover:-translate-y-2
      transition-all duration-500
      h-full flex flex-col group cursor-pointer"
    >
      {/* Top Icons */}
      <div className="flex justify-between items-start mb-8">
        {/* Main Icon */}
        <div
          className="w-16 h-16 bg-slate-50 dark:bg-slate-800
          rounded-2xl flex items-center justify-center text-primary
          group-hover:bg-primary group-hover:text-white
          transition-colors duration-300"
        >
          <Icon size={32} />
        </div>

        {/* Arrow */}
        <div
          className="w-10 h-10 rounded-full border border-slate-200
          dark:border-slate-700 flex items-center justify-center
          text-slate-300 dark:text-slate-600
          group-hover:border-primary group-hover:text-primary
          transition-colors"
        >
          <ArrowRight
            size={18}
            className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Tagline */}
      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
        {tagline}
      </div>

      {/* Description */}
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800
            text-slate-600 dark:text-slate-300
            text-xs font-bold border border-slate-100 dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
