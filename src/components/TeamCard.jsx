import styles from './TeamCard.module.css';

export default function TeamCard({ name, role, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgFrame}>
        <img src={image} alt={`Photo of ${name}, ${role}`} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}
