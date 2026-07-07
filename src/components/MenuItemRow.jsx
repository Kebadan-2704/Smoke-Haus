import { useGsapReveal } from '../hooks/useGsapReveal';
import styles from './MenuItemRow.module.css';

export default function MenuItemRow({ name, tags = [], description, price }) {
  const ref = useGsapReveal();

  return (
    <div className={styles.item} ref={ref}>
      <div>
        <h3 className={styles.name}>
          {name}
          {tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <div className={styles.price}>{price}</div>
    </div>
  );
}
