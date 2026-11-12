// app/services/ebook-services/page.tsx
import type { Metadata } from 'next';
import EbookServicesClient from './EbookServicesClient';

export const metadata: Metadata = {
  title: 'eBook Formatting Services for Authors | DezignLoop',
  description:
    'Professional ebook formatting services, cover design, and publishing support for authors, coaches, and small businesses. Kindle, EPUB, and PDF — your manuscript turned into a polished book ready to sell.',
  alternates: {
    canonical: 'https://www.dezignloop.com/services/ebook-services',
  },
  openGraph: {
    title: 'eBook Formatting Services – DezignLoop',
    description: 'Professional ebook formatting services, cover design, and publishing support for authors ready to sell their book.',
    url: 'https://www.dezignloop.com/services/ebook-services',
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for eBook Services Page
// ────────────────────────────────────────────────
const ebookServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/services/ebook-services/#webpage",
      "url": "https://www.dezignloop.com/services/ebook-services",
      "name": "eBook Formatting Services for Authors – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "Professional ebook formatting services, cover design, and publishing support for authors, coaches, and small businesses. Kindle, EPUB, and PDF — your manuscript turned into a polished book ready to sell.",
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
            "name": "eBook Services",
            "item": "https://www.dezignloop.com/services/ebook-services"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "eBook Formatting Services",
      "provider": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional eBook formatting, cover design, and publishing support for authors, coaches, and small businesses."
    }
  ]
};


export default function EbookServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ebookServicesSchema) }}
      />
      <EbookServicesClient />
    </>
  );
}
