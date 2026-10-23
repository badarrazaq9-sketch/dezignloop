// app/privacy/page.tsx
import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy – DezignLoop',
  description:
    'DezignLoop privacy policy: how we collect, use, and protect your personal information when you use our web design, branding, and digital marketing services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dezignloop.com/privacy-policy',
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Privacy Policy Page
// ────────────────────────────────────────────────
const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/privacy-policy/#webpage",
      "url": "https://www.dezignloop.com/privacy-policy",
      "name": "Privacy Policy – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "DezignLoop privacy policy outlining how we collect, use, store, and protect your personal information and data.",
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
            "name": "Privacy Policy",
            "item": "https://www.dezignloop.com/privacy-policy"
          }
        ]
      }
    }
  ]
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <LegalPage type="privacy" />
    </>
  );
}