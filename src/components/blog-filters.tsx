'use client';

import Link from 'next/link';
import { Search, ArrowUpRight } from 'lucide-react';
import { Article, articles, categories } from '@/content/articles';
import { useMemo, useState } from 'react';

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return <article className={`article-card tone-${article.tone} ${featured ? 'article-card-featured' : ''}`}>
    <div className="article-visual"><span>Imagem editorial provisória</span><strong>{article.category}</strong></div>
    <div className="article-card-body"><div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><Link href={`/blog/${article.slug}`} className="text-link">Ler artigo <ArrowUpRight size={16} /></Link></div>
  </article>;
}

export function BlogFilters() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const filtered = useMemo(() => articles.filter((article) => {
    const matchesCategory = category === 'Todos' || article.category === category;
    const haystack = `${article.title} ${article.excerpt} ${article.category}`.toLocaleLowerCase('pt-BR');
    return matchesCategory && haystack.includes(query.toLocaleLowerCase('pt-BR'));
  }), [category, query]);

  return <>
    <div className="blog-tools" aria-label="Ferramentas do blog"><label className="search-field"><Search size={18} /><span className="sr-only">Buscar no blog</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar conteúdo" /></label><label className="category-field"><span className="sr-only">Filtrar por categoria</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    <div className="article-results" aria-live="polite">{filtered.length ? filtered.map((article, index) => <ArticleCard key={article.slug} article={article} featured={index === 0 && !query && category === 'Todos'} />) : <p className="empty-state">Nenhum artigo encontrado. Tente outra busca.</p>}</div>
  </>;
}

export { ArticleCard };
