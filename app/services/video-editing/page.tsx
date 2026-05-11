import type { Metadata } from 'next';
import VideoEditingClient from './VideoEditingClient';


export const metadata: Metadata = {
  title: 'Video Editing Services for Small Businesses | DezignLoop',
  description:
    'Professional editing for ads, Reels, YouTube & product videos. Fast-paced, engaging cuts that boost views, retention and conversions. Quick turnaround.',
  alternates: {
    canonical: 'https://dezignloop.com/services/video-editing',
  },
  openGraph: {
    title: 'Video Editing Services – DezignLoop',
    description: 'Professional video editing for ads, Reels, YouTube & product videos with quick turnaround.',
    url: 'https://dezignloop.com/services/video-editing',
    images: [
      {
        url: '/og-video-editing.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Video Editing Services',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Video Editing Page
// ────────────────────────────────────────────────
const videoEditingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/services/video-editing/#webpage",
      "url": "https://dezignloop.com/services/video-editing",
      "name": "Video Editing Services for Small Businesses – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Professional editing for ads, Reels, YouTube & product videos. Fast-paced, engaging cuts that boost views, retention and conversions. Quick turnaround.",
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
            "name": "Video Editing",
            "item": "https://dezignloop.com/services/video-editing"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Video Editing",
      "provider": {
        "@id": "https://dezignloop.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Professional editing for ads, Reels, YouTube & product videos. Fast-paced, engaging cuts that boost views, retention and conversions. Quick turnaround.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function VideoEditingPage() {

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoEditingSchema) }}
      />
  return <VideoEditingClient />;
}