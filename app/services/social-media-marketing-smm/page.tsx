import type { Metadata } from 'next';
import SocialMediaClient from './SocialMediaClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing for Small Businesses | DezignLoop',
  description:
    'Grow your Instagram, Facebook & TikTok presence. Content creation, targeted ads, engagement & lead generation tailored for startups and local brands.',
  alternates: {
    canonical: 'https://dezignloop.com/services/social-media-marketing-smm',
  },
  openGraph: {
    title: 'Social Media Marketing – DezignLoop',
    description: 'Grow your Instagram, Facebook & TikTok presence with content creation, targeted ads & engagement.',
    url: 'https://dezignloop.com/services/social-media-marketing-smm',
    images: [
      {
        url: '/og-social-media.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Social Media Marketing Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Social Media Marketing Page
// ────────────────────────────────────────────────
const socialMediaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/social-media-marketing-smm/#webpage",
      "url": "https://dezignloop.com/services/social-media-marketing-smm",
      "name": "Social Media Marketing for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Grow your Instagram, Facebook & TikTok presence. Content creation, targeted ads, engagement & lead generation tailored for startups and local brands.",
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
            "name": "Social Media Marketing",
            "item": "https://dezignloop.com/services/social-media-marketing-smm"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Social Media Marketing",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Grow your Instagram, Facebook & TikTok presence. Content creation, targeted ads, engagement & lead generation tailored for startups and local brands.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function SocialMediaPage() {

  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaSchema) }}
      />
  return <SocialMediaClient />;
}