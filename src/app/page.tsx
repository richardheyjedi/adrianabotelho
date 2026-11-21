import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { HomeArticlesCarousel } from '@/components/home-articles-carousel';
import { HeroMotion } from '@/components/hero-motion';
import { NewsletterForm } from '@/components/newsletter-form';
import { Reveal } from '@/components/reveal';
import { articles } from '@/content/articles';

export default function HomePage() {
  return <>
    <HeroMotion>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow" data-hero-label>Nutrição prática para a vida real</p>
            <h1><span data-hero-line>Alimentação</span> <em data-hero-line>saudável:</em><br /><span data-hero-line>simples, prática</span><br /><span data-hero-line>e prazerosa,</span><br /><span data-hero-line>como deve ser.</span></h1>
            <div data-hero-copy><p>Onde a ciência da nutrição encontra o afeto da cozinha.</p><div className="hero-actions"><Link className="button button-light" href="/contato#agendamento">Agende uma consultoria <ArrowUpRight size={17} /></Link><Link className="text-link" href="/sobre" style={{ color: 'var(--sage)' }}>Conheça meu trabalho <ArrowUpRight size={16} /></Link></div></div>
          </div>
          <div className="hero-art" data-hero-art><div className="hero-image-frame"><Image className="hero-image" src="/images/adriana-botelho-hero.webp" alt="Adriana Botelho em um retrato elegante em tons creme" fill priority sizes="(max-width: 900px) 70vw, 420px" /></div><div className="hero-stamp" data-hero-stamp><strong>AB</strong><span>ciência<br />sabor<br />propósito</span></div></div>
        </div>
        <div className="scroll-cue" data-hero-scroll><ChevronDown size={14} /> Explore a história</div>
      </section>
    </HeroMotion>

    <Reveal><section className="section section-ivory"><div className="container intro-grid"><div className="intro-copy"><p className="eyebrow">A rotina real</p><h2 className="display">Conciliar carreira, família e autocuidado pode ser desafiador — mas não precisa ser complicado.</h2><div className="intro-copy-body"><p className="section-intro">Se você vive uma rotina intensa e desempenha vários papéis ao longo do dia, sabe o quanto a alimentação saudável é essencial — e, por isso, precisa de soluções práticas, que funcionem no seu dia a dia.</p><p className="section-intro">Aqui, você encontra estratégias para otimizar seu tempo na cozinha sem abrir mão do sabor, do prazer à mesa e do bem-estar da sua família.</p><Link className="button" href="/contato#agendamento">Agende uma consultoria <ArrowUpRight size={17} /></Link></div></div><div className="editorial-photo" aria-label="Ingredientes frescos organizados em uma cozinha acolhedora"><Image src="/images/editorial-ingredients.webp" alt="Ingredientes frescos, ervas e cerâmica em uma cozinha acolhedora" fill sizes="(max-width: 900px) 100vw, 50vw" data-parallax="soft" /><span className="editorial-photo-caption">comida de verdade, todos os dias</span><span className="editorial-photo-index">02 / 07</span></div></div></section></Reveal>

    <Reveal><section className="section section-forest"><div className="container material-grid"><div className="material-copy"><p className="eyebrow">Material gratuito</p><h2 className="display">Menos tempo na cozinha, mais tempo para o que realmente importa.</h2><p>Uma alimentação nutritiva começa com um bom planejamento. Baixe gratuitamente minha Lista de Compras Inteligente e simplifique sua rotina alimentar.</p><ul className="benefit-list"><li>Otimize seu tempo na cozinha.</li><li>Tenha sempre os ingredientes certos à mão.</li><li>Reduza desperdícios e organize sua rotina alimentar.</li></ul><div className="hero-actions"><span className="button button-light" aria-disabled="true">Material em preparação</span><a className="text-link" href="/downloads/ebook-bases-alimentares.pdf" style={{ color: 'var(--sage)' }}>Baixar e-book Bases Alimentares <ArrowUpRight size={16} /></a></div></div><div className="material-mockup"><div className="material-device" data-parallax="soft"><Image src="/images/material-app-iphone.webp" alt="Mockup de um smartphone branco com um aplicativo de planejamento alimentar" fill sizes="(max-width: 900px) 70vw, 390px" /></div><span className="material-note">Planejamento alimentar · experiência mobile</span></div></div></section></Reveal>

    <Reveal><section className="section section-cream"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">Cozinha possível</p><h2 className="display">Receitas práticas, nutritivas e cheias de sabor.</h2></div><div><p>Estratégias para otimizar seu tempo na cozinha sem abrir mão do sabor, do prazer à mesa e do bem-estar da sua família.</p><Link className="text-link" href="/blog">Acessar todos os artigos <ArrowUpRight size={16} /></Link></div></div><HomeArticlesCarousel articles={articles} /></div></section></Reveal>

    <Reveal><section className="section section-ivory"><div className="container about-home-grid"><div className="about-portrait" aria-label="Retrato profissional de Adriana Botelho"><div className="about-portrait-image"><Image src="/images/adriana-botelho-expert.jpeg" alt="Retrato profissional de Adriana Botelho em seu jaleco" fill sizes="(max-width: 900px) 100vw, 40vw" data-parallax="soft" /></div><span className="about-portrait-label">Adriana Botelho<br /><em>nutrição com afeto</em></span><span className="about-portrait-index">03 / 07</span></div><div className="about-home-copy"><p className="eyebrow">Sobre Adriana</p><h2 className="display">Muito prazer, eu sou a Adriana.</h2><p>Desde pequena, aprendi que cozinhar é uma forma de amar. Com o tempo, a paixão pela cozinha se uniu à ciência da nutrição, e foi assim que encontrei minha missão: ajudar mulheres a transformar a rotina alimentar em algo prático, prazeroso e leve.</p><p className="quote">“Se o plano alimentar não vira comida de verdade no prato, ele não se sustenta.”</p><Link className="button" href="/sobre">Conheça minha história <ArrowUpRight size={17} /></Link></div></div></section></Reveal>

    <Reveal><section className="section section-forest" id="newsletter"><div className="container newsletter-grid"><div><p className="eyebrow">Para a sua caixa de entrada</p><h2 className="display">Assine nossa newsletter.</h2><p>Descubra estratégias simples e práticas para planejar suas refeições, economizar tempo e manter uma alimentação saudável no meio da correria.</p></div><NewsletterForm /></div></section></Reveal>
  </>;
}
