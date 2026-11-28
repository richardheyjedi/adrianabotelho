'use client';

import Script from 'next/script';
import { rastrear } from '@/lib/meta-pixel';

type JanelaActiveCampaign = Window & { _show_thank_you?: (...args: unknown[]) => unknown; __abListaEsperaPronta?: boolean };

// Formulário 1 do ActiveCampaign (lista de espera do curso Comida Planejada), exibido dentro do site.
// O Lead só é registrado quando o ActiveCampaign confirma a inscrição e mostra a mensagem de agradecimento.
export function FormularioListaEspera() {
  const prepararLead = () => {
    const janela = window as JanelaActiveCampaign;
    if (janela.__abListaEsperaPronta || typeof janela._show_thank_you !== 'function') return;
    const original = janela._show_thank_you;
    janela._show_thank_you = (...args: unknown[]) => {
      rastrear('Lead', { content_name: 'Lista de espera Comida Planejada' });
      return original(...args);
    };
    janela.__abListaEsperaPronta = true;
  };

  return <>
    <div className="_form_1" />
    <Script src="https://adrianapbotelho83507.activehosted.com/f/embed.php?id=1" strategy="afterInteractive" onLoad={prepararLead} onReady={prepararLead} />
  </>;
}
