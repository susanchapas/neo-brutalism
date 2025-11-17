import cardStyles from '../styles/card.module.css'

interface AccessibleCardProps {
  title: string
  description: string
  link: string
  bgVar?: string
}

const defaultColors = ['--digital-yellow', '--glitch-purple', '--system-blue', '--status-green']

export default function AccessibleCard({ title, description, link, bgVar }: AccessibleCardProps) {
  const id = `card-${title.replace(/\s+/g, '-').toLowerCase()}`
  // Force cards to use a white background site-wide while keeping text readable.
  const textColor = 'var(--foundation-black)'

  return (
    <article
      role="group"
      aria-labelledby={id}
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
      }}
      tabIndex={0}
    >
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
      <a href={link} rel="noopener noreferrer" role="button" style={{ color: textColor, textDecoration: 'underline' }}>
        Visit Site
      </a>
    </article>
  )
}