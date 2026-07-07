import { Link } from 'react-router-dom';
import { BUSINESS, NAV_LINKS } from '../utils/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`wrap ${styles.grid}`}>
        
        {/* Brand Col */}
        <div className={styles.colBrand}>
          <img src="/images/1000219636.jpg" alt="Smoke Haus" className={styles.logo} />
          <p className={styles.tagline}>{BUSINESS.tagline}</p>
          <div className={styles.socials}>
            {BUSINESS.social.instagram && (
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            )}
            {BUSINESS.social.facebook && (
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            )}
            {BUSINESS.social.googleMaps && (
              <a href={BUSINESS.social.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </a>
            )}
          </div>
        </div>

        {/* Explore Links */}
        <div className={styles.colLinks}>
          <h4 className={styles.header}>Explore</h4>
          <ul className={styles.list}>
            {NAV_LINKS.filter(l => l.path !== '/').map(link => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div className={styles.colVisit}>
          <h4 className={styles.header}>Visit</h4>
          <p className={styles.text}>{BUSINESS.address.short}</p>
          <p className={styles.text}>{BUSINESS.address.state}</p>
          <a href={BUSINESS.phoneTel} className={`${styles.textLink} ${styles.phoneLink}`}>
            {BUSINESS.phone}
          </a>
        </div>

        {/* Hours */}
        <div className={styles.colHours}>
          <h4 className={styles.header}>Hours</h4>
          <p className={styles.text}>{BUSINESS.dayRange}</p>
          <p className={styles.text}>{BUSINESS.hoursShort}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="wrap">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>&copy; {BUSINESS.year} {BUSINESS.name}, Kollam. All rights reserved.</p>
            <p className={styles.credit}>Slow smoke. Big flavor.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
