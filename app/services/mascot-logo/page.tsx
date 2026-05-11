import type { Metadata } from 'next';
import MascotLogoPage from "./macot-logo-design";

export const metadata: Metadata = {
  title: 'Mascot Logo Design Services – DezignLoop',
  description:
    'Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life. USA-based design team.',
  alternates: {
    canonical: 'https://dezignloop.com/mascot-logo-design',
  },
  openGraph: {
    title: 'Mascot Logo Design – DezignLoop',
    description: 'Custom mascot logos that make your brand unforgettable. Professional character design for businesses and teams.',
    url: 'https://dezignloop.com/mascot-logo-design',
    images: [
      {
        url: '/og-mascot-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Mascot Logo Design Services',
      },
    ],
  },
};

const mascotLogoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/mascot-logo-design/#webpage",
      "url": "https://dezignloop.com/mascot-logo-design",
      "name": "Mascot Logo Design Services – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life.",
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
            "name": "Mascot Logo Design",
            "item": "https://dezignloop.com/mascot-logo-design"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Mascot Logo Design",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function LogoDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mascotLogoSchema) }}
      />
      <MascotLogoPage />
    </>
  );
}