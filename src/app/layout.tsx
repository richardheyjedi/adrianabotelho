import type { Metadata, Viewport } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';
import './sales-page.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adrianabotelho.com.br'),
  title: { default: 'Adriana Botelho | Nutrição que cabe na vida', template: '%s | Adriana Botelho' },
  description: 'Onde a ciência da nutrição encontra o afeto da cozinha. Estratégias práticas para mulheres com rotinas intensas.',
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Adriana Botelho', title: 'Adriana Botelho | Nutrição que cabe na vida', description: 'Onde a ciência da nutrição encontra o afeto da cozinha. Estratégias práticas para mulheres com rotinas intensas.', url: 'https://www.adrianabotelho.com.br', images: [{ url: '/images/adriana-botelho-hero.webp', width: 1200, height: 1500, alt: 'Adriana Botelho em um retrato elegante em tons creme' }] },
  twitter: { card: 'summary_large_image', title: 'Adriana Botelho | Nutrição que cabe na vida', description: 'Onde a ciência da nutrição encontra o afeto da cozinha.', images: ['/images/adriana-botelho-hero.webp'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#7B8173', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#main-content">Pular para o conteúdo</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></body></html>;
}
