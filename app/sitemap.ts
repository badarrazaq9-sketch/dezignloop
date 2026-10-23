import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dezignloop.com';  // ← Fixed: was pointing at vercel.app staging

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
    '/services/mascot-logo-design',
    '/services/threed-logo',
    '/portfolio',
    '/pricing',
    '/privacy',
    '/refund',
    '/stories',
    '/terms',
    '/contact',
    '/blog',
    '/blog/how-much-does-a-logo-cost-small-business',
    '/blog/how-to-choose-a-web-designer',
    '/blog/how-to-start-selling-online-small-business',
    '/blog/how-much-does-a-website-cost-small-business-2026',
    '/blog/wordpress-vs-shopify-vs-squarespace',
    '/blog/signs-website-losing-customers',
    '/blog/local-seo-playbook-2026',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/services' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
