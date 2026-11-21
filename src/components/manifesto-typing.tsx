'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ManifestoSegment = { text: string; emphasis?: boolean };

export function ManifestoTyping({ segments }: { segments: ManifestoSegment[] }) {
  const scope = useRef<HTMLDivElement>(null);
  const accessibleText = segments.map((segment) => segment.text).join('');

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
      const chars = scope.current?.querySelectorAll<HTMLElement>('[data-manifesto-char]');
      const caret = scope.current?.querySelector<HTMLElement>('[data-manifesto-caret]');
      if (!chars?.length) return;

      if (conditions?.reduceMotion) {
        gsap.set(chars, { autoAlpha: 1 });
        if (caret) gsap.set(caret, { autoAlpha: 0 });
        return;
      }

      gsap.set(chars, { autoAlpha: 0.16 });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 78%',
          end: 'bottom 42%',
          scrub: 1,
        },
      });

      timeline.to(chars, { autoAlpha: 1, duration: 1, stagger: 0.014, ease: 'none' });
      if (caret) timeline.to(caret, { autoAlpha: 0, duration: 0.1 }, '>-0.08');
    });

    return () => mm.revert();
  }, { scope });

  return (
    <div ref={scope} className="manifesto-typing">
      <p className="manifesto" aria-label={accessibleText}>
        {segments.map((segment, segmentIndex) => {
          const Tag = segment.emphasis ? 'em' : 'span';
          return <Tag key={`${segment.text}-${segmentIndex}`} className={segment.emphasis ? 'manifesto-emphasis' : undefined}>
            {Array.from(segment.text).map((character, characterIndex) => (
              <span key={`${segmentIndex}-${characterIndex}`} data-manifesto-char aria-hidden="true">{character === ' ' ? '\u00a0' : character}</span>
            ))}
          </Tag>;
        })}
        <span className="manifesto-caret" data-manifesto-caret aria-hidden="true" />
      </p>
    </div>
  );
}
