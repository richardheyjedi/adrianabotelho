import { BlogFilters } from '@/components/blog-filters';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'Blog', description: 'Conteúdos, receitas e estratégias para transformar sua alimentação em cuidado, prazer e equilíbrio.' };

export default function BlogPage() {
  return <>
    <section className="page-hero blog-hero"><div className="container page-hero-grid"><div><p className="eyebrow">Cozinha, nutrição e rotina</p><h1>Comer bem é também <em>viver bem.</em></h1></div><p className="page-hero-copy">Descubra conteúdos, receitas e estratégias para transformar sua alimentação em um momento de cuidado, prazer e equilíbrio.</p></div></section>
    <Reveal><section className="section section-ivory"><div className="container"><BlogFilters /></div></section></Reveal>
    <Reveal><section className="section section-forest" id="newsletter-blog"><div className="narrow"><p className="eyebrow">Conteúdo no seu ritmo</p><h2 className="manifesto">Uma dose de <em>clareza</em> para a sua semana.</h2><p className="section-intro" style={{ marginTop: 28 }}>Assine a newsletter na página inicial para receber novas estratégias e receitas quando a integração de email estiver configurada.</p></div></section></Reveal>
  </>;
}
