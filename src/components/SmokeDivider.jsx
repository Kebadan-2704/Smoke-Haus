import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './SmokeDivider.module.css';


export default function SmokeDivider() {
  const svgRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');
    const anims = [];

    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;

      const anim = gsap.to(p, {
        strokeDashoffset: 0,
        duration: 1.4,
        delay: i * 0.15,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 90%',
        },
      });
      anims.push(anim);
    });

    return () => {
      anims.forEach(a => {
        a.scrollTrigger?.kill();
        a.kill();
      });
    };
  }, [prefersReduced]);

  return (
    <div className={styles.divider}>
      <svg ref={svgRef} viewBox="0 0 200 80" className={styles.svg}>
        {/* Three smoke curls matching the logo's 3-curl motif */}
        <path d="M70 75 C65 55 78 52 73 32 C68 12 81 8 76 -8" />
        <path d="M100 75 C95 50 110 48 105 25 C100 5 115 0 110 -12" />
        <path d="M130 75 C125 58 138 55 133 38 C128 20 141 16 136 0" />
      </svg>
    </div>
  );
}
