import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/', '/login/'],
    },
    sitemap: 'https://www.dezignloop.com/sitemap.xml',
  };
}
