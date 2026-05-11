import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact DezignLoop – Free Consultation for Small Businesses',
  description:
    'Ready to grow? Contact our team for a free consultation on web design, branding, SEO, apps or marketing. Email: support@dezignloop.com | Call: +1 (843) 410-9324. Fast response.',
  alternates: {
    canonical: 'https://dezignloop.com/contact',
  },
  openGraph: {
    title: 'Contact Us – DezignLoop',
    description: 'Free consultation for small business digital growth. Reach out today!',
    url: 'https://dezignloop.com/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'DezignLoop Contact - Lets Talk Business',
      },
    ],
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Contact Page
// ────────────────────────────────────────────────
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/contact/#webpage",
      "url": "https://dezignloop.com/contact",
      "name": "Contact DezignLoop – Free Consultation for Small Businesses",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Ready to grow? Contact our team for a free consultation on web design, branding, SEO, apps or marketing. Fast response.",
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
            "name": "Contact",
            "item": "https://dezignloop.com/contact"
          }
        ]
      }
    },
    {
      "@type": "ContactPage",
      "name": "Contact DezignLoop",
      "url": "https://dezignloop.com/contact",
      "mainEntity": {
        "@id": "https://dezignloop.com/#organization"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-843-410-9324",
        "contactType": "customer service",
        "email": "support@dezignloop.com",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}