'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { CRN, SOCIAL } from '@/content/site';

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith('/escolhi-a-proteina')) return null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-topo">
          <Link href="/" className="footer-logo" aria-label="Adriana Botelho, início">
            <Image src="/marca/logo-completo-offwhite.png" alt="Adriana Botelho" width={760} height={283} sizes="260px" />
          </Link>
          <Image className="footer-selo" src="/marca/selo-offwhite.png" alt="" aria-hidden="true" width={360} height={360} sizes="96px" />
        </div>
        <div className="footer-grade">
          <div>
            <span className="footer-rotulo">Explore</span>
            <div className="footer-links">
              <Link href="/sobre">Sobre Adriana</Link>
              <Link href="/escolhi-a-proteina">Escolhi a proteína</Link>
              <Link href="/#materiais-gratuitos">Materiais gratuitos</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>
          <div>
            <span className="footer-rotulo">Acompanhe</span>
            <div className="footer-links">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true" /> Instagram</a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer"><Youtube size={18} aria-hidden="true" /> YouTube</a>
            </div>
          </div>
          <div>
            <span className="footer-rotulo">Newsletter</span>
            <p className="footer-breve">Newsletter em breve.</p>
          </div>
        </div>
        <div className="footer-base">
          <span>Adriana Botelho · Nutricionista · {CRN} · © 2026</span>
          <Link href="/privacidade">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
