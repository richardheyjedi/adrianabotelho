import { Playfair_Display, Red_Hat_Display } from 'next/font/google';

// Fontes da marca, carregadas só nesta página. As variáveis são lidas em sales-page.css.
const playfair = Playfair_Display({
  style: 'italic',
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--brand-display',
});

const redHat = Red_Hat_Display({
  style: 'normal',
  weight: ['400', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--brand-sans',
});

export default function EscolhiAProteinaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${playfair.variable} ${redHat.variable}`} style={{ display: 'contents' }}>{children}</div>;
}
