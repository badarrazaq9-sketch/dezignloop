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

    // ✅ Add this temporarily until sharp is installed
    unoptimized: true,
  },

  // Remove deprecated options:
  poweredByHeader: false,
  // Remove: swcMinify (automatically enabled)
  // Remove: productionBrowserSourceMaps (use env variable if needed)
};

module.exports = nextConfig;