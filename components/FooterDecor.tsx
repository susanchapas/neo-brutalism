import styles from '../styles/footer-decor.module.css'

export default function FooterDecor() {
  return (
    <div className={styles.decorContainer} aria-hidden="true">
      <img
        src="/images/footer-decor.svg"
        alt=""
        className={styles.decorImage}
        role="presentation"
        width="1200"
        height="100"
        loading="lazy"
      />
    </div>
  )
}
