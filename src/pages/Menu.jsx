import { useLayoutEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import PageHeader from '../components/PageHeader';
import MenuItemRow from '../components/MenuItemRow';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { useLenis } from '../hooks/useLenis';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { MENU_CATEGORIES, MENU_TAB_OPTIONS } from '../data/menuData';
import styles from './Menu.module.css';

export default function Menu() {
  const tabsRef = useRef(null);
  const lenis = useLenis();
  const prefersReduced = useReducedMotion();
  const revealRef = useGsapReveal({ delay: 0.2 });

  useLayoutEffect(() => {
    if (prefersReduced || !tabsRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(tabsRef.current.children,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, [prefersReduced]);

  const scrollToCat = (targetId) => {
    if (targetId === 'all') {
      lenis?.scrollTo(0, { duration: 1.2, offset: 0 });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      lenis?.scrollTo(el, { duration: 1.2, offset: -180 });
    }
  };

  return (
    <>
      <Helmet>
        <title>Menu — Smoke Haus Kollam</title>
        <meta name="description" content="View the Smoke Haus menu. Slow-smoked brisket, ribs, pulled pork, and scratch-made sides." />
      </Helmet>

      <PageHeader
        eyebrow="The Full Spread"
        title="Menu"
        subtitle="Slow-smoked brisket, ribs, pulled pork, and scratch-made sides. Our pitmasters tend the fire 24/7 so you don't have to."
        videoSrc="/videos/1000220138.mp4"
      />

      {/* Sticky Tabs */}
      <div className={styles.tabs} ref={tabsRef}>
        {MENU_TAB_OPTIONS.map(opt => (
          <button
            key={opt.target}
            className={styles.tab}
            onClick={() => scrollToCat(opt.target)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div ref={revealRef}>
        <div className="wrap">
          {MENU_CATEGORIES.map(cat => (
            <div key={cat.id} id={cat.id} className={styles.category}>
              {cat.image && (
                <div className={styles.catImageWrap}>
                  <img src={cat.image} alt={cat.name} className={styles.catImage} />
                </div>
              )}
              <div className={styles.catHead}>
                <h2>{cat.name}</h2>
                <div className={styles.rule}></div>
                <span className={styles.catNote}>{cat.note}</span>
              </div>
              <div>
                {cat.items.map(item => (
                  <MenuItemRow key={item.id} name={item.name} tags={item.tags} description={item.desc} price={item.price} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
