import styles from '../../styles/components/layouts/Footer.module.css';

export default function Footer() {

  const year = new Date().getFullYear();

  return(
    <footer className={styles.footerContainer}>

      <div className={styles.footerCopyright}>&copy; {year} Vitor Bianchi</div>
      <div className={styles.footerSignature}>
        Made with 💜 by <a href="https://github.com/VitorBianchi"><strong>Vitor Bianchi</strong></a>
      </div>
      
    </footer>
  );
}