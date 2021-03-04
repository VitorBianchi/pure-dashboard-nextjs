import styles from '../../styles/components/layouts/Sidebar.module.css';

export default function Sidebar() {

  return(
    <aside className={styles.sidebarContainer}>
      
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}>Item One</li>
        <li className={styles.sidebarListItem}>Item Two</li>
        <li className={styles.sidebarListItem}>Item Three</li>
        <li className={styles.sidebarListItem}>Item Four</li>
      </ul>

    </aside>
  );
}