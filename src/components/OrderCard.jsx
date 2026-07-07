import { Link } from 'react-router-dom';
import styles from './OrderCard.module.css';


export default function OrderCard({ title, desc, image, link, linkText }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={image} alt={title} className={styles.cardImg} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      
      {link.startsWith('http') || link.startsWith('tel') ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`btn btn-line ${styles.btn}`}>
          {linkText}
        </a>
      ) : (
        <Link to={link} className={`btn btn-line ${styles.btn}`}>
          {linkText}
        </Link>
      )}
    </div>
  );
}
