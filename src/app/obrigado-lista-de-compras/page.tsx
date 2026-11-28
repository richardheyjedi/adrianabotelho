import type { Metadata } from 'next';
import { EventoMeta } from '@/components/meta-pixel';
import { PaginaObrigado } from '@/components/pagina-obrigado';
import { PDFS } from '@/content/site';

export const metadata: Metadata = { title: 'Lista de Compras Inteligente', robots: { index: false, follow: false } };

export default function ObrigadoListaDeCompras() {
  return <><EventoMeta evento="Lead" dados={{ content_name: 'Lista de Compras' }} /><PaginaObrigado arquivos={[
    { rotulo: 'Baixar Hortifruti', href: PDFS.listaHortifruti, nomeArquivo: 'Adriana Botelho - Lista de Compras Hortifruti.pdf' },
    { rotulo: 'Baixar Itens Comuns', href: PDFS.listaItensComuns, nomeArquivo: 'Adriana Botelho - Lista de Compras Itens Comuns.pdf' },
    { rotulo: 'Baixar Produtos Naturais', href: PDFS.listaProdutosNaturais, nomeArquivo: 'Adriana Botelho - Lista de Compras Produtos Naturais.pdf' },
  ]} /></>;
}
