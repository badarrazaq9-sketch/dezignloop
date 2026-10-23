import type { Metadata } from 'next';
import CustomDevelopmentClient from './CustomDevelopmentClient';

export const metadata: Metadata = {
  title: 'Custom Web & Software Development',
  description:
    'Tailored web applications, SaaS platforms and complex systems built around your unique business goals, processes and requirements. Scalable & secure.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services/custom-development',
  },
  openGraph: {
    title: 'Custom Web & Software Development – DezignLoop',
    description: 'Tailored web applications, SaaS platforms and complex systems built for your business.',
    url: 'https://www.dezignloop.com/services/custom-development',
    images: [
      {
        url: '/og-custom-development.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Custom Web & Software Development',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Custom Development Page
// ────────────────────────────────────────────────
const customDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/services/custom-development/#webpage",
      "url": "https://www.dezignloop.com/services/custom-development",
      "name": "Custom Web & Software Development – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Tailored web applications, SaaS platforms and complex systems built around your unique business goals, processes and requirements. Scalable & secure.",
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
            "name": "Custom Web & Software Development",
            "item": "https://www.dezignloop.com/services/custom-development"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Custom Web & Software Development",
      "provider": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Tailored web applications, SaaS platforms and complex systems built around your unique business goals, processes and requirements. Scalable & secure.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};


export default function CustomDevelopmentPage() {

  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customDevSchema) }}
      />
  return <CustomDevelopmentClient />;
}