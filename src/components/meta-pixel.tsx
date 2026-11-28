'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { CODIGO_BASE, EVENTO_PIXEL_PRONTO, enviarPendentes, rastrear } from '@/lib/meta-pixel';

// Carrega o pixel uma vez e registra a visita (PageView) a cada página aberta,
// inclusive quando a pessoa troca de página pelo menu sem recarregar.
export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // O pixel pode ficar pronto antes desta parte da página: envia o que já estiver guardado.
    enviarPendentes();
    window.addEventListener(EVENTO_PIXEL_PRONTO, enviarPendentes);
    return () => window.removeEventListener(EVENTO_PIXEL_PRONTO, enviarPendentes);
  }, []);

  useEffect(() => {
    rastrear('PageView');
  }, [pathname]);

  return <Script id="meta-pixel" strategy="afterInteractive">{CODIGO_BASE}</Script>;
}

// Dispara um evento quando a página abre (ViewContent, Lead).
export function EventoMeta({ evento, dados }: { evento: string; dados?: Record<string, string | number> }) {
  useEffect(() => {
    rastrear(evento, dados);
    // O evento sai uma vez por página aberta.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
