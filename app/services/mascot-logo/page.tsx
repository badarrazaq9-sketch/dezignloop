import type { Metadata } from 'next';
import MascotLogoPage from "./macot-logo-design";

export const metadata: Metadata = {
  title: 'Mascot Logo Design Services',
  description:
    'Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life. USA-based design team.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services/mascot-logo',
  },
  openGraph: {
    title: 'Mascot Logo Design – DezignLoop',
    description: 'Custom mascot logos that make your brand unforgettable. Professional character design for businesses and teams.',
    url: 'https://www.dezignloop.com/services/mascot-logo',
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
      "@id": "https://www.dezignloop.com/services/mascot-logo/#webpage",
      "url": "https://www.dezignloop.com/services/mascot-logo",
      "name": "Mascot Logo Design Services – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life.",
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
            "name": "Mascot Logo Design",
            "item": "https://www.dezignloop.com/services/mascot-logo"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Mascot Logo Design",
      "provider": {
        "@id": "https://www.dezignloop.com/#organization"
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