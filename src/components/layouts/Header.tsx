import styles from '../../styles/components/layouts/Header.module.css';

export default function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerSearch}>Search...</div>
      <div className={styles.headerAvatar}>
        <img src="https://github.com/VitorBianchi.png" alt="Vitor Bianchi" />
      </div>
    </header>
  );
}