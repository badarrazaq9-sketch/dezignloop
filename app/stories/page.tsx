import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoriesPage from "@/components/StoriesPage";

export const metadata: Metadata = {
  title: 'Success Stories & Case Studies – DezignLoop',
  description:
    'See how DezignLoop helped small businesses grow with custom websites, branding, SEO, and digital marketing. Real results, real success stories.',
  alternates: {
    canonical: 'https://dezignloop.com/stories',
  },
  openGraph: {
    title: 'Client Success Stories – DezignLoop',
    description: 'Real results for small businesses: websites, branding, SEO, and marketing that drive growth.',
    url: 'https://dezignloop.com/stories',
    images: [
      {
        url: '/og-stories.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Client Success Stories',
      },
    ],
  },
};

const storiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/stories/#webpage",
      "url": "https://dezignloop.com/stories",
      "name": "Success Stories & Case Studies – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "See how DezignLoop helped small businesses grow with custom websites, branding, SEO, and digital marketing.",
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
            "name": "Success Stories",
            "item": "https://dezignloop.com/stories"
          }
        ]
      }
    }
  ]
};

export default function Stories() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storiesSchema) }}
      />
      <Navbar />
      <StoriesPage />
      <Footer />
    </>
  );
}