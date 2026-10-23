/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },

 experimental: {
  optimizePackageImports: ['lucide-react'],
},

  devIndicators: {
    buildActivity: false,
  },

  // === IMAGE OPTIMIZATION ===
  images: {
    // Allow external hosts (Unsplash, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],

    // Enable modern formats
    formats: ['image/avif', 'image/webp'],

    // Better caching for images
    minimumCacheTTL: 60,

    // Image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  },

  // Remove deprecated options:
  poweredByHeader: false,
  // Remove: swcMinify (automatically enabled)
  // Remove: productionBrowserSourceMaps (use env variable if needed)

  // === PERMANENT REDIRECTS ===
  // Legacy URLs that were published in the sitemap / page canonicals but never
  // existed as routes. Each one now lands on its real page. Added 2026-10-22
  // for the GSC indexing fix; safe to remove once Google drops the old URLs.
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/refund', destination: '/refund-policy', permanent: true },
      { source: '/terms', destination: '/terms-of-services', permanent: true },
      { source: '/services/mascot-logo-design', destination: '/services/mascot-logo', permanent: true },
      { source: '/services/threed-logo', destination: '/services/ThreeDlogo', permanent: true },
      { source: '/mascot-logo-design', destination: '/services/mascot-logo', permanent: true },
      { source: '/threed-logo', destination: '/services/ThreeDlogo', permanent: true },
    ];
  },
};

module.exports = nextConfig;