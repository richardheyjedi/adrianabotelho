'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Article } from '@/content/articles';

export function HomeArticlesCarousel({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const move = (direction: number) => {
    setActive((current) => (current + direction + articles.length) % articles.length);
  };

  useEffect(() => {
    if (isPaused || isInteracting || articles.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(interval);
  }, [articles.length, isInteracting, isPaused]);

  return <div className="home-carousel" role="region" aria-roledescription="carousel" aria-label="Artigos em destaque" tabIndex={0} onMouseEnter={() => setIsInteracting(true)} onMouseLeave={() => setIsInteracting(false)} onFocus={() => setIsInteracting(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsInteracting(false); }} onKeyDown={(event) => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); }}>
    <div className="home-carousel-viewport">
      <div className="home-carousel-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {articles.map((article, index) => <article id={`home-article-${index}`} className="home-article-slide" key={article.slug} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${articles.length}: ${article.title}`} aria-hidden={active !== index}>
          <div className="home-article-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" loading="lazy" data-parallax="soft" /></div>
          <div className="home-article-copy">
            <div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
            <span className="home-article-index">0{index + 1} / 03</span>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <Link className="text-link" href={`/blog/${article.slug}`} tabIndex={active === index ? 0 : -1}>Ler artigo <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>)}
      </div>
    </div>
    <div className="home-carousel-controls">
      <div className="home-carousel-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / articles.length) * 100}%` }} /></div>
      <div className="home-carousel-navigation">
        <span className="home-carousel-status" aria-live="polite">Artigo {active + 1} de {articles.length}</span>
        <div className="home-carousel-buttons"><button type="button" className="carousel-button carousel-pause" onClick={() => setIsPaused((current) => !current)} aria-pressed={isPaused} aria-label={isPaused ? 'Retomar rotação dos artigos' : 'Pausar rotação dos artigos'}>{isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button><button type="button" className="carousel-button" onClick={() => move(-1)} aria-label="Artigo anterior"><ArrowLeft size={17} aria-hidden="true" /></button><button type="button" className="carousel-button" onClick={() => move(1)} aria-label="Próximo artigo"><ArrowRight size={17} aria-hidden="true" /></button></div>
      </div>
    </div>
    <div className="home-carousel-dots" role="tablist" aria-label="Selecionar artigo">{articles.map((article, index) => <button key={article.slug} type="button" role="tab" aria-selected={active === index} aria-controls={`home-article-${index}`} tabIndex={active === index ? 0 : -1} aria-label={`Mostrar artigo ${index + 1}: ${article.title}`} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} />)}</div>
  </div>;
}
