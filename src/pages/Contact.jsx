import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { BUSINESS } from '../utils/constants';
import styles from './Contact.module.css';

export default function Contact() {
  const infoRef = useGsapReveal();
  const formRef = useGsapReveal({ delay: 0.1 });

  return (
    <>
      <Helmet>
        <title>Contact — Smoke Haus Kollam</title>
        <meta name="description" content="Find Smoke Haus in Eravipuram Circle, Kollam. Call, email, or send us a message." />
      </Helmet>

      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions, feedback, group bookings or catering enquiries — we'd love to hear from you."
        videoSrc="/videos/1000220141.mp4"
      />

      <section className="section-pad">
        <div className="wrap">
          <div className={styles.exteriorImgWrap}>
            <img src="/images/contact-exterior.png" alt="Smoke Haus Exterior" className={styles.exteriorImg} />
          </div>
          <div className={styles.grid}>
            {/* Contact info */}
            <div className={styles.details} ref={infoRef}>
              <div className={styles.item}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
                <div>
                  <div className={styles.label}>Address</div>
                  <p className={styles.text}>{BUSINESS.address.line1},<br />{BUSINESS.address.short}, {BUSINESS.address.state}</p>
                </div>
              </div>
              <div className={styles.item}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                <div>
                  <div className={styles.label}>Phone</div>
                  <a href={BUSINESS.phoneTel} className={styles.textLink}>{BUSINESS.phone}</a>
                </div>
              </div>
              <div className={styles.item}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <div>
                  <div className={styles.label}>Email</div>
                  <a href={`mailto:${BUSINESS.email}`} className={styles.textLink}>{BUSINESS.email}</a>
                </div>
              </div>
              <div className={styles.item}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <div>
                  <div className={styles.label}>Hours</div>
                  <p className={styles.text}>{BUSINESS.dayRange}<br />{BUSINESS.hoursShort}</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div ref={formRef}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className={styles.mapWrap}>
        <iframe
          className={styles.mapIframe}
          loading="lazy"
          allowFullScreen
          title="Smoke Haus location"
          src={BUSINESS.mapEmbedUrl}
        />
      </div>
    </>
  );
}
