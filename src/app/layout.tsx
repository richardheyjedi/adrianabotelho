import type { Metadata, Viewport } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adrianabotelho.com.br'),
  title: { default: 'Adriana Botelho | Nutrição que cabe na vida', template: '%s | Adriana Botelho' },
  description: 'Onde a ciência da nutrição encontra o afeto da cozinha. Estratégias práticas para mulheres com rotinas intensas.',
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Adriana Botelho' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#183D2B', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
