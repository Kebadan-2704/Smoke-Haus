import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './StatsRow.module.css';

const STATS = [
  { value: 14, suffix: '+', label: 'Hours On Brisket' },
  { value: 100, suffix: '%', label: 'Real Wood Smoke' },
  { value: 7, suffix: '', label: 'Days A Week Open' },
  { value: 0, suffix: '', label: 'Shortcuts Taken' },
];

function AnimatedNumber({ value, suffix, shouldAnimate }) {
  const [display, setDisplay] = useState(shouldAnimate ? 0 : value);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!shouldAnimate || !ref.current) {
      setDisplay(value);
      return;
    }

    const obj = { val: 0 };
    const anim = gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => setDisplay(Math.round(obj.val)),
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [value, shouldAnimate]);

  return <div className={styles.num} ref={ref}>{display}{suffix}</div>;
}

export default function StatsRow() {
  const prefersReduced = useReducedMotion();
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReduced || !rowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(rowRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 88%' },
      });
    }, rowRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div className={styles.row} ref={rowRef}>
      {STATS.map((stat) => (
        <div key={stat.label}>
          <AnimatedNumber
            value={stat.value}
            suffix={stat.suffix}
            shouldAnimate={!prefersReduced}
          />
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
