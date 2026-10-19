import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 Signs Your Small Business Website Is Losing Customers',
  description: 'Small business website mistakes are silently costing you customers. The 10 warning signs — slow speed, no mobile design, weak CTAs — and how to fix each.',
  keywords: ['small business website mistakes'],
  alternates: {
    canonical: 'https://dezignloop.com/blog/signs-website-losing-customers',
  },
  openGraph: {
    title: '10 Signs Your Small Business Website Is Losing Customers',
    description: 'Small business website mistakes are silently costing you customers. The 10 warning signs — slow speed, no mobile design, weak CTAs — and how to fix each.',
    url: 'https://dezignloop.com/blog/signs-website-losing-customers',
    siteName: 'DezignLoop',
    type: 'article',
    publishedTime: '2026-10-19T12:00:00-04:00',
    section: 'Guides',
    tags: [
    'website mistakes',
    'conversion optimization',
    'small business'
    ],
    images: [
      {
        url: 'https://dezignloop.com/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'DezignLoop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Signs Your Small Business Website Is Losing Customers',
    description: 'Small business website mistakes are silently costing you customers. The 10 warning signs — slow speed, no mobile design, weak CTAs — and how to fix each.',
    images: ['https://dezignloop.com/icon-512x512.png'],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "10 Signs Your Small Business Website Is Losing Customers",
  "description": "Small business website mistakes are silently costing you customers. The 10 warning signs \u2014 slow speed, no mobile design, weak CTAs \u2014 and how to fix each.",
  "url": "https://dezignloop.com/blog/signs-website-losing-customers",
  "image": "https://dezignloop.com/icon-512x512.png",
  "articleSection": "Guides",
  "datePublished": "2026-10-19",
  "dateModified": "2026-10-19",
  "author": {
    "@type": "Organization",
    "name": "DezignLoop",
    "url": "https://dezignloop.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DezignLoop",
    "url": "https://dezignloop.com/"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dezignloop.com/blog/signs-website-losing-customers"
  }
};

const articleHtml: string = "<h1>10 Signs Your Small Business Website Is Losing You Customers</h1>\n<p>Your website might be the reason your phone isn't ringing. Studies consistently show that the vast majority of consumers judge a business's credibility by its website \u2014 and most will leave a site that frustrates them within seconds.</p>\n<p>The painful part? Most owners have no idea it's happening. There's no alarm bell when a visitor bounces. They just quietly go to your competitor.</p>\n<p>Here are the 10 warning signs, and exactly how to fix each one. We've ordered them roughly by how much revenue they cost \u2014 the first three alone account for the majority of lost customers on typical small business sites.</p>\n<h2>1. It Takes More Than 3 Seconds to Load</h2>\n<p><strong>The problem:</strong> Over half of mobile visitors abandon a page that takes longer than 3 seconds to load. Every extra second of load time measurably drops conversions. If your homepage takes 6\u20138 seconds (common for older sites), you're losing customers before they even see your offer.</p>\n<p><strong>The fix:</strong> Compress your images (most sites have massively oversized photos), enable browser caching, and switch to faster hosting if you're on a bargain $3/month plan. Run your site through Google's PageSpeed Insights \u2014 it's free and tells you exactly what's slow.</p>\n<h2>2. It Looks Broken on Phones</h2>\n<p><strong>The problem:</strong> More than 60% of web traffic in the US now comes from mobile devices. If your site requires pinching, zooming, or horizontal scrolling on a phone, visitors leave. Google also ranks mobile-friendly sites higher \u2014 a non-responsive site is invisible in mobile search.</p>\n<p><strong>The fix:</strong> This isn't a tweak; it's a rebuild priority. Your site must be fully responsive \u2014 adapting cleanly to every screen size. Test it yourself: open your site on your phone right now. If you wince, your customers are wincing too.</p>\n<h2>3. There's No Clear Call to Action</h2>\n<p><strong>The problem:</strong> Visitors land on your homepage and have no idea what to do next. No prominent \"Get a Quote\" button. No phone number in the header. No booking form. They browse for 30 seconds, feel confused, and leave.</p>\n<p><strong>The fix:</strong> Every page needs ONE obvious next step. Put your phone number and primary CTA button in the header on every page \u2014 visible without scrolling. \"Call Now,\" \"Get a Free Quote,\" \"Book Online\" \u2014 pick the action that makes you money and make it impossible to miss.</p>\n<h2>4. The Design Looks Like It's From 2015</h2>\n<p><strong>The problem:</strong> Outdated design doesn't just look bad \u2014 it actively destroys trust. Visitors subconsciously equate an old-looking website with an out-of-touch business. If your competitor's site looks modern and yours doesn't, guess who gets the call.</p>\n<p><strong>The fix:</strong> You don't need a full rebrand. Often a design refresh \u2014 modern fonts, clean layouts, quality photography, consistent colors \u2014 transforms perception. As a rule of thumb, budget for a meaningful design update every 3\u20134 years.</p>\n<h2>5. No Reviews, Testimonials, or Trust Signals</h2>\n<p><strong>The problem:</strong> New visitors don't know you. Without proof that real customers trust you, they have no reason to choose you over the next listing. A site with zero reviews, no testimonials, no certifications, and no \"as seen in\" badges feels risky.</p>\n<p><strong>The fix:</strong> Add Google reviews to your homepage (even 10\u201320 makes a difference), include 3\u20135 detailed testimonials with names and photos, and display any licenses, certifications, awards, or guarantees prominently. Trust signals are the cheapest conversion boost available.</p>\n<h2>6. Your Contact Info Is Hard to Find</h2>\n<p><strong>The problem:</strong> Your phone number is buried on a contact page. Your address is missing. Your hours aren't listed. Every extra click between \"I want to hire them\" and actually reaching you loses customers \u2014 especially on mobile, where people want to tap-to-call.</p>\n<p><strong>The fix:</strong> Phone number in the header of every page. Click-to-call on mobile. Address and hours in the footer of every page. A simple contact form that takes 30 seconds to fill out \u2014 not 12 required fields. Remove every ounce of friction.</p>\n<h2>7. The Content Is All About You, Not the Customer</h2>\n<p><strong>The problem:</strong> \"Welcome to our website. We've been serving the community since 1998. Our team is dedicated to excellence.\" Nobody cares. Visitors arrive with one question: <em>can you solve my problem?</em> If your homepage doesn't answer that in the first 5 seconds, they're gone.</p>\n<p><strong>The fix:</strong> Rewrite your homepage headline to state the outcome you deliver: \"Emergency Plumbers in Dallas \u2014 At Your Door in 60 Minutes.\" Lead with benefits, not history. Move the \"about us\" story further down the page where it belongs.</p>\n<h2>8. It Doesn't Show Up on Google</h2>\n<p><strong>The problem:</strong> Search \"your service + your city\" on Google. If you're not on page one, you barely exist \u2014 the overwhelming majority of clicks go to the top few results. No Google Business Profile, no local keywords, no location pages means competitors eat your lunch daily.</p>\n<p><strong>The fix:</strong> Claim and optimize your Google Business Profile (free, takes 30 minutes). Add your city and service keywords naturally to page titles and headings. Get listed in local directories. Publish helpful content regularly. Local SEO is the highest-ROI marketing most small businesses ignore.</p>\n<h2>9. There's No Way to Capture Visitors Who Aren't Ready to Buy</h2>\n<p><strong>The problem:</strong> Only a small fraction of visitors are ready to buy today. The rest are researching \u2014 and if you don't capture their email, they research your competitor tomorrow. No newsletter signup, no free guide, no quote form means every \"not yet\" visitor is lost forever.</p>\n<p><strong>The fix:</strong> Add a simple lead magnet: a free estimate form, a downloadable checklist, a \"10% off first service\" offer in exchange for an email. Then follow up with a short email sequence. This one change can double the value of your existing traffic without spending a dollar more on ads.</p>\n<h2>10. You Haven't Updated It in Over a Year</h2>\n<p><strong>The problem:</strong> A blog last updated in 2022. A \"Holiday Hours 2021\" banner. Team photos of people who left three years ago. Stale content tells visitors (and Google) that the business might not be active \u2014 or doesn't care.</p>\n<p><strong>The fix:</strong> Audit your site quarterly. Update hours, team, services, and pricing. Publish something new at least monthly \u2014 a blog post, a project photo, a customer story. Fresh content signals a living business to both humans and search engines.</p>\n<h2>How Many of These Did You Recognize?</h2>\n<p>Be honest \u2014 most small business websites have at least 3\u20134 of these problems. The good news: every single one is fixable, and fixing even two or three typically produces a noticeable jump in calls and inquiries within weeks.</p>\n<p>Start with the highest-impact trio: <strong>speed, mobile experience, and clear calls to action.</strong> Those three alone resolve the majority of lost-customer problems.</p>\n<p>Then work down the list one item per week. Within two months you'll have a site that converts visitors instead of repelling them \u2014 often without a full rebuild. And if the list feels overwhelming, that's exactly what a professional audit is for: an expert can spot in an hour what you'd take weeks to find.</p>\n<hr />\n<p><strong>Want a professional eye on your site?</strong> <a href=\"https://www.dezignloop.com/\">Book a free launch strategy session with DezignLoop</a> \u2014 we'll audit your website against all 10 of these signs and show you exactly what's costing you customers and how to fix it. Call <strong>+1 (843) 284 3078</strong> or email <strong>support@dezignloop.com</strong>.</p>";

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
              10 Signs Your Small Business Website Is Losing Customers
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Small business website mistakes are silently costing you customers. The 10 warning signs — slow speed, no mobile design, weak CTAs — and how to fix each.
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
