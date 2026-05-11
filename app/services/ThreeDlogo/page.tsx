import type { Metadata } from 'next';
import ThreeDLogoPage from "./threed-logo";

export const metadata: Metadata = {
  title: '3D Logo Design Services – DezignLoop',
  description:
    'Professional 3D logo design services for small businesses and brands. Stunning three-dimensional logos that stand out on digital platforms, packaging, and marketing materials. USA-based design team.',
  alternates: {
    canonical: 'https://dezignloop.com/threed-logo',
  },
  openGraph: {
    title: '3D Logo Design – DezignLoop',
    description: 'Stunning 3D logos that make your brand pop. Professional three-dimensional logo design for digital and print.',
    url: 'https://dezignloop.com/threed-logo',
    images: [
      {
        url: '/og-3d-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop 3D Logo Design Services',
      },
    ],
  },
};

const threeDLogoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/threed-logo/#webpage",
      "url": "https://dezignloop.com/threed-logo",
      "name": "3D Logo Design Services – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Professional 3D logo design services for small businesses and brands. Stunning three-dimensional logos that stand out on digital platforms, packaging, and marketing materials.",
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
            "name": "3D Logo Design",
            "item": "https://dezignloop.com/threed-logo"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "3D Logo Design",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional 3D logo design services for small businesses and brands. Stunning three-dimensional logos that stand out on digital platforms, packaging, and marketing materials.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function ThreeDimensionLogoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(threeDLogoSchema) }}
      />
      <ThreeDLogoPage />
    </>
  );
}