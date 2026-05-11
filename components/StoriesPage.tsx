'use client';

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

/* =======================
   CASE STUDIES DATA
======================= */

const CASE_STUDIES = [
  {
    client: "Aroma Coffee & Tea",
    category: "Café & Restaurant",
    result: "68% More In-Store Visits",
    description:
      "Designed a warm brand identity and mobile-friendly website to highlight menu, locations, and customer experience.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    slug: "aroma-coffee",
  },
  {
    client: "Push Gym",
    category: "Gym & Fitness",
    result: "3.2× Increase in Membership Leads",
    description:
      "Redesigned the logo and website with bold visuals, clear pricing, and lead-focused call-to-actions.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    slug: "push-gym",
  },
  {
    client: "Inspire Nail Bar",
    category: "Beauty & Salon",
    result: "120% More Booking Requests",
    description:
      "Created an elegant visual identity and a conversion-optimized website with service pages and booking flow.",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
    slug: "inspire-nail-bar",
  },
 
 {
    client: "Bunky Boutique",
    category: "Fashion & Retail",
    result: "75% Growth in Online Engagement",
    description:
      "Developed a modern brand look and boutique-style website to showcase collections and attract shoppers.",
    image:
      "/bunky/first-img.png",
    slug: "bunky-boutique",
  },
  {
    client: "Couture Grooming",
    category: "Pet Services",
    result: "2.8× More Appointment Requests",
    description:
      "Designed a friendly brand identity and service-focused website to increase local trust and bookings.",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
    slug: "couture-grooming",
  },
  {
    client: "RAM Roofing",
    category: "Home Services",
    result: "4× Increase in Quote Requests",
    description:
      "Created a trust-driven brand and high-converting service website targeting local homeowners.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    slug: "ram-roofing",
  },
  {
    client: "Ace Auto Sales",
    category: "Auto Dealership",
    result: "2.5× More Vehicle Inquiries",
    description:
      "Built a clean, easy-to-navigate website highlighting inventory, financing options, and contact forms.",
    image:
      "/car-sales/First-image.png",
    slug: "ace-auto-sales",
  },
  {
    client: "Kicks of Chicago",
    category: "Shoe Brand",
    result: "2.4× Increase in Online Inquiries",
    description:
      "Designed a bold sneaker brand identity and modern website to showcase collections and drive local sales.",
    image:
      "/shoes/home.png",
    slug: "kicks-of-chicago",
  },
];


/* =======================
   STORIES PAGE COMPONENT
======================= */

export default function StoriesPage() {
  return (
    <section className="pt-40 pb-28 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            Business Case Studies
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
           See how DesignLoop helps local and small businesses grow with branding and websites.

          </p>
        </div>

        {/* Stories */}
        <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={i}
              className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit">
                    {study.category}
                  </span>

                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                    {study.client}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                    {study.description}
                  </p>

                  {/* Result */}
                  <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
                    <Quote
                      size={40}
                      className="absolute top-4 right-4 text-primary/10"
                    />
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Key Result
                    </div>
                    <div className="text-2xl font-black text-primary">
                      {study.result}
                    </div>
                  </div>

                  {/* CTA: Redirect to case study page */}
                  <Link
                    href={`/stories/${study.slug}`}
                    className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
                  >
                    Read Full Case Study <ArrowRight size={20} />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
