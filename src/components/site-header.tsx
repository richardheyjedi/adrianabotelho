'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return () => { document.body.style.overflow = ''; };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('[data-mobile-menu] a, [data-mobile-menu] button') ?? []);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const firstLink = headerRef.current?.querySelector<HTMLElement>('[data-mobile-link]');
    requestAnimationFrame(() => firstLink?.focus());

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</Link>)}
        </nav>

        <Link className="button button-small header-cta" href="/contato#agendamento">Agende uma consultoria</Link>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((current) => !current)}>
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-mobile-menu role="dialog" aria-modal="true" aria-label="Menu de navegação" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p className="eyebrow">Navegação</p>
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {links.map((link) => <Link data-mobile-link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}
          </nav>
          <Link className="button button-light mobile-cta" href="/contato#agendamento" onClick={() => setOpen(false)}>Agende uma consultoria</Link>
          <p className="mobile-menu-note">Onde a ciência da nutrição encontra o afeto da cozinha.</p>
        </div>
      </div>
    </header>
  );
}
