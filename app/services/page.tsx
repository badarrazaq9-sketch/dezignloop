// app/services/page.tsx
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Web Design, Apps & SEO for Small Businesses',
  description:
    'Web design, branding, e-commerce, apps, SEO and marketing for small businesses — one expert team, transparent pricing, real results. Start today.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services',
  },
  openGraph: {
    title: 'Our Services – DezignLoop',
    description: 'Web design, SEO, apps, branding, and marketing services for small businesses.',
    url: 'https://www.dezignloop.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Digital Services for Small Businesses',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Services Listing Page
// ────────────────────────────────────────────────
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/services/#webpage",
      "url": "https://www.dezignloop.com/services",
      "name": "Web Design, Apps & SEO for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Full range of digital services for small businesses: professional web design, branding, local SEO, mobile app development, and growth marketing.",
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
            "description": "Professional websites that look great, load fast, and turn visitors into customers.",
            "url": "https://www.dezignloop.com/services/web-design",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Custom e-commerce websites that scale and provide seamless shopping experiences.",
            "url": "https://www.dezignloop.com/services/ecommerce-web-development",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Logo Design",
            "description": "Professional logo and brand identity that builds trust and makes your business stand out.",
            "url": "https://www.dezignloop.com/services/logo-design",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Lead Generation",
            "description": "Targeted campaigns that generate high-quality leads ready to convert.",
            "url": "https://www.dezignloop.com/services/lead-generation",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "SEO",
            "description": "Proven search engine optimization strategies to improve visibility and drive traffic.",
            "url": "https://www.dezignloop.com/services/search-engine-optimization-seo",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Build your social presence, engage your audience, and generate leads.",
            "url": "https://www.dezignloop.com/services/social-media-marketing-smm",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Service",
            "name": "Branding",
            "description": "Strong branding that makes your business memorable and builds trust.",
            "url": "https://www.dezignloop.com/services/branding",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "Service",
            "name": "App Development",
            "description": "iOS and Android apps designed to drive user engagement and business growth.",
            "url": "https://www.dezignloop.com/services/mobile-app-development",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "Service",
            "name": "Custom Development",
            "description": "Web applications and software built around your unique business requirements.",
            "url": "https://www.dezignloop.com/services/custom-development",
            "provider": {
              "@id": "https://www.dezignloop.com/#organization"
            }
          }
        }
      ]
    }
  ]
};
export default function ServicesPage() {
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
  return <ServicesClient />;
}