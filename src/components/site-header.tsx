'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useGSAP(() => {
    const panel = headerRef.current?.querySelector<HTMLElement>('[data-mobile-menu]');
    if (!panel) return;

    if (open) {
      gsap.set(panel, { display: 'flex' });
      gsap.fromTo(panel, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' });
      gsap.fromTo('[data-mobile-link]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.06, delay: 0.12, ease: 'power3.out' });
    } else {
      gsap.to(panel, { autoAlpha: 0, y: -14, duration: 0.25, ease: 'power2.in', onComplete: () => gsap.set(panel, { display: 'none' }) });
    }
  }, { scope: headerRef, dependencies: [open], revertOnUpdate: true });

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Adriana Botelho, início">
          <span className="wordmark-monogram">AB</span>
          <span>Adriana Botelho</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <Link className="button button-small header-cta" href="/contato#agendamento">Agende uma consultoria</Link>
        <button className="menu-button" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div className="mobile-menu" data-mobile-menu aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p className="eyebrow">Navegação</p>
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {links.map((link) => <Link data-mobile-link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span>↗</span></Link>)}
          </nav>
          <Link className="button button-light mobile-cta" href="/contato#agendamento" onClick={() => setOpen(false)}>Agende uma consultoria</Link>
          <p className="mobile-menu-note">Onde a ciência da nutrição encontra o afeto da cozinha.</p>
        </div>
      </div>
    </header>
  );
}
