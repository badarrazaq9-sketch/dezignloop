import type { Metadata } from 'next';
import BrandingClient from './BrandingClient';

export const metadata: Metadata = {
  title: 'Branding & Logo Design for Small Businesses | DezignLoop',
  description:
    'Professional brand identity, logos, color palettes and visual strategy that help small businesses stand out, build trust and communicate clearly. Fast & affordable.',
  alternates: {
    canonical: 'https://dezignloop.com/services/branding',
  },
  openGraph: {
    title: 'Branding & Logo Design – DezignLoop',
    description: 'Professional brand identity and logo design services for small businesses.',
    url: 'https://dezignloop.com/services/branding',
    images: [
      {
        url: '/og-branding.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Branding & Logo Design Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Branding Service Page
// ────────────────────────────────────────────────
const brandingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/branding/#webpage",
      "url": "https://dezignloop.com/services/branding",
      "name": "Branding & Logo Design for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Professional brand identity, logos, color palettes and visual strategy that help small businesses stand out, build trust and communicate clearly.",
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
            "name": "Branding & Logo Design",
            "item": "https://dezignloop.com/services/branding"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Branding & Logo Design",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional brand identity, logos, color palettes and visual strategy that help small businesses stand out, build trust and communicate clearly. Fast & affordable.",
      "offers": {
        "@type": "Offer",
        "price": "349.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function BrandingPage() {
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingSchema) }}
      />
  return <BrandingClient />;
}