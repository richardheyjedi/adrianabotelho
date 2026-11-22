import type { Metadata } from 'next';
import { ProteinaSalesPage } from '@/components/proteina-sales-page';

export const metadata: Metadata = {
  title: 'Escolhi a proteína. E agora?',
  description: 'Um mapa de decisões em 3 perguntas para escolher a hortaliça, acertar o preparo e finalizar o prato com o que você tem na geladeira.',
  openGraph: {
    title: 'Escolhi a proteína. E agora? | Adriana Botelho',
    description: 'Três perguntas, cinco cores e 36 fichas para variar o acompanhamento da sua família.',
    type: 'website',
  },
};

export default function EscolhiAProteinaPage() {
  return <ProteinaSalesPage />;
}
