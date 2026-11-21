import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.adrianabotelho.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/sobre', '/blog', '/contato', '/privacidade', '/blog/como-organizar-sua-alimentacao-durante-uma-semana-corrida', '/blog/alimentacao-saudavel-sem-complicacao-por-onde-comecar', '/blog/5-receitas-nutritivas-e-praticas-para-facilitar-sua-semana'].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
