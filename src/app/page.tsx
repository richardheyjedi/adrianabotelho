import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { HeroMotion } from '@/components/hero-motion';
import { NewsletterForm } from '@/components/newsletter-form';
import { Reveal } from '@/components/reveal';

const recipes = [
  { number: '01', title: 'Bowl de quinoa com legumes assados', description: 'Uma combinação prática de ingredientes frescos, vegetais e sabores naturais.', image: '/images/recipe-quinoa.webp', imageAlt: 'Bowl de quinoa com legumes assados e folhas frescas' },
  { number: '02', title: 'Panqueca de banana e aveia', description: 'Uma receita simples para transformar o café da manhã em um momento mais nutritivo e prazeroso.', image: '/images/recipe-pancake.webp', imageAlt: 'Panquecas de banana e aveia em uma mesa de café da manhã' },
  { number: '03', title: 'Salada mediterrânea de grão-de-bico', description: 'Uma opção colorida, versátil e fácil de preparar para refeições do dia a dia.', image: '/images/recipe-salad.webp', imageAlt: 'Salada mediterrânea de grão-de-bico com tomate, pepino e ervas' },
];

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
          <div className="hero-art" data-hero-art><div className="hero-image-frame"><Image className="hero-image" src="/images/adriana-botelho-expert.jpeg" alt="Retrato de Adriana Botelho" fill priority sizes="(max-width: 900px) 70vw, 420px" /></div><div className="hero-stamp" data-hero-stamp><strong>AB</strong><span>ciência<br />sabor<br />propósito</span></div></div>
        </div>
        <div className="scroll-cue" data-hero-scroll><ChevronDown size={14} /> Explore a história</div>
      </section>
    </HeroMotion>

    <Reveal><section className="section section-ivory"><div className="container intro-grid"><div className="intro-copy"><p className="eyebrow">A rotina real</p><h2 className="display">Conciliar carreira, família e autocuidado pode ser desafiador — mas não precisa ser complicado.</h2></div><div><p className="section-intro">Se você vive uma rotina intensa e desempenha vários papéis ao longo do dia, sabe o quanto a alimentação saudável é essencial — e, por isso, precisa de soluções práticas, que funcionem no seu dia a dia.</p><p className="section-intro">Aqui, você encontra estratégias para otimizar seu tempo na cozinha sem abrir mão do sabor, do prazer à mesa e do bem-estar da sua família.</p><Link className="button" href="/contato#agendamento">Agende uma consultoria <ArrowUpRight size={17} /></Link></div><div className="editorial-photo" aria-label="Ingredientes frescos organizados em uma cozinha acolhedora"><Image src="/images/editorial-ingredients.webp" alt="Ingredientes frescos, ervas e cerâmica em uma cozinha acolhedora" fill sizes="(max-width: 900px) 100vw, 42vw" /><span className="editorial-photo-caption">comida de verdade, todos os dias</span></div></div></section></Reveal>

    <Reveal><section className="section section-forest"><div className="container material-grid"><div className="material-copy"><p className="eyebrow">Material gratuito</p><h2 className="display">Menos tempo na cozinha, mais tempo para o que realmente importa.</h2><p>Uma alimentação nutritiva começa com um bom planejamento. Baixe gratuitamente minha Lista de Compras Inteligente e simplifique sua rotina alimentar.</p><ul className="benefit-list"><li>Otimize seu tempo na cozinha.</li><li>Tenha sempre os ingredientes certos à mão.</li><li>Reduza desperdícios e organize sua rotina alimentar.</li></ul><div className="hero-actions"><span className="button button-light" aria-disabled="true">Material em preparação</span><a className="text-link" href="/downloads/ebook-bases-alimentares.pdf" style={{ color: 'var(--sage)' }}>Baixar e-book Bases Alimentares <ArrowUpRight size={16} /></a></div></div><div className="material-mockup"><div className="material-cover"><Image src="/images/capa-bases-alimentares.jpeg" alt="Capa do e-book Bases Alimentares" fill sizes="290px" /></div><span className="material-note">Lista de Compras Inteligente · placeholder</span></div></div></section></Reveal>

    <Reveal><section className="section section-cream"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">Cozinha possível</p><h2 className="display">Receitas práticas, nutritivas e cheias de sabor.</h2></div><div><p>Estratégias para otimizar seu tempo na cozinha sem abrir mão do sabor, do prazer à mesa e do bem-estar da sua família.</p><Link className="text-link" href="/blog?categoria=Receitas">Acessar todas as receitas <ArrowUpRight size={16} /></Link></div></div><div className="recipe-grid">{recipes.map((recipe) => <article className="recipe-card" key={recipe.title}><div className="recipe-image"><Image src={recipe.image} alt={recipe.imageAlt} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 48vw, 30vw" /></div><div className="recipe-content"><span className="recipe-number">{recipe.number} / RECEITA</span><h3>{recipe.title}</h3><p>{recipe.description}</p><Link className="text-link" href="/blog/5-receitas-nutritivas-e-praticas-para-facilitar-sua-semana" style={{ marginTop: 23 }}>Ver receita <ArrowUpRight size={16} /></Link></div></article>)}</div></div></section></Reveal>

    <Reveal><section className="section section-ivory"><div className="container about-home-grid"><div className="about-portrait"><Image src="/images/adriana-botelho-expert.jpeg" alt="Adriana Botelho" fill sizes="(max-width: 900px) 100vw, 40vw" /></div><div className="about-home-copy"><p className="eyebrow">Sobre Adriana</p><h2 className="display">Muito prazer, eu sou a Adriana.</h2><p>Desde pequena, aprendi que cozinhar é uma forma de amar. Com o tempo, a paixão pela cozinha se uniu à ciência da nutrição, e foi assim que encontrei minha missão: ajudar mulheres a transformar a rotina alimentar em algo prático, prazeroso e leve.</p><p className="quote">“Se o plano alimentar não vira comida de verdade no prato, ele não se sustenta.”</p><Link className="button" href="/sobre">Conheça minha história <ArrowUpRight size={17} /></Link></div></div></section></Reveal>

    <Reveal><section className="section section-forest" id="newsletter"><div className="container newsletter-grid"><div><p className="eyebrow">Para a sua caixa de entrada</p><h2 className="display">Assine nossa newsletter.</h2><p>Descubra estratégias simples e práticas para planejar suas refeições, economizar tempo e manter uma alimentação saudável no meio da correria.</p></div><NewsletterForm /></div></section></Reveal>
  </>;
}
