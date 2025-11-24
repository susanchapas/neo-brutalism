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
        gap: '12px',
        justifyContent: 'space-between'
      }}
      tabIndex={0}
    >
      <h2 id={id} style={{ margin: 0, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: '1.2' }}>{title}</h2>
      <p style={{ margin: 0, flex: '1 1 auto', lineHeight: '1.5' }}>{description}</p>
      <a 
        href={link} 
        rel="noopener noreferrer" 
        style={{ 
          backgroundColor: 'var(--digital-yellow)',
          color: 'var(--foundation-black)', 
          textDecoration: 'none',
          padding: '10px 16px',
          border: '3px solid var(--foundation-black)',
          boxShadow: '4px 4px 0px var(--foundation-black)',
          display: 'inline-block',
          fontWeight: '600',
          transition: 'transform 0.1s ease, box-shadow 0.1s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(2px, 2px)'
          e.currentTarget.style.boxShadow = '2px 2px 0px var(--foundation-black)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)'
          e.currentTarget.style.boxShadow = '4px 4px 0px var(--foundation-black)'
        }}
      >
        Visit Site
      </a>
    </article>
  )
}