import Image from 'next/image';

export type Ilustracao = 'frutas' | 'gengibre' | 'abacate' | 'coco';

const ILUSTRACOES: Record<Ilustracao, { largura: number; altura: number }> = {
  frutas: { largura: 420, altura: 306 },
  gengibre: { largura: 420, altura: 284 },
  abacate: { largura: 419, altura: 352 },
  coco: { largura: 420, altura: 261 },
};

type Props = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  legenda?: string;
  ilustracao?: Ilustracao;
  canto?: 'superior-esquerdo' | 'superior-direito' | 'inferior-esquerdo' | 'inferior-direito';
  prioridade?: boolean;
  tamanhos?: string;
  className?: string;
};

// Moldura "retrato impresso": foto inteira, passe-partout off-white e linha fina verde suave.
export function Retrato({ src, alt, largura, altura, legenda, ilustracao, canto = 'inferior-direito', prioridade, tamanhos = '(max-width: 900px) 92vw, 440px', className = '' }: Props) {
  return (
    <figure className={`retrato ${className}`}>
      <div className="retrato-moldura">
        <Image src={src} alt={alt} width={largura} height={altura} priority={prioridade} sizes={tamanhos} />
        {ilustracao && <IlustracaoMarca nome={ilustracao} className={`retrato-ilustracao canto-${canto}`} />}
      </div>
      {legenda && <figcaption>{legenda}</figcaption>}
    </figure>
  );
}

export function IlustracaoMarca({ nome, className = '' }: { nome: Ilustracao; className?: string }) {
  const { largura, altura } = ILUSTRACOES[nome];
  return <Image className={`ilustracao ${className}`} src={`/marca/ilustracao-${nome}.webp`} alt="" aria-hidden="true" width={largura} height={altura} />;
}
