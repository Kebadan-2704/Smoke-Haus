import { MARQUEE_ITEMS } from '../utils/constants';
import styles from './MarqueeStrip.module.css';

export default function MarqueeStrip() {
  const content = MARQUEE_ITEMS.map((item, i) => (
    <span key={i}>
      {item} <em>·</em>{' '}
    </span>
  ));

  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <div className={styles.inner}>{content}</div>
        <div className={styles.inner} aria-hidden="true">{content}</div>
      </div>
    </div>
  );
}
