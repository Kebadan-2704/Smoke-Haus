import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './ProcessTimeline.module.css';

const STEPS = [
  { num: '01', title: 'Wood', desc: 'We smoke exclusively over hardwood — no gas, no liquid smoke, no shortcuts to that flavour.' },
  { num: '02', title: 'Rub', desc: 'A simple house dry rub, applied the night before, so the salt and spice have time to work into the meat.' },
  { num: '03', title: 'Low & Slow', desc: 'Brisket goes in low and stays there for as long as it needs — sometimes fourteen hours, sometimes more.' },
  { num: '04', title: 'Rest & Serve', desc: 'Every cut rests before it\'s sliced, so none of that flavour ends up on the cutting board instead of your plate.' },
];

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced || !sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const steps = sectionRef.current.querySelectorAll(`.${styles.step}`);
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${steps.length * 200}`,
          pin: true,
          pinSpacing: true,
        });

        steps.forEach((step, i) => {
          gsap.from(step, {
            opacity: 0,
            x: 50,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 200} top`,
              end: `top+=${(i + 1) * 200} top`,
              toggleActions: 'play none none reverse',
            },
          });
        });
      } else {
        // Mobile animation
        steps.forEach((step) => {
          gsap.from(step, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Properly unwraps the pin-spacer
  }, [prefersReduced]);

  return (
    <section className={`section-pad ${styles.process}`} ref={sectionRef}>
      <div className={styles.pin}>
        <div className="wrap">
          <div className={`section-head ${styles.head}`}>
            <span className="eyebrow eyebrow--gold">How We Smoke It</span>
            <h2 className={styles.title}>Four steps. No shortcuts.</h2>
          </div>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.num}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
