import styles from '../styles/pages/Home.module.css';

import Sidebar from '../components/layouts/Sidebar';
import Header  from '../components/layouts/Header';
import Main  from '../components/layouts/Main';
import Footer  from '../components/layouts/Footer';
import { useState } from 'react';

export default function Home() {

  const [isActive, setIsActive] = useState(false);

  function toogleActive(){
    setIsActive(!isActive);
  }

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Sidebar active={isActive} />
      <Main></Main>
      <Footer />
    </div>
  )
}
