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
      { source: '/mapa', destination: '/mapa/index.html' },
      { source: '/mapa/', destination: '/mapa/index.html' },
      { source: '/arvore', destination: '/arvore/index.html' },
      { source: '/arvore/', destination: '/arvore/index.html' },
      { source: '/comida-planejada', destination: '/comida-planejada/index.html' },
      { source: '/comida-planejada/', destination: '/comida-planejada/index.html' },
    ];
  },
};

export default nextConfig;
