/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      { source: '/partner-werden', destination: '/partner', permanent: true },
      { source: '/reseller', destination: '/partner', permanent: true },
      { source: '/vertriebspartner', destination: '/partner', permanent: true },
    ];
  },
};

export default nextConfig;
