import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing – Affordable Packages for Small Businesses',
  description:
    'Transparent, no-hidden-fee pricing for web design, branding, SEO, mobile apps, social media marketing & more. Packages starting from $349 – built for small business budgets and real growth.',
  alternates: {
    canonical: 'https://www.dezignloop.com/pricing',
  },
  openGraph: {
    title: 'Pricing – DezignLoop Packages',
    description: 'Affordable digital services for small businesses. Clear pricing, no surprises.',
    url: 'https://www.dezignloop.com/pricing',
    images: [
      {
        url: '/og-pricing.jpg', // Add this 1200×630 image to /public/
        width: 1200,
        height: 630,
        alt: 'DezignLoop Pricing – Affordable Small Business Packages',
      },
    ],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/pricing/#webpage",
      "url": "https://www.dezignloop.com/pricing",
      "name": "Pricing – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Transparent pricing for web design, branding, SEO, mobile apps, and social media marketing. Packages starting from $349 for small businesses.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dezignloop.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://www.dezignloop.com/pricing"
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Offer",
          "position": 1,
          "name": "Web Design & Development",
          "description": "High-converting websites built for small businesses",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 2,
          "name": "Brand Identity & Logo Design",
          "description": "Professional logo and complete brand identity package",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 3,
          "name": "Local SEO & Marketing",
          "description": "Results-driven SEO to boost local visibility",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 4,
          "name": "Mobile App Development",
          "description": "Custom iOS and Android applications",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 5,
          "name": "Social Media Marketing",
          "description": "Strategic social media management and growth",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 6,
          "name": "E-commerce Development",
          "description": "Full-scale ecommerce with Shopify and WooCommerce",
          "price": "349.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 7,
          "name": "eBook Services",
          "description": "Professional ebook formatting, cover design, and publishing support for authors",
          "price": "499.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 8,
          "name": "Book Writing",
          "description": "Ghostwriting for authors, from 50-page books to full manuscripts",
          "price": "799.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        },
        {
          "@type": "Offer",
          "position": 9,
          "name": "Book Marketing",
          "description": "Full book marketing: social, SEO, Amazon optimization, and media features",
          "price": "8000.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "offeredBy": {
            "@id": "https://www.dezignloop.com/#organization"
          }
        }
      ]
    }
  ]
};


export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingClient />
    </>
  );
}