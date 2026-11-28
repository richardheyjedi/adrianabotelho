import type { Metadata } from 'next';
import { EventoMeta } from '@/components/meta-pixel';
import { PaginaObrigado } from '@/components/pagina-obrigado';
import { PDFS } from '@/content/site';

export const metadata: Metadata = { title: 'E-book Bases Alimentares', robots: { index: false, follow: false } };

export default function ObrigadoBasesAlimentares() {
  return <><EventoMeta evento="Lead" dados={{ content_name: 'Bases Alimentares' }} /><PaginaObrigado arquivos={[
    { rotulo: 'Baixar o e-book Bases Alimentares', href: PDFS.basesAlimentares, nomeArquivo: 'Adriana Botelho - E-book Bases Alimentares.pdf' },
  ]} /></>;
}
