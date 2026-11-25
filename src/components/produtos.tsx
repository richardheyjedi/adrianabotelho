import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CardEscolhiAProteina() {
  return (
    <article className="produto-card">
      <div className="produto-capa">
        <Image src="/escolhi-a-proteina/capa-ebook.webp" alt="Capa do guia Escolhi a proteína. E agora?" width={900} height={1273} sizes="(max-width: 700px) 50vw, 200px" />
      </div>
      <div className="produto-texto">
        <h3>Escolhi a proteína. E agora?</h3>
        <p>Um mapa de decisões em 3 perguntas para escolher a hortaliça, acertar o preparo e finalizar o prato com o que você tem em casa. Guia, 36 fichas técnicas e mapa interativo.</p>
        <Link className="botao botao-marrom" href="/escolhi-a-proteina">Conhecer o guia <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export function CardComidaPlanejada() {
  return (
    <article className="produto-card produto-card-breve">
      <div className="produto-texto">
        <span className="selo-breve">Em breve</span>
        <h3>Comida Planejada</h3>
        <p>O curso para cozinhar uma vez e comer diferente todos os dias, escolhendo você mesma o cardápio da sua casa.</p>
        <a className="botao botao-contorno" href="/comida-planejada">Entrar na lista de espera <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </article>
  );
}
