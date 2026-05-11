'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  trustpilotUrl: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The logo designer did an excellent job capturing our brand's vision in a clean, modern, and memorable mark. They nailed the perfect balance of simplicity and personality, delivering multiple strong concepts with fast revisions.",
    author: 'Aaron De Leon',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
  {
    quote:
      'Quick, affordable, and went the extra mile to make sure I was happy. Great communication as well! Their socials went down and they still found a way to contact me about my work!',
    author: 'Andrew',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
  {
    quote: 'Good service on knowing exactly what the client wants.',
    author: 'Gerald Santamaria',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
  {
    quote:
      'Awesome company. They did great work and fast. Would recommend to anyone looking for a logo.',
    author: 'Eric',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
  {
    quote:
      'The team, particularly David, has truly impressed me. He has consistently made swift adjustments to align with my objectives and provided clear options.',
    author: 'David Rob',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
  {
    quote:
      'This was my first time starting a business, and I\'m really grateful that the DezignLoop team guided me through my logo, website, and branding.',
    author: 'Jami',
    role: 'Verified Trustpilot Review',
    trustpilotUrl: 'https://www.trustpilot.com/review/dezignloop.com',
  },
];

const CLONES = 2;

const slides = [
  ...testimonials.slice(-CLONES),
  ...testimonials,
  ...testimonials.slice(0, CLONES),
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [index, setIndex] = useState(CLONES);
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInstant, setIsInstant] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;

      const first = trackRef.current.children[0] as HTMLElement;
      if (!first) return;

      const slideWidth = first.getBoundingClientRect().width;
      const styles = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(styles.columnGap || '0');

      setStep(slideWidth + gap);
      setIndex(CLONES);
    };

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(measure, 100);
    };

    measure();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;

    let startTime: number;
    const interval = 4000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;

      if (elapsed >= interval) {
        setIndex((i) => i + 1);
        startTime = currentTime;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const handleAnimationComplete = () => {
    const total = testimonials.length;

    if (index >= total + CLONES) {
      setIsInstant(true);
      setIndex(CLONES);
    }

    if (index < CLONES) {
      setIsInstant(true);
      setIndex(total + CLONES - 1);
    }
  };

  useEffect(() => {
    if (!isInstant) return;

    const id = requestAnimationFrame(() => {
      setIsInstant(false);
    });

    return () => cancelAnimationFrame(id);
  }, [isInstant]);

  const onDragEnd = useCallback(
    (_: any, info: any) => {
      if (info.offset.x < -step / 4) setIndex((i) => i + 1);
      if (info.offset.x > step / 4) setIndex((i) => i - 1);
    },
    [step]
  );

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Loved by Founders
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-10">
            We don't just deliver designs — we build long-term partnerships
            with ambitious founders.
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => setIndex((i) => i - 1)}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full
              bg-white/90 dark:bg-slate-800/90 backdrop-blur-md
              border border-slate-200/50 dark:border-slate-700/50
              flex items-center justify-center text-slate-800 dark:text-slate-200
              shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-slate-700
              transition-all duration-200"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => setIndex((i) => i + 1)}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full
              bg-white/90 dark:bg-slate-800/90 backdrop-blur-md
              border border-slate-200/50 dark:border-slate-700/50
              flex items-center justify-center text-slate-800 dark:text-slate-200
              shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-slate-700
              transition-all duration-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 lg:gap-8 cursor-grab active:cursor-grabbing"
            animate={{ x: -(index * step) }}
            transition={
              isInstant
                ? { duration: 0 }
                : { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
            }
            onAnimationComplete={handleAnimationComplete}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
          >
            {slides.map((t, i) => (
              <a
                key={`${t.author}-${i}`}
                href={t.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-shrink-0
                  w-[85vw] sm:w-[45vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.5rem)]
                  bg-white dark:bg-[#0f1117]
                  p-6 sm:p-7
                  rounded-[2.3rem]
                  border border-slate-200 dark:border-slate-800
                  transition-all duration-500
                  hover:-translate-y-1 hover:shadow-2xl
                  flex flex-col
                  min-h-[320px] sm:min-h-[340px]
                  relative
                  overflow-hidden
                  group
                  cursor-pointer
                  no-underline
                "
                onClick={(e) => {
                  // Allow drag without triggering link navigation
                  // The drag is handled by framer-motion on the parent
                }}
              >
                {/* Quote Icon */}
                <Quote
                  size={42}
                  className="absolute top-6 right-6 text-primary/10 rotate-180"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={17}
                      className="fill-lime-300 text-lime-300"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 dark:text-slate-300 leading-8 text-[15px] font-medium flex-grow">
                  {t.quote}
                </p>

                {/* Footer */}
                <div className="pt-5 mt-6 border-t border-slate-200/70 dark:border-slate-700/50 flex items-center gap-4">
                  <div
                    className="
                      w-11 h-11 rounded-full
                      bg-white dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      flex items-center justify-center
                      shadow-md shrink-0
                      group-hover:scale-105 transition
                    "
                  >
                    <Image
                      src="/assets/tpw.png"
                      alt="Trustpilot"
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      {t.author}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">
                      {t.role}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Trustpilot */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Verified reviews on
          </span>

          <a
            href="https://www.trustpilot.com/review/dezignloop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <Image
              src="/assets/tpw.png"
              alt="Trustpilot Reviews"
              width={160}
              height={40}
              className="w-[10em] h-auto dark:hidden"
            />

            <Image
              src="/assets/tpw.png"
              alt="Trustpilot Reviews"
              width={160}
              height={40}
              className="w-[10em] h-auto hidden dark:block"
            />
          </a>
        </div>
      </div>
    </section>
  );
}