import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Smoke Haus Kollam</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <main className={styles.wrapper}>
        <div className={styles.inner}>
          <span className="eyebrow">404 Error</span>
          <h1 className={styles.h1}>Looks like this page got smoked.</h1>
          <p className={styles.text}>
            We can't find the page you're looking for. It might have been moved, or the link might be broken. Let's get you back to the barbecue.
          </p>
          <div className={styles.ctas}>
            <Link to="/menu" className="btn btn-ember">View The Menu</Link>
            <Link to="/" className="btn btn-line">Go Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}
