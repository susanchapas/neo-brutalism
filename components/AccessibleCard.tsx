import cardStyles from '../styles/card.module.css'

interface AccessibleCardProps {
  title: string
  description: string
  link: string
}

export default function AccessibleCard({ title, description, link }: AccessibleCardProps) {
  const id = `card-${title.replace(/\s+/g, '-').toLowerCase()}`
  const textColor = 'var(--foundation-black)'

  return (
    <article
      role="group"
      aria-labelledby={id}
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
        gap: '12px',
        justifyContent: 'space-between'
      }}
      tabIndex={0}
    >
      <h2 id={id} className={cardStyles.cardTitle}>{title}</h2>
      <p className={cardStyles.cardDescription}>{description}</p>
      <a 
        href={link} 
        rel="noopener noreferrer" 
        className={cardStyles.cardLink}
      >
        Visit Site
      </a>
    </article>
  )
}