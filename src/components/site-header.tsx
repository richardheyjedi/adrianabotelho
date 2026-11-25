'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/#materiais-gratuitos', label: 'Materiais gratuitos' },
  { href: '/contato', label: 'Contato' },
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => href.includes('#') ? false : href === '/' ? pathname === '/' : pathname.startsWith(href);

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
        const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('[data-mobile-menu] a, .menu-button') ?? []);
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
    requestAnimationFrame(() => headerRef.current?.querySelector<HTMLElement>('[data-mobile-menu] a')?.focus());
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (pathname.startsWith('/escolhi-a-proteina')) return null;

  return (
    <header ref={headerRef} className={`site-header ${open ? 'menu-aberto' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)} aria-label="Adriana Botelho, início">
          <Image src="/marca/logo-horizontal-verde.png" alt="Adriana Botelho" width={720} height={164} priority sizes="190px" />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</Link>)}
        </nav>

        <Link className="botao botao-marrom botao-pequeno header-cta" href="/escolhi-a-proteina">Escolhi a proteína</Link>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((current) => !current)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-mobile-menu hidden={!open}>
        <nav className="mobile-nav" aria-label="Navegação no celular">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}
        </nav>
        <Link className="botao botao-marrom" href="/escolhi-a-proteina" onClick={() => setOpen(false)}>Escolhi a proteína <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
