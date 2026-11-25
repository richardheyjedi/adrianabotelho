import { Download } from 'lucide-react';
import { CardEscolhiAProteina } from '@/components/produtos';

type Arquivo = { rotulo: string; href: string; nomeArquivo: string };

export function PaginaObrigado({ arquivos }: { arquivos: Arquivo[] }) {
  return <>
    <section className="secao secao-topo">
      <div className="estreito centro">
        <h1 className="titulo-grande">Pronto, o material é seu.</h1>
        <p className="texto-destaque">Clique no botão abaixo para baixar.</p>
        <div className="downloads">
          {arquivos.map((arquivo) => <a key={arquivo.href} className="botao botao-marrom" href={arquivo.href} download={arquivo.nomeArquivo}><Download size={18} aria-hidden="true" /> {arquivo.rotulo}</a>)}
        </div>
      </div>
    </section>
    <section className="secao secao-areia">
      <div className="estreito">
        <CardEscolhiAProteina />
      </div>
    </section>
  </>;
}
