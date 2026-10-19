import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog \u2013 Small Business Website, SEO & Marketing Guides | DezignLoop',
  description:
    'Practical guides for US small businesses: website costs, platform comparisons, website mistakes to fix, and local SEO that wins customers.',
  alternates: {
    canonical: 'https://www.dezignloop.com/blog',
  },
  openGraph: {
    title: 'DezignLoop Blog \u2013 Small Business Guides',
    description:
      'Practical guides for US small businesses: website costs, platform comparisons, and local SEO.',
    url: 'https://www.dezignloop.com/blog',
    siteName: 'DezignLoop',
    type: 'website',
    images: [
      {
        url: 'https://www.dezignloop.com/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'DezignLoop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DezignLoop Blog \u2013 Small Business Guides',
    description:
      'Practical guides for US small businesses: website costs, platform comparisons, and local SEO.',
    images: ['https://www.dezignloop.com/icon-512x512.png'],
  },
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-28 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
              Guides &amp; Playbooks
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Practical guides for US small businesses &mdash; websites, SEO, and marketing that win customers.
            </p>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div
              key="how-much-does-a-website-cost-small-business-2026"
              className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit">
                  Guide
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  How Much Does a Website Cost for Small Business? (2026)
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  Small business website costs in 2026: DIY vs freelancer vs agency pricing, what drives the price, and what you should actually budget.
                </p>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    What you&apos;ll learn
                  </div>
                  <div className="text-2xl font-black text-primary">
                    Real 2026 US pricing: $1,500–$10,000
                  </div>
                </div>
                <Link
                  href="/blog/how-much-does-a-website-cost-small-business-2026"
                  className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Read Article <ArrowRight size=20 />
                </Link>
              </div>
            </div>
            <div
              key="wordpress-vs-shopify-vs-squarespace"
              className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit">
                  Guide
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  WordPress vs Shopify vs Squarespace for Small Business
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  WordPress vs Shopify vs Squarespace compared for small business owners: costs, ease of use, e-commerce, and SEO — plus when to pick each one.
                </p>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    What you&apos;ll learn
                  </div>
                  <div className="text-2xl font-black text-primary">
                    Pick the right platform the first time
                  </div>
                </div>
                <Link
                  href="/blog/wordpress-vs-shopify-vs-squarespace"
                  className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Read Article <ArrowRight size=20 />
                </Link>
              </div>
            </div>
            <div
              key="signs-website-losing-customers"
              className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit">
                  Guide
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  10 Signs Your Small Business Website Is Losing Customers
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  Is your website costing you customers? These 10 warning signs — slow speed, no mobile design, weak CTAs — plus exactly how to fix each one.
                </p>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    What you&apos;ll learn
                  </div>
                  <div className="text-2xl font-black text-primary">
                    10 fixes that win customers back
                  </div>
                </div>
                <Link
                  href="/blog/signs-website-losing-customers"
                  className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Read Article <ArrowRight size=20 />
                </Link>
              </div>
            </div>
            <div
              key="local-seo-playbook-2026"
              className="group bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit">
                  Guide
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  Local SEO for Small Businesses: The 2026 Playbook
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  The 2026 local SEO playbook for small businesses: Google Business Profile, reviews, local keywords, and citations that actually win customers.
                </p>
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    What you&apos;ll learn
                  </div>
                  <div className="text-2xl font-black text-primary">
                    Rank higher, win local customers
                  </div>
                </div>
                <Link
                  href="/blog/local-seo-playbook-2026"
                  className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
                >
                  Read Article <ArrowRight size=20 />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
