'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, Check, ChefHat, CircleCheck, CircleHelp, ClipboardList, Frown, Heart, House, Lightbulb, ListChecks, Lock, Map, Minus, Plus, Puzzle, Quote, Repeat, ShieldCheck, Smile, Trash2, type LucideIcon } from 'lucide-react';
import copy from '@/content/escolhi-proteina-copy.json';

const CHECKOUT_URL = 'https://pay.hotmart.com/K108586502D?off=hnf8443s';
const ASSETS = {
  laptop: '/escolhi-a-proteina/mapa-tela-computador.webp',
  tablet: '/escolhi-a-proteina/capa-ebook.webp',
  phone: '/escolhi-a-proteina/capa-guarnicoes-do-mapa.webp',
  salad: '/escolhi-a-proteina/salada-vista-de-cima.webp',
  author: '/escolhi-a-proteina/retrato-avental-bracos-cruzados.webp',
  dinner: '/escolhi-a-proteina/jantar-terca-feira.webp',
};

const lines = (section: number) => copy[section - 1] ?? [];
const values = (section: number, key: string) => lines(section).filter((line) => line.startsWith(`${key}:`)).map((line) => line.slice(key.length + 1).trim());
const value = (section: number, key: string) => values(section, key)[0] ?? '';

function Rich({ text }: { text: string }) {
  return <>{text.split(/(\[negrito\].*?\[\/negrito\]|\[riscado\].*?\[\/riscado\])/g).map((part, index) => part.startsWith('[negrito]') ? <strong key={index}>{part.slice(9, -10)}</strong> : part.startsWith('[riscado]') ? <s key={index}>{part.slice(9, -10)}</s> : <span key={index}>{part}</span>)}</>;
}

function CTA({ checkout = false }: { checkout?: boolean }) {
  const handleClick = () => {
    if (checkout) {
      window.location.assign(CHECKOUT_URL);
      return;
    }
    document.getElementById('oferta')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return <button className="purchase-button purchase-size" type="button" onClick={handleClick}>Quero o mapa de decisões</button>;
}

function DeviceMockups({ eager = false, small = false }: { eager?: boolean; small?: boolean }) {
  return <div className={`devices ${small ? 'devices-small' : ''}`}>
    <div className="notebook"><div className="notebook-screen"><img src={ASSETS.laptop} alt="Mapa de decisões aberto no computador" width="1400" height="875" loading={eager ? 'eager' : 'lazy'} /></div><div className="notebook-base" /></div>
    <div className="tablet"><img src={ASSETS.tablet} alt="Capa do guia Escolhi a proteína. E agora?" width="900" height="1273" loading={eager ? 'eager' : 'lazy'} /></div>
    <div className="phone"><img src={ASSETS.phone} alt="Capa do Bônus 1, Guarnições do Mapa" width="900" height="1273" loading={eager ? 'eager' : 'lazy'} /></div>
  </div>;
}

function Heading({ section }: { section: number }) {
  return <header className="section-heading">{value(section, 'Rótulo') && <p className="eyebrow">{value(section, 'Rótulo')}</p>}{value(section, 'Headline') && <h2>{value(section, 'Headline')}</h2>}</header>;
}

function Section({ number, className = '', children }: { number: number; className?: string; children: ReactNode }) {
  return <section id={number === 13 ? 'oferta' : `secao-${number}`} className={`page-section ${className}`} data-section={number}><div className="page-container"><Heading section={number} />{children}</div></section>;
}

function ThoughtList({ section, icons }: { section: number; icons: LucideIcon[] }) {
  return <div className={`thought-list ${section === 7 ? 'positive' : ''}`}>{values(section, 'Item').map((text, index) => { const Icon = icons[index] ?? Check; return <div className="thought" key={text}><Icon aria-hidden="true" /><p>{text}</p></div>; })}</div>;
}

function ItemList({ section, className = '' }: { section: number; className?: string }) {
  return <div className={`item-list ${className}`}>{values(section, 'Item').map((text) => <div className="item-row" key={text}><Check aria-hidden="true" /><p><Rich text={text} /></p></div>)}</div>;
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intersectsViewport = (element: Element) => { const rect = element.getBoundingClientRect(); return rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0; };
    const update = () => {
      const otherCTAVisible = Array.from(document.querySelectorAll('.sales-page .purchase-button')).some((button) => !button.closest('.floating-cta') && intersectsViewport(button));
      const excludedSectionVisible = Array.from(document.querySelectorAll('[data-section="14"], [data-section="16"], .sales-page footer')).some(intersectsViewport);
      setVisible(window.scrollY > window.innerHeight * 2 && !otherCTAVisible && !excludedSectionVisible);
    };
    const observer = new IntersectionObserver(update, { threshold: 0 });
    document.querySelectorAll('.sales-page .purchase-button, [data-section="14"], [data-section="16"], .sales-page footer').forEach((element) => { if (!element.closest('.floating-cta')) observer.observe(element); });
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return <div className={`floating-cta ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}><CTA /></div>;
}

function FAQ() {
  const [opened, setOpened] = useState<number[]>([]);
  return <div className="faq-list">{values(15, 'Pergunta').map((question, index) => { const open = opened.includes(index); return <div className="faq-item" key={question}><h3><button type="button" className="faq-question" aria-expanded={open} aria-controls={`faq-${index}`} onClick={() => setOpened((previous) => open ? previous.filter((number) => number !== index) : [...previous, index])}>{question}{open ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button></h3><div id={`faq-${index}`} hidden={!open}><p>{values(15, 'Resposta')[index]}</p></div></div>; })}</div>;
}

export function ProteinaSalesPage() {
  const methodIcons = [Map, ListChecks, ChefHat];

  return <div className="sales-page">
    <section className="hero" data-section="1"><div className="page-container"><p className="product-logo">{value(1, 'Logotipo')}</p><h1>{value(1, 'Headline')}</h1><p className="hero-subtitle">{value(1, 'Subheadline')}</p><DeviceMockups eager /><CTA checkout /><p className="microcopy">{value(1, 'Linha abaixo do botão')}</p></div></section>
    <Section number={2}><div className="testimonials">{[0, 1].map((index) => <article className="testimonial" key={index}><h3>{values(2, 'Título')[index]}</h3><p><Rich text={values(2, 'Texto')[index] ?? ''} /></p><div className="testimonial-person"><span className="initials">{values(2, 'Iniciais')[index]}</span><div><strong>{values(2, 'Nome')[index]}</strong><span>{values(2, 'Cidade')[index]}</span></div></div></article>)}</div></Section>
    <Section number={3}><div className="timeline">{lines(3).filter((line) => line.startsWith('Passo')).map((line, index) => { const [main = '', pill = ''] = line.split(' | Pílula: '); const split = main.indexOf(':'); return <div className="timeline-step" key={line}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><h3>{main.slice(10, split)}</h3><p>{main.slice(split + 1).trim()}</p><span className="pill">{pill}</span></div>; })}</div><p className="result-row"><Rich text={value(3, 'Resultado')} /></p><img className="dinner-photo" src={ASSETS.dinner} width="1400" height="788" loading="lazy" alt="Frango assado, arroz, feijão e abobrinha dourada com iogurte e hortelã" /></Section>
    <Section number={4}><ThoughtList section={4} icons={[Repeat, Trash2, CircleHelp, ClipboardList, Frown, Puzzle]} /></Section>
    <Section number={5} className="method"><p className="center-prose"><Rich text={value(5, 'Parágrafo')} /></p><p className="method-intro"><Rich text={value(5, 'Frase de introdução')} /></p><div className="method-grid">{lines(5).filter((line) => line.startsWith('Card')).map((line, index) => { const title = line.split('Título: ')[1]?.split(' | Texto: ')[0] ?? ''; const text = line.split(' | Texto: ')[1]?.split(' | Pílula: ')[0] ?? ''; const pill = line.split(' | Pílula: ')[1] ?? ''; const Icon = methodIcons[index] ?? Map; return <div className="method-unit" key={index}><article className="method-card"><span className="step-number">{index + 1}</span><Icon className="method-icon" aria-hidden="true" /><h3>{title}</h3><p>{text}</p><span className="pill">{pill}</span></article>{index < 2 && <><ArrowRight className="method-arrow" aria-hidden="true" /><ArrowDown className="method-arrow-mobile" aria-hidden="true" /></>}</div>; })}</div><p className="center-prose method-ending"><Rich text={value(5, 'Parágrafo final')} /></p></Section>
    <Section number={6}><div className="science-grid">{[0, 1, 2].map((index) => <article className="science-card" key={index}><Quote aria-hidden="true" />{index === 1 && <span className="science-number">48 g</span>}<p className="finding">{values(6, 'Achado')[index]}</p><p className="source">{values(6, 'Fonte')[index]}</p><p className="bridge">{values(6, 'Ponte')[index]}</p></article>)}</div></Section>
    <Section number={7}><ThoughtList section={7} icons={[CircleCheck, House, Heart, Lightbulb, Smile]} /></Section>
    <Section number={8}><div className="material-grid">{values(8, 'Item').map((text) => <article className="material-card" key={text}><p><Rich text={text} /></p></article>)}</div></Section>
    <section className="page-section benefits" data-section="9"><div className="page-container two-column"><div className="benefits-text"><Heading section={9} /><ItemList section={9} /></div><img className="salad-photo" src={ASSETS.salad} width="1400" height="933" loading="lazy" alt="Salada com folhas verdes, repolho roxo e cenoura ralada vista de cima" /></div></section>
    <Section number={10}><DeviceMockups /><ItemList section={10} className="received-items" /></Section>
    <Section number={11}><div className="curiosity-list">{values(11, 'Bullet').map((line) => { const [text, pill] = line.split(' | Pílula: '); return <article className="curiosity-row" key={line}><Lock aria-hidden="true" /><p>{text}</p><span className="location-pill">{pill}</span></article>; })}</div><p className="closing-line"><strong>{value(11, 'Fechamento (negrito)')}</strong></p><div className="center-cta"><CTA /></div></Section>
    <Section number={12}><div className="objections">{values(12, 'Objeção').map((text, index) => <article key={text}><h3>{text}</h3><p>{values(12, 'Resposta')[index]}</p></article>)}</div></Section>
    <Section number={13} className="offer"><DeviceMockups small /><div className="offer-card">{values(13, 'Linha').map((line) => { const [name, price] = line.split(' | Preço riscado: '); return <div className="price-row" key={line}><Check aria-hidden="true" /><p>{name}</p><s>{price}</s></div>; })}<p className="total-pill"><Rich text={value(13, 'Pílula')} /></p></div><div className="offer-purchase"><p>{value(13, 'Transição')}</p><p className="main-price">{value(13, 'Preço principal')}</p><p className="cash-price">{value(13, 'Preço à vista')}</p><CTA checkout /><p className="access-line">Acesso imediato à área de membros logo depois da compra. <span>· <ShieldCheck aria-hidden="true" /> Garantia de 7 dias</span></p></div></Section>
    <section className="page-section author" data-section="14"><div className="page-container two-column"><img className="author-photo" src={ASSETS.author} width="933" height="1400" loading="lazy" alt="Adriana Botelho de avental, com os braços cruzados" /><div className="author-text"><Heading section={14} />{values(14, 'Parágrafo').map((text) => <p key={text}>{text}</p>)}<ItemList section={14} /><CTA /></div></div></section>
    <Section number={15}><FAQ /></Section>
    <Section number={16} className="final-cta"><p className="center-prose">{value(16, 'Texto')}</p><div className="center-cta"><CTA checkout /></div></Section>
    <footer>{lines(17)[0]}</footer><FloatingCTA />
  </div>;
}
