// app/refund/page.tsx
import type { Metadata } from 'next';
import RefundPolicyPage from '@/components/Refund-Policy';

export const metadata: Metadata = {
  title: 'Refund Policy – DezignLoop',
  description:
    'DezignLoop refund policy: clear terms for cancellations, refunds, and satisfaction guarantees on web design, branding, SEO, and digital marketing services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dezignloop.com/refund',
  },
};

// ────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD for Refund Policy Page
// ────────────────────────────────────────────────
const refundSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dezignloop.com/refund/#webpage",
      "url": "https://www.dezignloop.com/refund",
      "name": "Refund Policy – DezignLoop",
      "isPartOf": {
        "@id": "https://www.dezignloop.com/#website"
      },
      "about": {
        "@id": "https://www.dezignloop.com/#organization"
      },
      "description": "DezignLoop refund and cancellation policy outlining terms for service refunds, project cancellations, and satisfaction guarantees.",
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
            "name": "Refund Policy",
            "item": "https://www.dezignloop.com/refund"
          }
        ]
      }
    }
  ]
};

export default function RefundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundSchema) }}
      />
      <RefundPolicyPage type="refund" />
    </>
  );
}