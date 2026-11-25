import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Youtube } from 'lucide-react';
import { FormularioMaterial } from '@/components/formulario-material';
import { CardComidaPlanejada, CardEscolhiAProteina } from '@/components/produtos';
import { Reveal } from '@/components/reveal';
import { IlustracaoMarca, Retrato } from '@/components/retrato';
import { CRN, FORMULARIOS, SOCIAL } from '@/content/site';

function ListaChecada({ itens }: { itens: string[] }) {
  return <ul className="lista-checada">{itens.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>;
}

export default function HomePage() {
  return <>
    <section className="secao secao-topo">
      <div className="container grade-duas grade-topo">
        <div className="texto-topo">
          <p className="etiqueta">Nutrição prática para a vida real</p>
          <h1 className="titulo-grande">Alimentação saudável: simples, prática e prazerosa, como deve ser.</h1>
          <p className="texto-destaque texto-destaque-colado">Ensino a planejar e organizar a comida da semana para a alimentação saudável caber na rotina da família.</p>
          <p className="assinatura">Nutricionista · {CRN} · Mestre e doutora pela UNICAMP</p>
          <div className="acoes">
            <Link className="botao botao-marrom" href="/escolhi-a-proteina">Conheça o Escolhi a proteína <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="botao botao-contorno" href="#materiais-gratuitos">Materiais gratuitos <ArrowDown size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <Retrato className="retrato-topo" src="/fotos/inicio-topo.webp" alt="Adriana Botelho sentada numa poltrona, de conjunto claro, com as mãos apoiadas no joelho e sorrindo" largura={1600} altura={2399} prioridade tamanhos="(max-width: 900px) 80vw, 430px" />
      </div>
    </section>

    <Reveal><section className="secao secao-areia">
      <div className="container grade-duas grade-foto-esquerda">
        <Retrato src="/fotos/inicio-rotina.webp" alt="Adriana Botelho de camiseta branca misturando uma salada de folhas numa tigela de vidro, sorrindo" largura={1600} altura={2400} ilustracao="gengibre" canto="inferior-direito" />
        <div className="texto-corrido">
          <p className="etiqueta">A rotina real</p>
          <h2 className="titulo-secao">Conciliar carreira, família e autocuidado é um desafio constante.</h2>
          <p>Você equilibra múltiplos papéis, tem uma rotina intensa e sabe que a alimentação saudável é essencial, mas precisa de soluções práticas, que funcionem no seu dia a dia.</p>
          <p>Aqui, você encontra estratégias para otimizar seu tempo na cozinha sem abrir mão do sabor, do prazer à mesa e do bem-estar da sua família.</p>
        </div>
      </div>
    </section></Reveal>

    <Reveal><section className="secao">
      <div className="container grade-produtos">
        <Retrato className="retrato-produtos" src="/fotos/inicio-produtos.webp" alt="Adriana Botelho de dólmã branca de chef, com as mãos apoiadas no encosto de uma cadeira, sorrindo" largura={1600} altura={2400} tamanhos="(max-width: 900px) 80vw, 360px" />
        <div>
          <p className="etiqueta">Materiais para a sua cozinha</p>
          <h2 className="titulo-secao">Comece pelo que já está na sua geladeira.</h2>
          <div className="produtos-lista">
            <CardEscolhiAProteina />
            <CardComidaPlanejada />
          </div>
        </div>
      </div>
    </section></Reveal>

    <Reveal><section className="secao secao-areia secao-com-ilustracao" id="materiais-gratuitos">
      <IlustracaoMarca nome="frutas" className="ilustracao-secao canto-superior-direito" />
      <div className="container">
        <div className="materiais-cabecalho">
          <h2 className="etiqueta etiqueta-titulo">Materiais gratuitos</h2>
          <Retrato className="retrato-largo" src="/fotos/inicio-materiais.webp" alt="Vista de cima das mãos de Adriana misturando uma salada de folhas verdes e roxas com colheres de bambu" largura={1600} altura={1067} tamanhos="(max-width: 900px) 92vw, 620px" />
        </div>
        <div className="materiais-grade">
          <article className="material-bloco">
            <Image className="material-capa" src="/fotos/capa-lista-de-compras.webp" alt="As três folhas da Lista de Compras Inteligente: Hortifruti, Produtos Naturais e Itens Comuns" width={936} height={817} sizes="(max-width: 900px) 70vw, 300px" />
            <p className="material-nome">Lista de Compras Inteligente</p>
            <h3>Menos tempo na cozinha, mais tempo para o que realmente importa.</h3>
            <p>Uma alimentação nutritiva começa com um bom planejamento. Baixe gratuitamente minha Lista de Compras Inteligente e simplifique sua rotina alimentar.</p>
            <ListaChecada itens={['Otimize seu tempo na cozinha.', 'Tenha sempre os ingredientes certos à mão.', 'Reduza desperdícios e organize sua rotina alimentar.']} />
            <FormularioMaterial rotulo="Baixar agora" titulo="Lista de Compras Inteligente" formulario={FORMULARIOS.listaDeCompras} />
          </article>
          <article className="material-bloco">
            <Image className="material-capa material-capa-ebook" src="/fotos/capa-bases-alimentares.webp" alt="Capa do e-book Bases Alimentares" width={200} height={283} sizes="186px" />
            <p className="material-nome">E-book Bases Alimentares</p>
            <h3>Cozinhe as bases uma vez e decida, a cada dia, o prato que sai delas.</h3>
            <p>Carne moída, frango desfiado, grão-de-bico e abóbora. O e-book Bases Alimentares ensina a preparar cada base do jeito que rende a semana inteira e a transformá-la em pratos diferentes, trocando o molho, o formato e o contraste. Quem escolhe o que vai à mesa é você.</p>
            <ListaChecada itens={['Como deixar a base neutra, com boa textura e fácil de porcionar, para servir a vários pratos.', 'As 3 trocas que fazem a mesma base virar refeições diferentes ao longo da semana.', 'Receitas e duas semanas de exemplo para você adaptar ao gosto da sua família.']} />
            <FormularioMaterial rotulo="Quero o e-book grátis" titulo="E-book Bases Alimentares" formulario={FORMULARIOS.basesAlimentares} />
          </article>
        </div>
      </div>
    </section></Reveal>

    <Reveal><section className="secao">
      <div className="container grade-duas grade-foto-direita">
        <div className="texto-corrido">
          <p className="etiqueta">Cozinha Con(s)ciência</p>
          <h2 className="titulo-secao">Receitas e explicações em vídeo, no meu canal do YouTube.</h2>
          <p>Preparos práticos, com o porquê de cada escolha no prato.</p>
          <div className="acoes"><a className="botao botao-contorno" href={SOCIAL.youtube} target="_blank" rel="noreferrer"><Youtube size={18} aria-hidden="true" /> Assistir no YouTube</a></div>
        </div>
        <Retrato src="/fotos/inicio-youtube.webp" alt="Adriana Botelho preparando uma salada numa tigela de vidro, olhando para a câmera" largura={1600} altura={2400} />
      </div>
    </section></Reveal>

    <Reveal><section className="secao secao-areia">
      <div className="container grade-duas grade-foto-esquerda">
        <Retrato src="/fotos/inicio-sobre.webp" alt="Adriana Botelho de avental bege, de braços cruzados, sorrindo diante de um fundo caramelo" largura={1600} altura={2400} ilustracao="abacate" canto="superior-direito" />
        <div className="texto-corrido">
          <p className="etiqueta">Sobre Adriana</p>
          <h2 className="titulo-secao">Muito prazer, eu sou a Adriana.</h2>
          <p>Desde pequena, aprendi que cozinhar é uma forma de amar. Com o tempo, a paixão pela cozinha se uniu à ciência da nutrição, e foi assim que encontrei minha missão: ajudar mulheres a transformar a rotina alimentar em algo prático, prazeroso e leve.</p>
          <blockquote className="citacao">“Se o plano alimentar não vira comida de verdade no prato, ele não se sustenta.”</blockquote>
          <div className="acoes"><Link className="botao botao-contorno" href="/sobre">Conheça minha história <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </div>
    </section></Reveal>
  </>;
}
