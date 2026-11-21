'use client';

import { PropsWithChildren, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
      const reduceMotion = Boolean(conditions?.reduceMotion);
      const section = scope.current?.firstElementChild;
      const root = section?.firstElementChild;
      let items = root ? Array.from(root.children) : [];
      if (items.length === 1 && items[0].children.length > 1) items = Array.from(items[0].children);
      const revealItems = items.length > 1 ? items : [scope.current].filter(Boolean) as Element[];
      const trigger = scope.current;

      if (reduceMotion) {
        gsap.set(revealItems, { autoAlpha: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(revealItems, { autoAlpha: 0, y: 26 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        stagger: items.length > 1 ? 0.1 : 0,
        ease: 'power3.out',
        scrollTrigger: { trigger, start: 'top 86%', once: true },
      });

      const parallaxItems = scope.current?.querySelectorAll('[data-parallax]');
      if (parallaxItems?.length) {
        gsap.fromTo(parallaxItems, { yPercent: -4, scale: 1.04 }, {
          yPercent: 4,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        });
      }
    });
    return () => mm.revert();
  }, { scope });

  return <div ref={scope} className={className}>{children}</div>;
}
