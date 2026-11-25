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
  async redirects() {
    return [
      // O blog saiu do site: os endereços antigos levam para a página inicial.
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:caminho*', destination: '/', permanent: true },
      // Os PDFs só são entregues depois do formulário: os endereços antigos levam até ele.
      { source: '/downloads/:arquivo*', destination: '/#materiais-gratuitos', permanent: true },
      { source: '/links/ebook-bases-alimentares.pdf', destination: '/#materiais-gratuitos', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/materiais/:arquivo*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
};

export default nextConfig;
