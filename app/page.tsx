// app/page.tsx
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'DezignLoop | Web Design & Digital Growth for Small Businesses',
  description:
    'Affordable, high-conversion web design, branding, SEO, mobile apps & marketing built for small businesses in the USA. Fast delivery, real results. Free consultation today!',
  alternates: {
    canonical: 'https://dezignloop.com',
  },
  openGraph: {
    title: 'DezignLoop – Grow Your Small Business Online',
    description:
      'Custom websites, branding, local SEO, apps and marketing that help small businesses attract more customers and increase revenue.',
    url: 'https://dezignloop.com',
    siteName: 'DezignLoop',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop – Small Business Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DezignLoop | Small Business Web & Growth Agency',
    description:
      'Professional digital solutions for small businesses: websites, branding, SEO, apps & marketing. Get online and grow fast.',
    images: ['/og-home.jpg'],
    creator: '@dezignloop',
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/#webpage",  // ← FIXED: was missing / before #
      "url": "https://dezignloop.com",
      "name": "DezignLoop | Web Design & Digital Growth for Small Businesses",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Affordable, high-conversion web design, branding, SEO, mobile apps & marketing built for small businesses in the USA.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dezignloop.com"
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Web Design",
            "url": "https://dezignloop.com/services/web-design",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Branding",
            "url": "https://dezignloop.com/services/branding",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "SEO",
            "url": "https://dezignloop.com/services/search-engine-optimization-seo",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Mobile App Development",
            "url": "https://dezignloop.com/services/mobile-app-development",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "E-commerce Development",
            "url": "https://dezignloop.com/services/ecommerce-web-development",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeClient />
    </>
  );
}