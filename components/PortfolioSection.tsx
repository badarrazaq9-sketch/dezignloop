'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// TypeScript types
type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  serviceKey: string;
};

// Constants
const BASE_PATH = '/portfolio';

// Image preloading function
const preloadImage = (src: string) => {
  if (typeof window === 'undefined') return;
  const img = new Image();
  img.src = src;
};

const allPortfolioItems: PortfolioItem[] = [
  // Web Design
  { title: 'Project 1', category: 'Web Design', image: `${BASE_PATH}/webd/1.png`, serviceKey: 'web-design' },
  { title: 'Project 2', category: 'Web Design', image: `${BASE_PATH}/webd/2.png`, serviceKey: 'web-design' },
  { title: 'Project 3', category: 'Web Design', image: `${BASE_PATH}/webd/3.png`, serviceKey: 'web-design' },
  
  // Logo Design
  { title: 'Project 1', category: 'Logo Design', image: `${BASE_PATH}/logo/1.png`, serviceKey: 'logo-design' },
  { title: 'Project 2', category: 'Logo Design', image: `${BASE_PATH}/logo/2.png`, serviceKey: 'logo-design' },
  { title: 'Project 3', category: 'Logo Design', image: `${BASE_PATH}/logo/3.png`, serviceKey: 'logo-design' },
  
  // E-Commerce
  { title: 'Project 1', category: 'E-Commerce', image: `${BASE_PATH}/ecom/1.png`, serviceKey: 'ecommerce' },
  { title: 'Project 2', category: 'E-Commerce', image: `${BASE_PATH}/ecom/2.png`, serviceKey: 'ecommerce' },
  
  // Branding
  { title: 'Project 1', category: 'Branding', image: `${BASE_PATH}/branding/1.png`, serviceKey: 'branding' },
  { title: 'Project 2', category: 'Branding', image: `${BASE_PATH}/branding/2.png`, serviceKey: 'branding' },
  
  // App Development
  { title: 'Project 1', category: 'App Dev', image: `${BASE_PATH}/appd/1.png`, serviceKey: 'app-development' },
  { title: 'Project 2', category: 'App Dev', image: `${BASE_PATH}/appd/2.png`, serviceKey: 'app-development' },
  
  // Custom Development
  { title: 'Project 1', category: 'Custom Dev', image: `${BASE_PATH}/custom/1.png`, serviceKey: 'custom-development' },
  { title: 'Project 2', category: 'Custom Dev', image: `${BASE_PATH}/custom/2.png`, serviceKey: 'custom-development' },
];

type PortfolioSectionProps = {
  service?: string;
  title?: string;
  mode?: 'service' | 'homepage';
};

// Lightbox Component
function Lightbox({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6
          w-10 h-10 sm:w-12 sm:h-12
          rounded-full
          bg-white/90 dark:bg-slate-900/90
          border border-slate-200 dark:border-slate-700
          flex items-center justify-center
          text-slate-600 dark:text-white/70
          hover:text-slate-900 dark:hover:text-white
          hover:bg-slate-100 dark:hover:bg-slate-800
          transition-all shadow-md
          z-10"
        aria-label="Close lightbox"
      >
        <X size={20} className="sm:w-6 sm:h-6" />
      </button>

      <div className="relative max-w-[95vw] max-h-[95vh]">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        <motion.img
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          src={imageUrl}
          alt="Portfolio project preview"
          className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
          onLoad={handleImageLoad}
          loading="eager"
          decoding="sync"
        />
      </div>
    </motion.div>
  );
}

// Portfolio Image Component
interface PortfolioImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}

function PortfolioImage({ src, alt, onClick, className = "" }: PortfolioImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 animate-pulse" />
      )}
      
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          onClick={onClick}
          className={`
            w-full h-full object-cover object-top transition-transform duration-500 
            hover:scale-105 cursor-pointer
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          width={800}
          height={600}
          decoding="async"
        />
      )}

      {hasError && (
        <div 
          className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Click to view
          </span>
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection({
  service,
  title = "Real Projects We've Delivered",
  mode = 'service',
}: PortfolioSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Memoize displayed items to prevent recalculations
  const displayedItems = useMemo(() => {
    if (mode === 'homepage') {
      const webItems = allPortfolioItems
        .filter(item => item.serviceKey === 'web-design')
        .slice(0, 2);

      const otherCategories = [
        'logo-design',
        'ecommerce',
        'branding',
        'app-development',
        'custom-development',
      ];

      const otherItems = otherCategories.flatMap(key =>
        allPortfolioItems
          .filter(item => item.serviceKey === key)
          .slice(0, 1)
      );

      const items = [...webItems, ...otherItems];
      
      // Preload images
      if (typeof window !== 'undefined') {
        items.forEach(item => preloadImage(item.image));
      }
      
      return items;
    } else {
      if (!service) return [];
      const items = allPortfolioItems
        .filter(item => item.serviceKey === service)
        .slice(0, 3);
      
      // Preload images
      if (typeof window !== 'undefined') {
        items.forEach(item => preloadImage(item.image));
      }
      
      return items;
    }
  }, [mode, service]);

  // Handle image click with immediate response
  const handleImageClick = useCallback((imageUrl: string) => {
    setSelectedImage(imageUrl);
    
    // Preload adjacent images for lightbox navigation
    const currentIndex = displayedItems.findIndex(item => item.image === imageUrl);
    if (currentIndex !== -1) {
      // Preload next
      const nextIndex = (currentIndex + 1) % displayedItems.length;
      const nextImage = displayedItems[nextIndex];
      if (nextImage) preloadImage(nextImage.image);
      
      // Preload previous
      const prevIndex = (currentIndex - 1 + displayedItems.length) % displayedItems.length;
      const prevImage = displayedItems[prevIndex];
      if (prevImage) preloadImage(prevImage.image);
    }
  }, [displayedItems]);

  if (displayedItems.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-3 md:mb-4 block">
              Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              {title}
            </h2>
          </div>

          <a
            href="/portfolio"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group whitespace-nowrap text-sm md:text-base"
            aria-label="See all portfolio projects"
          >
            See All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={`${item.serviceKey}-${index}-${item.image}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: Math.min(index * 0.05, 0.3), 
                duration: 0.4,
                ease: "easeOut"
              }}
              className="group relative"
            >
              <div 
                className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleImageClick(item.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(item.image);
                  }
                }}
                aria-label={`View ${item.category} project`}
              >
                <PortfolioImage
                  src={item.image}
                  alt={`${item.category} project - ${item.title}`}
                  onClick={() => handleImageClick(item.image)}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 pointer-events-none">
                  <h4 className="text-white text-lg md:text-xl font-black mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </h4>

                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowRight className="text-slate-900 dark:text-white" size={18} />
                  </div>
                </div>
              </div>

              <p className="mt-3 md:mt-4 text-xs md:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
                {item.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <Lightbox
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}