import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog – Small Business Website, SEO & Marketing Guides | DezignLoop',
  description:
    'Practical guides for US small businesses: website costs, platform comparisons, website mistakes to fix, and local SEO that wins customers.',
  alternates: {
    canonical: 'https://dezignloop.com/blog',
  },
  openGraph: {
    title: 'DezignLoop Blog – Small Business Guides',
    description:
      'Practical guides for US small businesses: website costs, platform comparisons, and local SEO.',
    url: 'https://dezignloop.com/blog',
    type: 'website',
  },
};

const posts = [
  {
    "slug": "how-much-does-a-website-cost-small-business-2026",
    "title": "How Much Does a Website Cost for Small Business? (2026)",
    "description": "Small business website costs in 2026: DIY vs freelancer vs agency pricing, what drives the price, and what you should actually budget.",
    "keyword": "how much does a website cost for a small business"
  },
  {
    "slug": "wordpress-vs-shopify-vs-squarespace",
    "title": "WordPress vs Shopify vs Squarespace for Small Business",
    "description": "WordPress vs Shopify vs Squarespace compared for small business owners: costs, ease of use, e-commerce, and SEO \u2014 plus when to pick each one.",
    "keyword": "wordpress vs shopify vs squarespace"
  },
  {
    "slug": "signs-website-losing-customers",
    "title": "10 Signs Your Small Business Website Is Losing Customers",
    "description": "Is your website costing you customers? These 10 warning signs \u2014 slow speed, no mobile design, weak CTAs \u2014 plus exactly how to fix each one.",
    "keyword": "small business website mistakes"
  },
  {
    "slug": "local-seo-playbook-2026",
    "title": "Local SEO for Small Businesses: The 2026 Playbook",
    "description": "The 2026 local SEO playbook for small businesses: Google Business Profile, reviews, local keywords, and citations that actually win customers.",
    "keyword": "local SEO for small businesses"
  }
];

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white shadow-lg mb-4">
              <BookOpen size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
              DezignLoop Blog
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Practical guides for US small businesses — websites, SEO, and marketing that win customers.
            </p>
          </div>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                    {post.keyword}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-bold text-primary">
                    Read article <ArrowRight size={16} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
