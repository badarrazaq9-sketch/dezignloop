// app/services/page.tsx
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services – Web Design, SEO, Apps & Marketing | DezignLoop',
  description:
    'Full range of digital services for small businesses: professional web design, branding, local SEO, mobile app development, and growth marketing. Get started today.',
  alternates: {
    canonical: 'https://dezignloop.com/services',
  },
  openGraph: {
    title: 'Our Services – DezignLoop',
    description: 'Web design, SEO, apps, branding, and marketing services for small businesses.',
    url: 'https://dezignloop.com/services',
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
      "@id": "https://dezignloop.com/services/#webpage",
      "url": "https://dezignloop.com/services",
      "name": "Our Services – Web Design, SEO, Apps & Marketing – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Full range of digital services for small businesses: professional web design, branding, local SEO, mobile app development, and growth marketing.",
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
            "url": "https://dezignloop.com/services/web-design",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/ecommerce-web-development",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/logo-design",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/lead-generation",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/search-engine-optimization-seo",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/social-media-marketing-smm",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/branding",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/mobile-app-development",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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
            "url": "https://dezignloop.com/services/custom-development",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
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