import type { Metadata } from 'next';
import EcommerceClient from './EcommerceClient';


export const metadata: Metadata = {
  title: 'E-commerce Development for Small Businesses',
  description:
    'Custom online stores that scale and sell. Seamless shopping experience, secure payments, mobile-optimized. Built for retailers and online shops of all sizes.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services/ecommerce-web-development',
  },
  openGraph: {
    title: 'E-commerce Development – DezignLoop',
    description: 'Custom online stores with seamless shopping, secure payments, and mobile optimization.',
    url: 'https://www.dezignloop.com/services/ecommerce-web-development',
    images: [
      {
        url: '/og-ecommerce.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop E-commerce Development Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for E-commerce Development Page
// ────────────────────────────────────────────────
const ecommerceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/services/ecommerce-web-development/#webpage",
      "url": "https://www.dezignloop.com/services/ecommerce-web-development",
      "name": "E-commerce Development for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Custom online stores that scale and sell. Seamless shopping experience, secure payments, mobile-optimized. Built for retailers and online shops of all sizes.",
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
            "name": "E-commerce Development",
            "item": "https://www.dezignloop.com/services/ecommerce-web-development"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "E-commerce Development",
      "provider": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom online stores that scale and sell. Seamless shopping experience, secure payments, mobile-optimized. Built for retailers and online shops of all sizes.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function EcommercePage() {

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSchema) }}
      />
  return <EcommerceClient />;
}