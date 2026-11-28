'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { EVENTO_ABRIR_PREFERENCIAS, abrirPreferenciasCookies, aceitarCookies, lerEscolha, recusarCookies } from '@/lib/meta-pixel';

// Faixa de consentimento no rodapé da tela. Aparece até a pessoa escolher
// e volta pelo link "Preferências de cookies".
export function AvisoCookies() {
  const [aberto, setAberto] = useState(false);
  const faixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lerEscolha() === null) setAberto(true);
    const abrir = () => setAberto(true);
    window.addEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
  }, []);

  // Enquanto a faixa está aberta, a página ganha espaço embaixo e o botão flutuante sobe,
  // para nada ficar escondido atrás dela.
  useEffect(() => {
    const raiz = document.documentElement;
    if (!aberto || !faixa.current) {
      raiz.classList.remove('aviso-cookies-aberto');
      raiz.style.removeProperty('--aviso-cookies-altura');
      return;
    }
    const medir = () => raiz.style.setProperty('--aviso-cookies-altura', `${faixa.current?.offsetHeight ?? 0}px`);
    medir();
    raiz.classList.add('aviso-cookies-aberto');
    const observador = new ResizeObserver(medir);
    observador.observe(faixa.current);
    return () => { observador.disconnect(); raiz.classList.remove('aviso-cookies-aberto'); raiz.style.removeProperty('--aviso-cookies-altura'); };
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div ref={faixa} className="aviso-cookies" role="region" aria-label="Aviso de cookies">
      <p>Usamos cookies para medir as visitas e o resultado dos nossos anúncios. Você pode aceitar ou recusar. <Link href="/privacidade">Política de privacidade</Link></p>
      <div className="aviso-cookies-botoes">
        <button type="button" className="aviso-cookies-recusar" onClick={() => { recusarCookies(); setAberto(false); }}>Recusar</button>
        <button type="button" className="aviso-cookies-aceitar" onClick={() => { aceitarCookies(); setAberto(false); }}>Aceitar</button>
      </div>
    </div>
  );
}

export function BotaoPreferenciasCookies({ className }: { className?: string }) {
  return <button type="button" className={`link-preferencias-cookies ${className ?? ''}`} onClick={abrirPreferenciasCookies}>Preferências de cookies</button>;
}
