import Image from 'next/image'
import styles from '../styles/footer-decor.module.css'

export default function FooterDecor() {
  const src = `/neo-brutalism/images/footer-decor.svg`

  return (
    <div className={styles.decorContainer} aria-hidden="true">
      <Image
        src={src}
        alt=""
        className={styles.decorImage}
        role="presentation"
        width={1200}
        height={200}
      />
    </div>
  )
}
