import type { Metadata } from 'next';
import AboutUsPage from './aboutUS';

export const metadata: Metadata = {
  title: 'About Us – DezignLoop | Web Design & Digital Growth Agency',
  description:
    'Learn about DezignLoop, a USA-based premium web design agency helping small businesses grow with websites, branding, SEO, CRM, ecommerce, and digital marketing since 2019.',
  alternates: {
    canonical: 'https://dezignloop.com/about-us',
  },
  openGraph: {
    title: 'About DezignLoop – Your Digital Growth Partner',
    description: 'Premium web design agency crafting digital excellence since 2019. Helping small businesses dominate and grow online.',
    url: 'https://dezignloop.com/about-us',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Team – Web Design Agency',
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/about-us/#webpage",
      "url": "https://dezignloop.com/about-us",
      "name": "About Us – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Learn about DezignLoop, a premium web design agency helping businesses grow with websites, branding, CRM, ecommerce, and digital marketing.",
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
            "name": "About Us",
            "item": "https://dezignloop.com/about-us"
          }
        ]
      }
    }
  ]
};

export default function AboutUsPageWrapper() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutUsPage />
    </>
  );
}