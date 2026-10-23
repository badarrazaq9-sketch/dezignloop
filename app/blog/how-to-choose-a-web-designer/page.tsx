import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "How to Choose a Web Designer: 12 Questions to Ask Before You Hire",
  description: "How to choose a web designer for your small business: the 12 questions to ask, what good answers sound like, red flags, and freelancer vs agency explained.",
  keywords: ["how to choose a web designer"],
  alternates: {
    canonical: "https://www.dezignloop.com/blog/how-to-choose-a-web-designer",
  },
  openGraph: {
    title: "How to Choose a Web Designer: 12 Questions to Ask Before You Hire",
    description: "How to choose a web designer for your small business: the 12 questions to ask, what good answers sound like, red flags, and freelancer vs agency explained.",
    url: "https://www.dezignloop.com/blog/how-to-choose-a-web-designer",
    siteName: 'DezignLoop',
    type: 'article',
    publishedTime: '2026-10-22T12:00:00-04:00',
    section: 'Guides',
    tags: [
    "hire a web designer",
    "web design questions",
    "small business website"
],
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
    title: "How to Choose a Web Designer: 12 Questions to Ask Before You Hire",
    description: "How to choose a web designer for your small business: the 12 questions to ask, what good answers sound like, red flags, and freelancer vs agency explained.",
    images: ['https://www.dezignloop.com/icon-512x512.png'],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Choose a Web Designer: 12 Questions to Ask Before You Hire",
  "description": "How to choose a web designer for your small business: the 12 questions to ask, what good answers sound like, red flags, and freelancer vs agency explained.",
  "url": "https://www.dezignloop.com/blog/how-to-choose-a-web-designer",
  "image": "https://www.dezignloop.com/icon-512x512.png",
  "articleSection": "Guides",
  "datePublished": "2026-10-22",
  "dateModified": "2026-10-22",
  "author": {
    "@type": "Organization",
    "name": "DezignLoop",
    "url": "https://www.dezignloop.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DezignLoop",
    "url": "https://www.dezignloop.com/"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.dezignloop.com/blog/how-to-choose-a-web-designer"
  }
};

const articleHtml: string = "<h1>How to Choose a Web Designer: 12 Questions to Ask Before You Hire</h1>\n<p>Hiring a web designer feels risky because you are paying for something you cannot see yet. Most owners only do it once every few years, so there is no practice round. The good news: a short list of questions separates the professionals from the problems, and every good designer will welcome them.</p>\n<p>Treat the first conversation like an interview, because that is what it is. Here are the 12 questions that matter, what a good answer sounds like, and the red flags that should end the call.</p>\n<h2>Before You Talk to Anyone: Get Clear on Three Things</h2>\n<ol>\n<li><strong>What should the website do?</strong> Generate calls, take bookings, sell products, or simply prove you are legitimate? One main job, stated in one sentence.</li>\n<li><strong>Who is it for?</strong> Your typical customer, in a line or two.</li>\n<li><strong>What is the budget range and the deadline?</strong> Designers can work with almost any honest budget. They cannot work with a secret one.</li>\n</ol>\n<p>Walk in with those three answers and every conversation gets shorter, clearer, and cheaper.</p>\n<h2>The 12 Questions</h2>\n<h3>1. Can I see three to five live websites you built recently?</h3>\n<p>Portfolios with screenshots are not enough. Open the real sites, on your phone, and tap around. A good designer sends live links without hesitation and can tell you what each site was built to achieve.</p>\n<h3>2. Have you built websites for businesses like mine?</h3>\n<p>Industry experience is not mandatory, but it helps. A designer who has built for contractors, clinics, or retailers already knows what your customers look for and what your competitors do.</p>\n<h3>3. What platform will you build on, and why that one?</h3>\n<p>WordPress, Shopify, Squarespace, and custom builds all have a place. What matters is the reasoning: how often you will update the site, who will update it, and what features you need today versus next year. \"It is what I always use\" is not a reason.</p>\n<h3>4. Exactly what is included in your price?</h3>\n<p>Get the scope in writing: number of pages, design, development, copy help, stock images, contact forms, booking or payment setup, and how many revision rounds. Most budget blowups are scope misunderstandings, not bad faith.</p>\n<h3>5. How do you handle SEO during the build?</h3>\n<p>A good answer covers page titles and descriptions, mobile speed, local basics like your Google Business Profile, and a site structure Google can crawl. If SEO is \"something you add later, maybe,\" expect to pay twice.</p>\n<h3>6. Who writes the words on the pages?</h3>\n<p>Copy is half the product. Some designers include copywriting, some polish your draft, some expect finished text from you. Any of these can work, as long as you know which one you bought before the project starts.</p>\n<h3>7. What does your process look like, and how long will it take?</h3>\n<p>Look for clear stages: discovery, design mockup, build, revisions, launch. A simple small business site usually takes 2 to 6 weeks. A designer who cannot describe their process has not run enough projects to have one.</p>\n<h3>8. Who owns the website, the domain, and the accounts?</h3>\n<p>The only safe answer: you do. The domain registered in your name, hosting or site account under your ownership, analytics in your account, and the designer added as a collaborator. Sites held hostage by a designer who \"owns everything\" are a real and common problem.</p>\n<h3>9. Will I be able to update the site myself, and will you teach me?</h3>\n<p>You should be able to change text, photos, prices, and hours without paying for every edit. A short training session at handover is standard from any professional.</p>\n<h3>10. What happens after launch?</h3>\n<p>Websites need updates, backups, and security attention. Ask what support or maintenance they offer, what it costs, and how you request changes in six months. \"Call me and we will figure it out\" means you are on your own.</p>\n<h3>11. How will we measure whether the site is working?</h3>\n<p>Good designers talk about enquiries, calls, bookings, or sales, not just a fresh look. If success has no number attached, nobody will know whether the project worked.</p>\n<h3>12. What do you need from me to stay on schedule?</h3>\n<p>Every project needs things from the owner: logo files, photos, text decisions, feedback within a few days. A designer who names these upfront runs projects that finish on time.</p>\n<h2>Red Flags That Should End the Conversation</h2>\n<ul>\n<li><strong>Full payment demanded upfront.</strong> A deposit of 30 to 50 percent is normal. Everything before any work is not.</li>\n<li><strong>No written scope or contract.</strong> Verbal deals are how $2,000 quotes become $6,000 invoices.</li>\n<li><strong>They will not show live work.</strong> Or the \"portfolio\" is all templates anyone can buy.</li>\n<li><strong>Instant ranking promises.</strong> Anyone who guarantees the number one spot on Google is selling you fiction.</li>\n<li><strong>Vague answers about ownership.</strong> Hesitation here is the answer.</li>\n</ul>\n<h2>Freelancer or Agency: Which Fits You?</h2>\n<p>A skilled freelancer is a good fit for a straightforward site, a tight budget, and one decision maker. An agency fits when you need design, development, copy, and SEO handled by one accountable team, or when the site carries real revenue. Either can be excellent. The questions above work for both. What you are really buying is a process and a person who will still answer the phone after launch.</p>\n<p>For a sense of what each route costs, our guide on <a href=\"https://www.dezignloop.com/blog/how-much-does-a-website-cost-small-business-2026\">how much a small business website costs in 2026</a> breaks down the real numbers.</p>\n<h2>The Bottom Line</h2>\n<p>The right designer has live work you like, a written scope, clear ownership terms, SEO built in from the start, and a plan for after launch. Ask the 12 questions, listen for plain answers, and trust specifics over polish.</p>\n<p>That is exactly how we structure every project in our <a href=\"https://www.dezignloop.com/services/web-design\">web design service</a>: your domain, your accounts, a written scope, and support after launch.</p>\n<hr />\n<p><strong>Want a second opinion before you hire anyone?</strong> <a href=\"https://www.dezignloop.com/\">Book a free strategy session with DezignLoop</a>. We will review your current site or your shortlist and tell you plainly what looks fair and what does not, whether you hire us or not. Call us at <strong>+1 (843) 284 3078</strong> or email <strong>support@dezignloop.com</strong>.</p>";

const bodyHtml: string = articleHtml.replace(/^<h1>[\s\S]*?<\/h1>\s*/, "");

export default function BlogArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <section className="pt-40 pb-28 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Guides
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
              How to Choose a Web Designer: 12 Questions to Ask Before You Hire
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              How to choose a web designer for your small business: the 12 questions to ask, what good answers sound like, red flags, and freelancer vs agency explained.
            </p>
          </div>

          {/* Article body */}
          <div className="max-w-3xl mx-auto">
            <div
              className="blog-article [&>h2]:text-3xl [&>h2]:font-black [&>h2]:tracking-tighter [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-slate-500 [&>p]:dark:text-slate-400 [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6 [&_a]:text-primary [&_a]:font-bold [&_a]:hover:underline [&_strong]:text-slate-900 [&_strong]:dark:text-white [&_em]:text-slate-500 [&_em]:dark:text-slate-400 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2 [&_li]:text-slate-500 [&_li]:dark:text-slate-400 [&_li]:font-medium [&_li]:leading-relaxed [&>hr]:my-8 [&>hr]:border-slate-200 [&>hr]:dark:border-slate-800 [&_th]:text-xs [&_th]:font-black [&_th]:uppercase [&_th]:tracking-widest [&_th]:text-slate-400 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_td]:px-4 [&_td]:py-3 [&_td]:text-slate-500 [&_td]:dark:text-slate-400 [&_td]:font-medium [&_td]:border-t [&_td]:border-slate-100 [&_td]:dark:border-slate-800"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />

            {/* CTA */}
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mt-12">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Free Strategy Session
              </div>
              <div className="text-2xl font-black text-primary mb-4">
                Ready for a website that actually brings in customers?
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                Book a free launch strategy session and we&apos;ll map out exactly
                what your business needs, what it should cost, and how fast it can
                pay for itself. No pressure, no jargon.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-primary transition-colors w-fit"
              >
                Book Your Free Strategy Session <ArrowRight size={20} />
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Prefer to talk?{' '}
                <a href="tel:+18432843078" className="text-primary font-semibold">
                  +1 (843) 284 3078
                </a>{' '}
                &middot;{' '}
                <a href="mailto:support@dezignloop.com" className="text-primary font-semibold">
                  support@dezignloop.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
