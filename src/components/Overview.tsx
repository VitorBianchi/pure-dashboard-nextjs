import styles from '../styles/components/Overview.module.css';
import data from '../api/data/overviews';

export default function Overview() {

  const createOverview = ()=> {}

  return(
    <div className={styles.overviewContainer}>

      <div className={styles.overviewCard}>
        <span>Teste</span>
        <div>10</div>
      </div>

      <div className={styles.overviewCard}>
        <span>Teste</span>
        <div>5</div>
      </div>

      <div className={styles.overviewCard}>
        <span>Teste</span>
        <div>0</div>
      </div>
      
    </div>
  );
}