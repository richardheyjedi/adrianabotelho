'use client';

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith('/escolhi-a-proteina')) return null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-kicker"><span>AB / 2026</span><span>Um cuidado que continua depois da última página.</span></div>
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-wordmark">Adriana Botelho</Link>
            <p>Onde a ciência da nutrição encontra<br />o afeto da cozinha.</p>
          </div>
          <Link className="button button-light" href="/contato#agendamento">Agende sua consultoria</Link>
        </div>
        <div className="footer-grid">
          <div><span className="footer-label">Explore</span><div className="footer-links"><Link href="/sobre">Sobre Adriana</Link><Link href="/blog">Blog e receitas</Link><Link href="/contato">Contato</Link></div></div>
          <div><span className="footer-label">Recursos</span><div className="footer-links"><a href="/downloads/ebook-bases-alimentares.pdf">Baixar material gratuito</a><Link href="/blog?categoria=Receitas">Receitas práticas</Link><Link href="/contato#newsletter">Newsletter</Link></div></div>
          <div><span className="footer-label">Acompanhe</span><div className="footer-socials"><a href="https://www.instagram.com/adrianapbotelho/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} aria-hidden="true" /></a><a href="https://www.youtube.com/@cozinhaconsciencia" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={19} aria-hidden="true" /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Adriana Botelho</span><Link href="/privacidade">Política de privacidade</Link></div>
      </div>
    </footer>
  );
}
