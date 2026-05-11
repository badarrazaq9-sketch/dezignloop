// app/terms/page.tsx
import type { Metadata } from 'next';
import TermsOfServicePage from '@/components/Terms-conditions';

export const metadata: Metadata = {
  title: 'Terms of Service – DezignLoop',
  description:
    'DezignLoop terms of service: service agreements, payment terms, project timelines, revisions policy, and client responsibilities for web design, branding, and digital marketing services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dezignloop.com/terms',
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Terms of Service Page
// ────────────────────────────────────────────────
const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dezignloop.com/terms/#webpage",
      "url": "https://dezignloop.com/terms",
      "name": "Terms of Service – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "DezignLoop terms of service outlining service agreements, payment terms, project timelines, revisions policy, and client responsibilities.",
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
            "name": "Terms of Service",
            "item": "https://dezignloop.com/terms"
          }
        ]
      }
    }
  ]
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsOfServicePage type="privacy" />
    </>
  );
}