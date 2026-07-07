import { useGsapReveal } from '../hooks/useGsapReveal';
import styles from './PageHeader.module.css';

export default function PageHeader({ eyebrow, title, subtitle, description, videoSrc = "/videos/1000220137.mp4" }) {
  const revealRef = useGsapReveal({ y: 24, duration: 0.7 });
  const text = subtitle || description;

  return (
    <header className={styles.header}>
      <video
        className={styles.headerVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-brisket.png"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.videoOverlay}></div>
      <div className={`wrap ${styles.inner}`} ref={revealRef}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {text && <p className={styles.desc}>{text}</p>}
      </div>
    </header>
  );
}
