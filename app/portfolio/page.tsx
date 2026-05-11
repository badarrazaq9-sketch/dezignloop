// app/portfolio/page.tsx
import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio – Real Results for Small Businesses',
  description:
    'Explore our portfolio: high-converting websites, powerful branding, mobile apps, local SEO campaigns, and marketing results built for small businesses just like yours. See the real impact we deliver.',
  alternates: {
    canonical: 'https://dezignloop.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio – DezignLoop Success Stories',
    description:
      'Real projects, real growth: websites, branding, apps & marketing that helped small businesses thrive online.',
    url: 'https://dezignloop.com/portfolio',
    images: [
      {
        url: '/og-portfolio.jpg', // ← Add this 1200×630 image to /public/
        width: 1200,
        height: 630,
        alt: 'DezignLoop Portfolio – Small Business Success',
      },
    ],
  },
};
const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://dezignloop.com/portfolio/#webpage",
      "url": "https://dezignloop.com/portfolio",
      "name": "Portfolio – DezignLoop",
      "isPartOf": {
        "@id": "https://dezignloop.com/#website"
      },
      "about": {
        "@id": "https://dezignloop.com/#organization"
      },
      "description": "Explore DezignLoop's portfolio of high-converting websites, powerful branding, mobile apps, local SEO campaigns, and marketing results for small businesses.",
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
            "name": "Portfolio",
            "item": "https://dezignloop.com/portfolio"
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Website Design & Development",
            "description": "High-converting, responsive websites built for small businesses to attract leads and drive sales.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "Brand Identity & Logo Design",
            "description": "Professional logo design and complete brand identity packages for business transformation.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "Mobile App Development",
            "description": "Custom mobile applications for iOS and Android to extend business reach.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Local SEO & Marketing Campaigns",
            "description": "Results-driven SEO and digital marketing campaigns to boost local visibility.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "name": "E-commerce Development",
            "description": "Full-scale ecommerce solutions with Shopify, WooCommerce, and custom platforms.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "CreativeWork",
            "name": "CRM & Web Application Development",
            "description": "Custom CRM systems and web applications to automate workflows and manage customers.",
            "provider": {
              "@id": "https://dezignloop.com/#organization"
            }
          }
        }
      ]
    }
  ]
};



export default function Portfolio() {
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
  return <PortfolioClient />;
}