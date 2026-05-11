import type { Metadata } from 'next';
import AppDevelopmentClient from './AppDevelopmentClient';


export const metadata: Metadata = {
  title: 'Mobile App Development for Small Businesses | DezignLoop',
  description:
    'Custom iOS & Android apps for bookings, orders, loyalty programs & customer engagement. User-friendly, scalable, built for small business budgets and growth.',
  alternates: {
    canonical: 'https://dezignloop.com/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development – DezignLoop',
    description: 'Custom iOS & Android apps for bookings, orders, loyalty programs & customer engagement.',
    url: 'https://dezignloop.com/services/mobile-app-development',
    images: [
      {
        url: '/og-mobile-app-development.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Mobile App Development Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Mobile App Development Page
// ────────────────────────────────────────────────
const appDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/mobile-app-development/#webpage",
      "url": "https://dezignloop.com/services/mobile-app-development",
      "name": "Mobile App Development for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Custom iOS & Android apps for bookings, orders, loyalty programs & customer engagement. User-friendly, scalable, built for small business budgets and growth.",
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
            "name": "Mobile App Development",
            "item": "https://dezignloop.com/services/mobile-app-development"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Mobile App Development",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom iOS & Android apps for bookings, orders, loyalty programs & customer engagement. User-friendly, scalable, built for small business budgets and growth.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function AppDevelopmentPage() {

     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appDevSchema) }}
      />
  return <AppDevelopmentClient />;
}