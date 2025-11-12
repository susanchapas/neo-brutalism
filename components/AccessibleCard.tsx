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
  const pick = bgVar || defaultColors[Math.floor(Math.random() * defaultColors.length)]
  const darkBgNames = ['--system-blue', '--glitch-purple']
  const textColor = darkBgNames.includes(pick) ? 'var(--paper-white)' : 'var(--foundation-black)'

  return (
    <article
      role="group"
      aria-labelledby={id}
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: `var(${pick})`,
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