// app/terms/page.tsx
import type { Metadata } from 'next';
import TermsOfServicePage from '@/components/Terms-conditions';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'DezignLoop terms of service: service agreements, payment terms, project timelines, revisions policy, and client responsibilities for web design, branding, and digital marketing services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dezignloop.com/terms-of-services',
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
      "@id": "https://www.dezignloop.com/terms-of-services/#webpage",
      "url": "https://www.dezignloop.com/terms-of-services",
      "name": "Terms of Service – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "DezignLoop terms of service outlining service agreements, payment terms, project timelines, revisions policy, and client responsibilities.",
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
            "name": "Terms of Service",
            "item": "https://www.dezignloop.com/terms-of-services"
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