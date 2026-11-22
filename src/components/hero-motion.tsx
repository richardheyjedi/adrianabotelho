'use client';

import { PropsWithChildren, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function HeroMotion({ children }: PropsWithChildren) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
      if (conditions?.reduceMotion) return;
      const backgroundSurface = scope.current?.querySelector<HTMLElement>('[data-hero-bg-surface]');
      const backgroundOrbits = scope.current?.querySelectorAll<HTMLElement>('[data-hero-bg-orbit]');
      if (backgroundSurface) {
        gsap.to(backgroundSurface, { xPercent: 4, yPercent: -2, scale: 1.12, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }
      if (backgroundOrbits?.length) {
        gsap.to(backgroundOrbits, { x: 22, y: -16, scale: 1.06, duration: 10, repeat: -1, yoyo: true, stagger: 1.1, ease: 'sine.inOut' });
      }
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline.from('[data-hero-label]', { autoAlpha: 0, y: 18, duration: .45 })
        .from('[data-hero-line]', { autoAlpha: 0, yPercent: 105, stagger: .08, duration: .8 }, '-=.16')
        .from('[data-hero-copy]', { autoAlpha: 0, y: 20, duration: .55 }, '-=.35')
        .from('[data-hero-cta]', { autoAlpha: 0, y: 12, scale: .96, duration: .45 }, '-=.22')
        .from('[data-hero-art]', { autoAlpha: 0, y: 32, scale: .96, duration: 1.05 }, '-=.75')
        .from('[data-hero-stamp]', { autoAlpha: 0, scale: .72, rotation: -14, duration: .6 }, '-=.55')
        .from('[data-hero-scroll]', { autoAlpha: 0, y: 12, duration: .4 }, '-=.3');
    });
    return () => mm.revert();
  }, { scope });

  return <div ref={scope}>{children}</div>;
}
