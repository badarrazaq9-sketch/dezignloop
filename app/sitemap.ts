import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dezignloop-theta.vercel.app/';  // ← ACTUALLY fixed: no space

  const routes = [
    '',
    '/about-us',
    '/services',
    '/services/web-design',
    '/services/branding',
    '/services/logo-design',
    '/services/ecommerce-web-development',
    '/services/lead-generation',
    '/services/search-engine-optimization-seo',
    '/services/social-media-marketing-smm',
    '/services/mobile-app-development',
    '/services/custom-development',
    '/services/video-editing',
    '/services/mascot-logo-design',     // ← Fixed: match your actual page URL
    '/services/threed-logo',            // ← Fixed: lowercase, match actual URL
    '/portfolio',
    '/pricing',
    '/privacy',                         // ← Fixed: was '/privacy-policy '
    '/refund',                          // ← Fixed: was '/refund-policy '
    '/stories',                         // ← Fixed: was ' /stories' (space + leading space)
    '/terms',                           // ← Add if you have this page
    '/contact',                         // ← Add if you have this page
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,          // ← This creates: https://dezignloop.com/services/web-design
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/services' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.8,
  }));
}