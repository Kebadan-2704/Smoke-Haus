import styles from './PitCard.module.css';

export default function PitCard({ image, alt, tag, name, description, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgFrame}>
        <div className={styles.tag}>{tag}</div>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.content}>
        <div className={styles.head}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{price}</span>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}
