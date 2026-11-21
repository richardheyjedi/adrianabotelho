import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/reveal';
import { articles, getArticle } from '@/content/articles';

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : { title: 'Artigo não encontrado' };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <>
    <section className="article-page-hero"><div className="container"><Link className="text-link" href="/blog" style={{ marginBottom: 32 }}><ArrowLeft size={16} aria-hidden="true" /> Voltar ao blog</Link><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><div className="article-meta-large"><span>{article.readTime}</span><span>Conteúdo demonstrativo · sujeito à revisão profissional</span></div></div></section>
    <Reveal><section className="section section-ivory"><div className="container article-layout"><article className="article-body">{article.sections.map((section) => <div key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}</article><aside className="article-aside"><span>Próximo passo</span><h3>Quer transformar informação em uma rotina possível?</h3><Link className="button" href="/contato#agendamento">Agende uma consultoria <ArrowUpRight size={17} aria-hidden="true" /></Link></aside></div></section></Reveal>
    <Reveal><section className="section section-cream"><div className="narrow"><div className={`article-cover tone-${article.tone}`}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, 760px" /></div><Link className="button" href="/blog" style={{ marginTop: 28 }}>Ver outros artigos <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section></Reveal>
  </>;
}
