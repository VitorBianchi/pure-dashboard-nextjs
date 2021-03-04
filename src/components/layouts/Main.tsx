import styles from '../../styles/components/layouts/Main.module.css';

import Card from '../Card';
import Overview from '../Overview';

export default function Main(){
  return(
    <main className={styles.mainContainer}>
      <Overview />
      <Card />
    </main>
  );
}