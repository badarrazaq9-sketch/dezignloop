import { MetadataRoute } from 'next';

// NOTE: 2026-10-19 — retriggered production deploy after hotfix (no code change)
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
