import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/', '/login/'],
    },
    sitemap: 'https://dezignloop.com/sitemap.xml',  // ← Fixed: removed space
  };
}