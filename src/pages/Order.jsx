import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import OrderCard from '../components/OrderCard';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { BUSINESS } from '../utils/constants';
import styles from './Order.module.css';

export default function Order() {
  const cardsRef = useGsapReveal({ delay: 0.2 });
  const cateringRef = useGsapReveal({ delay: 0.1 });

  return (
    <>
      <Helmet>
        <title>Order Online — Smoke Haus Kollam</title>
        <meta name="description" content="Order Smoke Haus for delivery, pickup, or dine-in. Order directly via WhatsApp or find us on delivery apps." />
      </Helmet>

      <PageHeader
        eyebrow="Get It To You"
        title="Order Smoke Haus"
        subtitle="Delivery, pickup, or dine-in — pick what works. Order directly via WhatsApp or find us on delivery apps."
        videoSrc="/videos/1000220140.mp4"
      />

      <section className="section-pad">
        <div className="wrap">
          <div className={styles.orderGrid} ref={cardsRef}>
            <OrderCard
              title="Delivery"
              desc="Get Smoke Haus delivered straight to your door via our delivery partners."
              image="/images/order-delivery.png"
              link="https://www.zomato.com/"
              linkText="Order on Zomato"
            />
            <OrderCard
              title="Pickup"
              desc="Call ahead or order via WhatsApp. We'll have your order hot and ready for pickup."
              image="/images/order-pickup.png"
              link={BUSINESS.whatsapp}
              linkText="Order via WhatsApp"
            />
            <OrderCard
              title="Dine In"
              desc="Walk in or reserve a table for your group — experience it fresh from the smoker."
              image="/images/gallery-2.png"
              link="/contact"
              linkText="Book a Table"
            />
          </div>

          {/* Catering CTA */}
          <div className={styles.catering} ref={cateringRef}>
            <div>
              <h2 className={styles.cateringH2}>Catering &amp; Events</h2>
              <p className={styles.cateringDesc}>
                Planning something big? We bring the full smoker setup to your event — weddings, 
                corporate gatherings, birthday parties, or anything worth celebrating.
              </p>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ember">
                Enquire Now
              </a>
            </div>
            <div className={styles.specs}>
              <div>✓ Custom menus available</div>
              <div>✓ On-site pitmaster</div>
              <div>✓ Groups of 20 – 200+</div>
              <div>✓ Full setup &amp; service</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
