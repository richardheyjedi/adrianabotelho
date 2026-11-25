import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { IlustracaoMarca, Retrato, type Ilustracao } from '@/components/retrato';
import { CRN } from '@/content/site';

export const metadata = { title: 'Sobre Adriana', description: 'A história de Adriana Botelho: a cozinha da mãe, a ciência da nutrição e uma metodologia para a alimentação saudável caber na rotina da família.' };

const metodologia: { texto: string; ilustracao: Ilustracao }[] = [
  { texto: 'Organização e planejamento alimentar;', ilustracao: 'gengibre' },
  { texto: 'Técnicas simples de culinária funcional;', ilustracao: 'abacate' },
  { texto: 'Receitas práticas, saborosas e saudáveis;', ilustracao: 'frutas' },
  { texto: 'Consciência ambiental e redução de desperdícios.', ilustracao: 'coco' },
];

const formacao = [
  `Nutricionista, PUC-Campinas · ${CRN}`,
  'Mestre e Doutora em Alimentos e Nutrição, UNICAMP',
  'Pós-graduada em Nutrição Clínica Funcional, VP',
  'Chef Funcional, Escola Fran Tonello',
  'Culinary Coach, Harvard Medical School',
  'Gastrônoma em formação, IGA',
];

function Destaque({ children }: { children: ReactNode }) {
  return <Reveal><section className="secao-destaque"><div className="estreito"><blockquote className="citacao-grande">{children}</blockquote></div></section></Reveal>;
}

type BlocoProps = { foto: string; alt: string; lado: 'esquerda' | 'direita'; areia?: boolean; ilustracao?: Ilustracao; altura?: number; children: ReactNode };

function BlocoHistoria({ foto, alt, lado, areia, ilustracao, altura = 2400, children }: BlocoProps) {
  return (
    <Reveal><section className={`secao ${areia ? 'secao-areia' : ''}`}>
      <div className={`container grade-duas ${lado === 'esquerda' ? 'grade-foto-esquerda' : 'grade-foto-direita'}`}>
        {lado === 'esquerda' && <Retrato src={foto} alt={alt} largura={1600} altura={altura} ilustracao={ilustracao} canto="inferior-direito" />}
        <div className="texto-corrido">{children}</div>
        {lado === 'direita' && <Retrato src={foto} alt={alt} largura={1600} altura={altura} ilustracao={ilustracao} canto="inferior-esquerdo" />}
      </div>
    </section></Reveal>
  );
}

export default function AboutPage() {
  return <>
    <section className="secao secao-topo">
      <div className="container grade-duas grade-topo">
        <div className="texto-topo">
          <Image className="selo-topo" src="/marca/selo-verde.png" alt="" aria-hidden="true" width={360} height={360} sizes="88px" />
          <p className="etiqueta">A história por trás da mesa</p>
          <h1 className="titulo-grande">Minha história começa onde o amor ganha sabor.</h1>
        </div>
        <Retrato className="retrato-topo" src="/fotos/sobre-topo.webp" alt="Adriana Botelho de conjunto claro, apoiada no braço de uma poltrona azul, com a mão no queixo e sorrindo" largura={1600} altura={2399} prioridade tamanhos="(max-width: 900px) 80vw, 430px" />
      </div>
    </section>

    <div id="minha-historia" />
    <BlocoHistoria foto="/fotos/sobre-infancia.webp" alt="Adriana Botelho de camiseta branca e avental verde-escuro segurando um prato com peras" lado="esquerda" areia ilustracao="coco">
      <p>Desde pequena, a cozinha sempre foi um lugar onde amor, sabores e memórias se misturavam. Cresci entre panelas borbulhantes, cheiros que abraçavam a casa inteira e a energia gostosa de uma cozinha sempre em movimento. Minha mãe, dona de um buffet, me ensinou que cozinhar era uma forma de amar. Enquanto ela cuidava de cada detalhe de uma festa ou preparava receitas de família para eventos importantes, eu ficava ali, observando. Cada ingrediente, cada mistura, cada prato servido era uma expressão de cuidado, carinho e conexão.</p>
      <p>Essa vivência me marcou de um jeito tão profundo que, mesmo sem perceber, a cozinha virou meu lugar seguro. Mas eu também queria entender o porquê das coisas. Eu queria entender o que havia por trás de cada ingrediente dentro de uma receita: como cada ingrediente carregava nutrientes capazes de promover saúde e, ao mesmo tempo, despertar memórias e aconchego. Foi essa curiosidade que me levou a escolher a Nutrição como profissão.</p>
    </BlocoHistoria>

    <BlocoHistoria foto="/fotos/sobre-ciencia-retrato.webp" alt="Retrato de Adriana Botelho de blazer branco, com o cabelo solto sobre os ombros e sorrindo, diante de um fundo cinza-azulado" lado="direita" altura={2000}>
      <p>Foi durante a graduação em Nutrição pela PUC-Campinas que desenvolvi uma base técnica, estudando desde bioquímica e fisiologia até os mecanismos que explicam como os alimentos podem nutrir, equilibrar e promover saúde. Mas nunca deixei de lado a paixão pela cozinha. Eu queria unir esses dois mundos: a ciência que explica e a cozinha que transforma. Com o tempo, essa vontade cresceu ainda mais. Fiz mestrado e doutorado em Alimentos e Nutrição pela UNICAMP e me aprofundei na Nutrição Funcional, buscando entender como cada ingrediente pode ser uma ferramenta de saúde, quando escolhido e preparado com consciência e técnica correta.</p>
    </BlocoHistoria>
    <Destaque>A ciência que explica e a cozinha que transforma.</Destaque>

    <BlocoHistoria foto="/fotos/sobre-filhos.webp" alt="Adriana Botelho sentada numa poltrona azul, de conjunto claro, com as mãos entrelaçadas sobre o joelho e sorrindo" lado="esquerda" areia>
      <p>Quando meus filhos nasceram, tudo ganhou um novo significado. A rotina intensa de trabalho, casa e família me fez enxergar, na prática, o grande desafio que tantas mulheres enfrentam: como alimentar a família de forma saudável, sem complicação e sem perder tempo? Buscando respostas, comecei a criar receitas práticas e nutritivas que realmente se encaixassem no dia a dia corrido.</p>
    </BlocoHistoria>
    <Destaque>Receitas práticas e nutritivas que realmente se encaixassem no dia a dia corrido.</Destaque>

    <BlocoHistoria foto="/fotos/sobre-missao.webp" alt="Adriana Botelho sentada, de conjunto claro, com a mão perto do rosto e um sorriso largo" lado="direita">
      <p>Ao longo dos anos, essa inquietação cresceu. No ambiente clínico, acompanhei de perto a jornada de centenas de mulheres que, como eu, dividem seu tempo entre múltiplas demandas e desejam cuidar melhor da alimentação da família e da própria saúde. Não bastava saber o que comer; era preciso aprender como tornar a alimentação saudável algo simples, acessível e possível dentro de uma rotina agitada. Foi aí que entendi minha verdadeira missão: ajudar mulheres a transformar a rotina alimentar em algo prático, prazeroso e leve.</p>
    </BlocoHistoria>
    <Destaque>Tornar a alimentação saudável algo simples, acessível e possível.</Destaque>

    <Reveal><section className="secao secao-areia">
      <div className="container grade-duas grade-foto-esquerda">
        <Retrato src="/fotos/sobre-marca.webp" alt="Detalhe das mãos de Adriana Botelho amarrando um avental bege de algodão" largura={1600} altura={2400} />
        <div className="texto-corrido">
          <p>Foi assim que nasceu minha marca. Um espaço de acolhimento, ensino e troca onde a ciência da nutrição encontra a simplicidade da cozinha do dia a dia. Com base no meu conhecimento técnico e nas habilidades que aprendi desde a infância, desenvolvi uma metodologia própria que une:</p>
          <ul className="metodologia">
            {metodologia.map((item) => <li key={item.texto}><IlustracaoMarca nome={item.ilustracao} className="metodologia-ilustracao" /><span>{item.texto}</span></li>)}
          </ul>
        </div>
      </div>
    </section></Reveal>

    <Reveal><section className="secao">
      <div className="estreito texto-corrido">
        <p>Criei cursos, oficinas, materiais e e-books voltados para mulheres multifuncionais (mães, profissionais, empreendedoras) que querem alimentar sua família com saúde, sem perder tempo ou precisar de ingredientes difíceis ou técnicas complicadas.</p>
        <p>Para mim, comida saudável não é sinônimo de rigidez ou de modismo. Aqui, saúde é um ato de amor. É sobre cuidar de quem você ama, sem se cobrar perfeição. É sobre criar momentos em família, resgatar o prazer de cozinhar juntos e entender que comer bem é um presente para o corpo, para o planeta e para a alma.</p>
      </div>
    </section></Reveal>
    <Destaque>Comer bem é um presente para o corpo, para o planeta e para a alma.</Destaque>

    <BlocoHistoria foto="/fotos/sobre-fechamento.webp" alt="Adriana Botelho sentada numa cadeira de madeira, de conjunto claro, com as pernas cruzadas e sorrindo" lado="direita" areia>
      <p>Hoje, minha marca é o reflexo da minha história: um pedaço da cozinha da minha mãe, um tanto da ciência que aprendi, e muito da minha paixão por tornar a vida das mulheres mais prática, leve e saborosa. Quero que cada mulher que passe por aqui se sinta capaz, confiante e inspirada a transformar sua cozinha em um espaço de cuidado e conexão.</p>
      <p>Porque no final, comida é isso: uma ponte entre saúde e afeto, entre nutrição e acolhimento, entre ciência e amor. E eu estou aqui para te mostrar que você pode e merece viver essa experiência todos os dias.</p>
    </BlocoHistoria>

    <BlocoHistoria foto="/fotos/sobre-formacao.webp" alt="Adriana Botelho sentada num banco alto, de blazer e calça brancos, com os braços apoiados nas pernas, diante de um fundo cinza-azulado" lado="esquerda">
      <h2 className="titulo-secao">Formação</h2>
      <ul className="formacao">{formacao.map((item) => <li key={item}>{item}</li>)}</ul>
    </BlocoHistoria>

    <section className="secao secao-areia secao-fechamento">
      <div className="estreito centro">
        <div className="acoes acoes-centro">
          <Link className="botao botao-marrom" href="/escolhi-a-proteina">Conheça o Escolhi a proteína <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <Link className="botao botao-contorno" href="/#materiais-gratuitos">Materiais gratuitos <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  </>;
}
