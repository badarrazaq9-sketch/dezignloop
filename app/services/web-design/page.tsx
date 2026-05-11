import type { Metadata } from 'next';
import WebDesignClient from './WebDesignClient';


export const metadata: Metadata = {
  title: 'Web Design Services for Small Businesses | DezignLoop',
  description:
    'Custom, fast-loading, mobile-friendly websites built for small businesses. High-conversion designs, SEO-ready, responsive across all devices. Affordable packages starting from $999.',
  alternates: {
    canonical: 'https://dezignloop.com/services/web-design',
  },
  openGraph: {
    title: 'Web Design Services – DezignLoop',
    description: 'Custom, fast-loading, mobile-friendly websites for small businesses starting from $999.',
    url: 'https://dezignloop.com/services/web-design',
    images: [
      {
        url: '/og-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Web Design Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Web Design Page
// ────────────────────────────────────────────────
const webDesignSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/web-design/#webpage",
      "url": "https://dezignloop.com/services/web-design",
      "name": "Web Design Services for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Custom, fast-loading, mobile-friendly websites built for small businesses. High-conversion designs, SEO-ready, responsive across all devices. Affordable packages starting from $999.",
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
            "name": "Web Design",
            "item": "https://dezignloop.com/services/web-design"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Web Design",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom, fast-loading, mobile-friendly websites built for small businesses. High-conversion designs, SEO-ready, responsive across all devices.",
      "offers": {
        "@type": "Offer",
        "price": "999.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function WebDesignPage() {

  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignSchema) }}
      />
  return <WebDesignClient />;
}