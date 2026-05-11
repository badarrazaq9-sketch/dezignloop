// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeadPopup from '@/components/LeadPopup';

// === OPTIMIZED FONT LOADING ===
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

// === SITE-WIDE VIEWPORT ===
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
};

// === USA-FOCUSED ORGANIZATION SCHEMA ===
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dezignloop.com/#website",
  "url": "https://dezignloop.com",
  "name": "DezignLoop",
  "publisher": {
    "@id": "https://dezignloop.com/#organization"
  },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://dezignloop.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://dezignloop.com/#organization",
  "name": "DezignLoop",
  "url": "https://dezignloop.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://dezignloop.com/assets/logo.png",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61580891606731",
    "https://www.instagram.com/dezignloop_",
    "https://www.linkedin.com/company/dezignloop",
    "https://twitter.com/dezignloop"
  ],
  "description": "USA-based premium web design agency and digital growth partner specializing in small business websites, brand transformation, high-performing websites, lead generation systems, CRM solutions, web applications, logo design, and full-scale ecommerce development.",
  "foundingDate": "2019",
  "telephone": "+1-843-284-3078",
  "email": "support@dezignloop.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, PayPal, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th St N #2239",
    "addressLocality": "Saint Petersburg",
    "addressRegion": "FL",
    "postalCode": "33712",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.7676",
    "longitude": "-82.6403"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-843-284-3078",
    "contactType": "customer service",
    "email": "support@dezignloop.com",
    "availableLanguage": ["English"],
    "areaServed": {
      "@type": "Country",
      "name": "US"
    }
  }
};
// === Metadata ===
export const metadata: Metadata = {
  title: {
    default: 'DezignLoop | Web Design & Development for Small Businesses',
    template: '%s | DezignLoop',
  },
  description:
    'USA-based affordable web design, branding, SEO, app development & marketing services built for small businesses. Fast delivery, results-driven. Contact us today!',
keywords: [
  // Web Design
  'web design for small businesses USA',
  'affordable web design USA',
  'custom website design United States',
  'small business website designer USA',
  'responsive web design USA',
  'wordpress developer USA',
  'shopify web designer USA',
  'wix website designer USA',
  'squarespace expert USA',
  
  // Branding
  'affordable branding agency United States',
  'brand identity design USA',
  'logo designer USA',
  'custom logo design USA',
  'brand strategy USA',
  'visual identity design USA',
  'corporate branding USA',
  'rebranding services USA',
  
  // SEO
  'small business SEO services USA',
  'local SEO USA',
  'google ranking services USA',
  'SEO agency United States',
  'organic search optimization USA',
  'technical SEO USA',
  'on-page SEO services USA',
  'SEO audit USA',
  
  // App Development
  'custom app development for small business USA',
  'mobile app developer USA',
  'iOS app development USA',
  'android app development USA',
  'flutter developer USA',
  'react native developer USA',
  
  // Marketing
  'local digital marketing agency USA',
  'digital marketing services USA',
  'PPC advertising USA',
  'google ads management USA',
  'facebook ads agency USA',
  'instagram marketing USA',
  'content marketing USA',
  'email marketing services USA',
  
  // Ecommerce
  'ecommerce development United States',
  'shopify store setup USA',
  'woocommerce developer USA',
  'online store builder USA',
  'ecommerce website design USA',
  
  // Lead Gen
  'lead generation USA small business',
  'B2B lead generation USA',
  'sales funnel builder USA',
  'conversion rate optimization USA',
  'landing page design USA',
  
  // Social Media
  'social media marketing USA',
  'social media management USA',
  'tiktok marketing USA',
  'linkedin marketing USA',
  'youtube marketing USA',
  
  // Startup/Business
  'startup website design USA',
  'new business website USA',
  'entrepreneur web services USA',
  'minority owned business USA',
  'woman owned business USA',
  'veteran owned business USA',
  
  // Location Specific
  'web design Florida',
  'web design Saint Petersburg FL',
  'web design Tampa Bay',
  'digital agency Florida',
  'marketing agency Tampa',
  'SEO company Florida',
  
  // Industry Specific
  'real estate website design USA',
  'restaurant website design USA',
  'dental website design USA',
  'law firm website design USA',
  'ecommerce website USA',
  'fitness website design USA',
  'salon website design USA',
  'contractor website design USA',
  'nonprofit website design USA',
  'church website design USA',
  
  // General
  'best web design company USA',
  'top rated web agency USA',
  'award winning web design USA',
  'fast website delivery USA',
  'affordable digital agency USA',
  'results driven marketing USA',
  'small business growth USA',
  'online presence USA',
].join(', '),
  metadataBase: new URL('https://dezignloop.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dezignloop.com',
    languages: {
      'en-US': 'https://dezignloop.com',
    },
  },
  openGraph: {
    type: 'website',
    title: 'DezignLoop – Websites & Growth for Small Businesses',
    description:
      'Professional web design, branding, SEO and mobile apps built for small businesses. Fast, affordable, results-driven. US-based team.',
    url: 'https://dezignloop.com',
    siteName: 'DezignLoop',
    images: [
      {
        url: '/logob.png',
        width: 1200,
        height: 630,
        alt: 'DezignLoop – Small Business Web Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DezignLoop | Small Business Web Agency',
    description:
      'High-conversion websites, branding & marketing for small businesses. Get online fast.',
    images: ['/twitter-image.jpg'],
    creator: '@dezignloop',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={inter.variable} data-scroll-behavior="smooth">
      <body className="bg-white dark:bg-slate-950">
        {/* Global Schema (Organization + WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
        
        <LeadPopup />
        {children}
      </body>
    </html>
  )
}