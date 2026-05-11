'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '450+', label: 'Happy Clients' },
  { value: '7+', label: 'Years of Experience' },
  { value: '95%', label: 'Client Satisfaction' },
];

// Optimized AnimatedNumber component
function AnimatedNumber({
  endValue,
  prefix = '',
  suffix = '',
}: {
  endValue: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  // Simplified Intersection Observer
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Optimized animation with reduced duration
  useEffect(() => {
    if (!isInView) return;

    const duration = 1200; // Reduced from 1800ms to 1200ms
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Faster easing function
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const current = Math.floor(eased * endValue);
      setCount(current);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure exact final value
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Memoized stat items to prevent re-renders
const StatItem = memo(function StatItem({
  stat,
  index
}: {
  stat: typeof stats[0];
  index: number;
}) {
  // Parse value like "200+", "$50M", "98%"
  const parsedValue = useMemo(() => {
    const match = stat.value.match(/^([\D]*)(\d+)([\D]*)$/);
    return {
      prefix: match?.[1] || '',
      num: match?.[2] ? parseInt(match[2], 10) : 0,
      suffix: match?.[3] || '',
    };
  }, [stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: Math.min(index * 0.08, 0.3), // Reduced delay
        duration: 0.5, // Faster animation
        ease: "easeOut"
      }}
      className="space-y-2 text-center"
    >
      <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
        <AnimatedNumber 
          endValue={parsedValue.num} 
          prefix={parsedValue.prefix} 
          suffix={parsedValue.suffix} 
        />
      </div>
      <div className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-[0.2em]">
        {stat.label}
      </div>
    </motion.div>
  );
}, (prev, next) => prev.stat.value === next.stat.value && prev.index === next.index);

// Import React.memo
import { memo } from 'react';

export default function StatsSection() {
  // Pre-calculate grid class to avoid runtime calculation
  const gridClass = "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12";
  
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={gridClass}>
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional: Even faster version without animations
export function FastStatsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C9FF0] to-[#010FFF] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}