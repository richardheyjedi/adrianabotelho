/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: '/links', destination: '/links/index.html' },
      { source: '/links/', destination: '/links/index.html' },
    ];
  },
};

export default nextConfig;
