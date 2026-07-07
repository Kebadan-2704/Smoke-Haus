import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmokeCanvas from '../components/SmokeCanvas';
import MarqueeStrip from '../components/MarqueeStrip';
import PitCard from '../components/PitCard';
import SmokeDivider from '../components/SmokeDivider';
import { useGsapReveal, useWipeReveal } from '../hooks/useGsapReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { BUSINESS } from '../utils/constants';
import styles from './Home.module.css';

const PIT_ITEMS = [
  { image: '/images/pit-brisket.png', alt: 'Slow-smoked brisket, hand-sliced', tag: '14-HR SMOKE', name: 'Signature Brisket', desc: 'Hickory-smoked for fourteen hours, rested, then sliced against the grain.', price: '₹ 549' },
  { image: '/images/pit-ribs.png', alt: 'Glazed baby back ribs', tag: 'HOUSE GLAZE', name: 'Baby Back Ribs', desc: 'Fall-off-the-bone, glazed with our house barbecue sauce.', price: '₹ 649' },
  { image: '/images/pit-pulledpork.png', alt: 'Pulled pork with coleslaw', tag: 'PIT CLASSIC', name: 'Pulled Pork', desc: 'Shredded low-and-slow pork shoulder, piled high, sauce on the side.', price: '₹ 449' },
];

export default function Home() {
  const sweepRef = useRef(null);
  const storyRevealRef = useGsapReveal();
  const storyImgRef = useGsapReveal();
  const storyWipeRef = useWipeReveal();
  const prefersReduced = useReducedMotion();

  // Gold sweep animation
  useLayoutEffect(() => {
    if (prefersReduced || !sweepRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(sweepRef.current, {
        backgroundPosition: '0% 0',
        duration: 1.8,
        delay: 0.4,
        ease: 'power2.out',
      });
    }, sweepRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  // Band reveal
  const col1Ref = useGsapReveal({ delay: 0 });
  const col2Ref = useGsapReveal({ delay: 0.08 });
  const col3Ref = useGsapReveal({ delay: 0.16 });

  return (
    <>
      <Helmet>
        <title>Smoke Haus — Slow-Smoked American BBQ, Kollam</title>
        <meta name="description" content="Smoke Haus is Kollam's slow-smoked American BBQ house — brisket, ribs and pulled pork, smoked low and slow over real wood." />
      </Helmet>

      {/* HERO */}
      <header className={styles.hero}>
        {/* Hero background video */}
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-brisket.png"
        >
          <source src="/videos/1000220137.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <SmokeCanvas />
        <div className={styles.heroInner}>
          <div className={`wrap ${styles.heroCenter}`}>
            <span className={`eyebrow ${styles.heroEyebrow}`}>
              Est. 2024 · Kollam, Kerala
            </span>
            <h1 className={styles.h1}>
              Slow Smoke.<br />
              <span className={styles.sweep} ref={sweepRef}>Big Flavor.</span>
            </h1>
            <p className={styles.heroSub}>
              Brisket, ribs and pulled pork, smoked low and slow over real wood — right here in Kollam.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/menu" className="btn btn-ember">View The Menu</Link>
              <Link to="/order" className="btn btn-line">Order Online</Link>
            </div>
          </div>
        </div>
        <div className={styles.scrollCue}>
          <span>Scroll</span>
          <span className={styles.scrollLine}></span>
        </div>
      </header>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* FROM THE PIT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">From The Pit</span>
            <h2>What comes out of the smoker</h2>
            <p>Every cut spends hours over real wood before it ever reaches your table. Here's what people come back for.</p>
          </div>
          <div className={styles.pitGrid}>
            {PIT_ITEMS.map((item) => (
              <PitCard key={item.name} {...item} description={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <SmokeDivider />

      {/* STORY TEASER */}
      <section className="section-pad">
        <div className="wrap">
          <div className={styles.story}>
            <div className={styles.storyFrame} ref={storyImgRef}>
              <div className={styles.storyWipe} ref={storyWipeRef}></div>
              <img src="/images/story-pitmaster.png" alt="Pitmaster tending the smoker at Smoke Haus" />
            </div>
            <div ref={storyRevealRef}>
              <span className="eyebrow">Our Story</span>
              <h2 className={styles.storyH2}>Kerala's first real American smokehouse</h2>
              <p className={styles.storyText}>
                Smoke Haus started with a simple idea: bring proper, patient, wood-fired barbecue
                to Kollam — no shortcuts, no liquid smoke, no rushing the process. Just brisket,
                pork and chicken, smoked the way it's supposed to be done.
              </p>
              <p className={styles.signoff}>— The Smoke Haus Pit Crew</p>
              <Link to="/about" className={`btn btn-dark ${styles.storyBtn}`}>Read Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={`section-pad ${styles.gallerySection}`}>
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">Visuals</span>
            <h2>Life at Smoke Haus</h2>
            <p>From the pit to the plate.</p>
          </div>
          <div className={styles.galleryGrid}>
            <img src="/images/gallery-1.png" alt="Premium sliced BBQ brisket platter" className={styles.galleryImg} />
            <img src="/images/gallery-2.png" alt="Rustic modern BBQ restaurant interior" className={styles.galleryImg} />
            <img src="/images/gallery-3.png" alt="Loaded BBQ fries in a skillet" className={styles.galleryImg} />
          </div>
        </div>
      </section>

      {/* DARK BAND */}
      <section className={`${styles.bandDark} section-pad`}>
        <div className="wrap">
          <div className={styles.grid3}>
            <div ref={col1Ref}>
              <span className="eyebrow eyebrow--gold">Find Us</span>
              <h3 className={styles.bandLabel}>Address</h3>
              <p className={styles.bandBig}>{BUSINESS.address.short}</p>
              <p className={styles.bandText}>{BUSINESS.address.line1},<br />{BUSINESS.address.state}</p>
            </div>
            <div ref={col2Ref}>
              <span className="eyebrow eyebrow--gold">Hours</span>
              <h3 className={styles.bandLabel}>Open Daily</h3>
              <p className={styles.bandBig}>{BUSINESS.hoursShort}</p>
              <p className={styles.bandText}>Kitchen stays open through dinner service. Call ahead for large groups.</p>
            </div>
            <div ref={col3Ref}>
              <span className="eyebrow eyebrow--gold">Reach Us</span>
              <h3 className={styles.bandLabel}>Phone</h3>
              <p className={styles.bandBig}>
                <a href={BUSINESS.phoneTel} className={styles.phoneLink}>{BUSINESS.phone}</a>
              </p>
              <p className={styles.bandText}>For reservations, catering enquiries and takeaway orders.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
