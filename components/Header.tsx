import Link from 'next/link'
import styles from '../styles/header.module.css'
import navStyles from '../styles/nav.module.css'

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <a className={styles['skip-link']} href="#main">Skip to content</a>
      <div className={styles.brand}>
        <Link href="/" aria-label="Neo-Brutalist Home">
          <strong className={styles.logo}>NEO-BRUTALIST</strong>
        </Link>
      </div>
      <nav role="navigation" aria-label="Primary">
        <ul className={styles.navList}>
          <li><Link href="/" className={navStyles.nav_link} aria-current="page">Home</Link></li>
          <li><Link href="/about" className={navStyles.nav_link}>About</Link></li>
          <li><Link href="/timeline" className={navStyles.nav_link}>Timeline</Link></li>
          <li><Link href="/people" className={navStyles.nav_link}>People</Link></li>
        </ul>
      </nav>
    </header>
  )
}