import type { Metadata } from 'next';
import LeadGenerationClient from './LeadGenerationClient';


export const metadata: Metadata = {
  title: 'Lead Generation Services for Small Businesses | DezignLoop',
  description:
    'Targeted campaigns that deliver qualified leads ready to buy. High-quality traffic, conversion-focused strategies for B2B companies and service providers.',
  alternates: {
    canonical: 'https://dezignloop.com/services/lead-generation',
  },
  openGraph: {
    title: 'Lead Generation Services – DezignLoop',
    description: 'Targeted lead generation campaigns with qualified leads ready to buy.',
    url: 'https://dezignloop.com/services/lead-generation',
    images: [
      {
        url: '/og-lead-generation.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Lead Generation Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Lead Generation Page
// ────────────────────────────────────────────────
const leadGenSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/lead-generation/#webpage",
      "url": "https://dezignloop.com/services/lead-generation",
      "name": "Lead Generation Services for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Targeted campaigns that deliver qualified leads ready to buy. High-quality traffic, conversion-focused strategies for B2B companies and service providers.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dezignloop.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://dezignloop.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Lead Generation",
            "item": "https://dezignloop.com/services/lead-generation"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Lead Generation",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Targeted campaigns that deliver qualified leads ready to buy. High-quality traffic, conversion-focused strategies for B2B companies and service providers.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function LeadGenerationPage() {
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadGenSchema) }}
      />

  return <LeadGenerationClient />;
}