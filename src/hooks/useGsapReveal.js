import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

export function useGsapReveal(options = {}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      // Immediately show element
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    // Set initial state
    gsap.set(el, { opacity: 0, y: options.y ?? 36 });

    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.9,
      ease: options.ease ?? 'power3.out',
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 88%',
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [prefersReduced]);

  return ref;
}

// Hook for wipe reveal animation
export function useWipeReveal() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const anim = gsap.to(el, {
      scaleX: 0,
      duration: 1.1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [prefersReduced]);

  return ref;
}
