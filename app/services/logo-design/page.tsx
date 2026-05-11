// app/services/logo-design/page.tsx
import type { Metadata } from 'next';
import LogoDesignClient from './LogoDesignClient';

export const metadata: Metadata = {
  title: 'Logo Design Services for Small Businesses | DezignLoop',
  description:
    'Professional logo design and brand identity packages for small businesses and startups. Fast turnaround, unlimited revisions, full ownership. Packages start from $125. Get your custom logo today.',
  alternates: {
    canonical: 'https://dezignloop.com/services/logo-design',
  },
  openGraph: {
    title: 'Logo Design Services – DezignLoop',
    description: 'Professional logo design and brand identity packages starting from $125.',
    url: 'https://dezignloop.com/services/logo-design',
    images: [
      {
        url: '/og-logo-design.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Logo Design Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Logo Design Page
// ────────────────────────────────────────────────
const logoDesignSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/logo-design/#webpage",
      "url": "https://dezignloop.com/services/logo-design",
      "name": "Logo Design Services for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Professional logo design and brand identity packages for small businesses and startups. Fast turnaround, unlimited revisions, full ownership. Packages start from $125.",
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
            "name": "Logo Design",
            "item": "https://dezignloop.com/services/logo-design"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Logo Design",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional logo design and brand identity packages for small businesses and startups. Fast turnaround, unlimited revisions, full ownership.",
      "offers": {
        "@type": "Offer",
        "price": "125.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function LogoDesignPage() {
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logoDesignSchema) }}
      />
  return <LogoDesignClient />;
}