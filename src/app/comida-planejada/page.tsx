import type { Metadata } from 'next';
import { FormularioListaEspera } from '@/components/formulario-lista-espera';

export const metadata: Metadata = { title: 'Comida planejada', robots: { index: false, follow: false } };

// Lista de espera do curso Comida Planejada. O título, o texto e os campos vêm do próprio formulário do ActiveCampaign.
export default function ComidaPlanejada() {
  return (
    <section className="secao secao-topo lista-espera">
      <div className="estreito">
        <FormularioListaEspera />
      </div>
    </section>
  );
}
