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
      { source: '/ratgeber/5g-einsatzkoffer-bos', destination: '/ratgeber', permanent: true },
      // Alter Slug legte IP67 fuer das Produkt nahe; das fertige 5G Case hat keine IP-Schutzart.
      { source: '/ratgeber/ip67-5g-koffer-outdoor', destination: '/ratgeber/outdoor-5g-koffer', permanent: true },
    ];
  },
};

export default nextConfig;
