import type { Metadata } from 'next';
import SeoClient from './SeoClient';


export const metadata: Metadata = {
  title: 'Local SEO Services for Small Businesses',
  description:
    'Rank higher on Google and attract more local customers. Google Business optimization, citations, reviews & keyword strategy. Visible results in weeks.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services/search-engine-optimization-seo',
  },
  openGraph: {
    title: 'Local SEO Services – DezignLoop',
    description: 'Rank higher on Google and attract more local customers with proven SEO strategies.',
    url: 'https://www.dezignloop.com/services/search-engine-optimization-seo',
    images: [
      {
        url: '/og-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Local SEO Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for SEO Services Page
// ────────────────────────────────────────────────
const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/services/search-engine-optimization-seo/#webpage",
      "url": "https://www.dezignloop.com/services/search-engine-optimization-seo",
      "name": "Local SEO Services for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Rank higher on Google and attract more local customers. Google Business optimization, citations, reviews & keyword strategy. Visible results in weeks.",
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
            "name": "Services",
            "item": "https://www.dezignloop.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Local SEO",
            "item": "https://www.dezignloop.com/services/search-engine-optimization-seo"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Local SEO & Search Engine Optimization",
      "provider": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Rank higher on Google and attract more local customers. Google Business optimization, citations, reviews & keyword strategy. Visible results in weeks.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function SeoPage() {

     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
  return <SeoClient />;
}