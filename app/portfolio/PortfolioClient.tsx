'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Only import the main stylesheet (zoom works without extra css import)
import "yet-another-react-lightbox/styles.css";
import BookingSection from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";

/* =======================
   PORTFOLIO DATA
======================= */
const BASE_PATH = "/portfolio";

const PORTFOLIO_CATEGORIES = [
  { type: "web", category: "Web Design", folder: "webd", count: 6 },
  { type: "ecom", category: "E-Commerce", folder: "ecom", count: 6 },
  { type: "logo", category: "Logo Design", folder: "logo", count: 6 },
  { type: "app", category: "Mobile App", folder: "appd", count: 6 },
  { type: "branding", category: "Branding", folder: "branding", count: 6 },
  { type: "custom", category: "Custom Development", folder: "custom", count: 6 },
];

const PORTFOLIO_ITEMS = PORTFOLIO_CATEGORIES.flatMap((cat) =>
  Array.from({ length: cat.count }, (_, i) => ({
    title: `${cat.category} Project ${i + 1}`,
    category: cat.category,
    type: cat.type,
    image: `${BASE_PATH}/${cat.folder}/${i + 1}.png`,
    id: `${cat.type}-${i + 1}`,
  }))
);

/* =======================
   FILTERS
======================= */
const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Design" },
  { id: "logo", label: "Logo Design" },
  { id: "ecom", label: "E-Commerce" },
  { id: "app", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
  { id: "custom", label: "Custom Development" },
];

/* =======================
   PORTFOLIO PAGE COMPONENT
======================= */
export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  // Slides for the lightbox
  const slides = PORTFOLIO_ITEMS.map((item) => ({
    src: item.image,
    alt: item.title,
    width: 1600,
    height: 1200,
  }));

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs mb-3 block">
              Our Work
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              Selected Projects
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
              A showcase of our best work across various industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16 px-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2.5 md:px-5 md:py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow scale-105"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => {
                  const globalIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === item.id);
                  setLightboxIndex(globalIndex);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const globalIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === item.id);
                    setLightboxIndex(globalIndex);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.category} project`}
              >
                <div className="group relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] mb-4 border border-slate-100 dark:border-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    priority={index < 6}
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400 pointer-events-none" />

                  <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 w-11 h-11 md:w-12 md:h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg pointer-events-none z-10">
                    <ArrowRight className="text-slate-900 dark:text-white" size={20} />
                  </div>
                </div>

                <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center md:text-left px-1">
                  {item.category}
                </p>
              </div>
            ))}
          </div>

          {/* Results count */}
          {/* <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredItems.length} of {PORTFOLIO_ITEMS.length} projects
          </div> */}
        </div>
      </section>

      {/* Lightbox with Zoom */}
      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        slides={slides}
        index={lightboxIndex ?? 0}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 5,
          scrollToZoom: true,
          doubleClickToZoom: true,
          pinchToZoom: true,
          zoomInMultiplier: 1.6,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
      />
      
 <section id="booking-form" className="pt-12 md:pt-16 pb-4 md:pb-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
  <BookingSection />
</section>

{/* Testimonials - NO top padding, pulled up */}
<section className="bg-white dark:bg-slate-950 -mt-2">
  <TestimonialsSection />
</section>


      <Footer />
    </>
  );
}