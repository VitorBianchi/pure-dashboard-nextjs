import styles from '../styles/components/Card.module.css';

export default function Card() {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.card}>Card</div>
      <div className={styles.card}>Card</div>
      <div className={styles.card}>Card</div>
    </div>
  );
}