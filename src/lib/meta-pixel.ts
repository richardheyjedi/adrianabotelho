// Meta Pixel com consentimento. Nenhum evento sai do navegador antes de a pessoa clicar em "Aceitar".
// A mesma chave de consentimento é lida pela página estática /links (public/links/index.html).

export const PIXEL_ID = '883802537311231';
export const CHAVE_CONSENTIMENTO = 'ab-cookies';
export const EVENTO_ABRIR_PREFERENCIAS = 'ab-abrir-preferencias-cookies';
export const EVENTO_PIXEL_PRONTO = 'ab-pixel-pronto';

export type Escolha = 'aceito' | 'recusado';
type Dados = Record<string, string | number>;
type Pendente = { pagina: string; evento: string; dados?: Dados };

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __abEventosPendentes?: Pendente[];
  }
}

export function lerEscolha(): Escolha | null {
  try {
    const valor = window.localStorage.getItem(CHAVE_CONSENTIMENTO);
    return valor === 'aceito' || valor === 'recusado' ? valor : null;
  } catch {
    return null;
  }
}

export function gravarEscolha(escolha: Escolha) {
  try {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, escolha);
  } catch {
    // Navegador sem acesso ao armazenamento: a escolha vale só para esta página.
  }
}

function pendentes() {
  window.__abEventosPendentes ??= [];
  return window.__abEventosPendentes;
}

/**
 * Registra um evento no pixel. Devolve true quando o evento saiu na hora.
 * Sem escolha feita, o evento fica guardado e só sai se a pessoa aceitar ainda nesta página.
 * Com "Recusar", nada é enviado nem guardado.
 */
export function rastrear(evento: string, dados?: Dados): boolean {
  if (typeof window === 'undefined') return false;
  const escolha = lerEscolha();
  if (escolha === 'recusado') return false;
  if (escolha === 'aceito' && window.fbq) {
    enviarPendentes();
    window.fbq('track', evento, dados);
    return true;
  }
  pendentes().push({ pagina: window.location.pathname, evento, dados });
  return false;
}

/** Envia os eventos guardados da página atual, com a visita (PageView) sempre primeiro. */
export function enviarPendentes() {
  if (lerEscolha() !== 'aceito' || !window.fbq) return;
  const pagina = window.location.pathname;
  const daPagina = pendentes().filter((item) => item.pagina === pagina);
  window.__abEventosPendentes = [];
  daPagina.sort((a, b) => Number(b.evento === 'PageView') - Number(a.evento === 'PageView'));
  daPagina.forEach((item) => window.fbq?.('track', item.evento, item.dados));
}

export function aceitarCookies() {
  gravarEscolha('aceito');
  window.fbq?.('consent', 'grant');
  enviarPendentes();
}

export function recusarCookies() {
  gravarEscolha('recusado');
  window.fbq?.('consent', 'revoke');
  window.__abEventosPendentes = [];
  // Apaga o cookie que o pixel cria, caso a pessoa tenha aceitado antes.
  const dominio = window.location.hostname.replace(/^www\./, '');
  document.cookie = '_fbp=; Max-Age=0; path=/';
  document.cookie = `_fbp=; Max-Age=0; path=/; domain=.${dominio}`;
}

export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR_PREFERENCIAS));
}

// Código base do Meta Pixel. Começa com o consentimento negado, a não ser para quem já aceitou antes.
export const CODIGO_BASE = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
var abAceito=false;try{abAceito=localStorage.getItem('${CHAVE_CONSENTIMENTO}')==='aceito'}catch(e){}
fbq('consent',abAceito?'grant':'revoke');
fbq('set','autoConfig',false,'${PIXEL_ID}');
fbq('init','${PIXEL_ID}');
window.dispatchEvent(new Event('${EVENTO_PIXEL_PRONTO}'));`;
