import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.adrianabotelho.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/sobre', '/escolhi-a-proteina', '/contato', '/privacidade'].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
