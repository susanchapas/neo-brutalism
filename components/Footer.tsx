import styles from '../styles/footer.module.css'
import FooterDecor from './FooterDecor'

export default function Footer() {
  return (
    <>
      <FooterDecor />
      <footer className={styles.footer}>
        {/* Decorative motif removed to avoid layout issues */}
        <div className={styles.container}>
          <div className={styles.row1}>
          <div className={styles.status}>
            <span className={styles.label}>[SITE STATUS]</span>
            <span aria-hidden="true" className={styles.dot}></span>
            <span className={styles.visuallyHidden}>Live</span>
          </div>
          <nav aria-label="Site map">
            <ul className={styles.siteMap}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/timeline">Timeline</a></li>
              <li><a href="/people">People</a></li>
            </ul>
          </nav>
          <div className={styles.social}>
            <a href="https://github.com/susanchapas/neo-brutalism" aria-label="GitHub repository" rel="noopener noreferrer">GitHub</a>
          </div>
          </div>
          <div className={styles.row2}>
          <address>
            Contact: <a href="mailto:info@neo-brutalist.example">info@neo-brutalist.example</a>
          </address>
          <a href="/accessibility">Accessibility Statement</a>
          <p>&copy; 2025 Neo-Brutalist Archive</p>
          </div>
        </div>
      </footer>
    </>
  )
}