import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Red_Hat_Display } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';
import './sales-page.css';

// Fontes da marca para o site todo (a página /escolhi-a-proteina carrega as dela no próprio layout).
const playfair = Playfair_Display({ style: 'italic', weight: ['400', '500'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--fonte-titulo' });
const redHat = Red_Hat_Display({ style: 'normal', weight: ['400', '500', '600', '700', '800'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--fonte-texto' });

const DESCRICAO = 'Nutricionista, mestre e doutora pela UNICAMP. Materiais práticos para planejar e organizar a comida da semana e fazer a alimentação saudável caber na rotina da família.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adrianabotelho.com.br'),
  title: { default: 'Adriana Botelho | Nutrição prática para a vida real', template: '%s | Adriana Botelho' },
  description: DESCRICAO,
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Adriana Botelho', title: 'Adriana Botelho | Nutrição prática para a vida real', description: DESCRICAO, url: 'https://www.adrianabotelho.com.br', images: [{ url: '/fotos/inicio-topo.webp', width: 1600, height: 2399, alt: 'Adriana Botelho sentada, de roupa clara, sorrindo' }] },
  twitter: { card: 'summary_large_image', title: 'Adriana Botelho | Nutrição prática para a vida real', description: DESCRICAO, images: ['/fotos/inicio-topo.webp'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#7E8375', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${playfair.variable} ${redHat.variable}`}><body><a className="skip-link" href="#main-content">Pular para o conteúdo</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></body></html>;
}
