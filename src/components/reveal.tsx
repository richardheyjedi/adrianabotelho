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
      if (reduceMotion) {
        gsap.set(scope.current, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.fromTo(scope.current, { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: scope.current, start: 'top 88%', once: true },
      });
    });
    return () => mm.revert();
  }, { scope });

  return <div ref={scope} className={className}>{children}</div>;
}
