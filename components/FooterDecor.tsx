import styles from '../styles/footer-decor.module.css'

export default function FooterDecor() {
  const src = `/neo-brutalism/images/footer-decor.svg`

  return (
    <div className={styles.decorContainer} aria-hidden="true">
      <img src={src} alt="" className={styles.decorImage} role="presentation" />
    </div>
  )
}
