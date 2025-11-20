import { useState } from 'react'
import cardStyles from '../styles/card.module.css'

interface Person {
  name: string
  role: string
  bio: string
  image: string
  imageHover?: string
  link: string
}

type Props = {
  person: Person
  /** CSS variable name, e.g. '--digital-yellow' */
  bgVar?: string
  /** When true, apply listing layout overrides so the card grows with content */
  isListing?: boolean
}

export default function PersonProfile({ person, bgVar = '--status-green', isListing = false }: Props) {
  const [currentImage, setCurrentImage] = useState(person.image)
  const [expanded, setExpanded] = useState(false)
  // Force person cards to a white background and readable text for consistency
  const textColor = 'var(--foundation-black)'

  const handleMouseEnter = () => {
    if (person.imageHover) {
      setCurrentImage(person.imageHover)
    }
  }

  const handleMouseLeave = () => {
    setCurrentImage(person.image)
  }

  const idSlug = person.name.replace(/\s+/g, '-')

  return (
    <article
      className={`${cardStyles.neo_brutalist_card} ${cardStyles.withPortrait} ${isListing ? 'people-listing' : ''}`}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
        paddingTop: '40px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cardStyles.cardHeader}
        onClick={() => setExpanded((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded((v) => !v)
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`panel-${idSlug}`}
      >
        <img
          className={cardStyles.portrait}
          src={encodeURI(currentImage)}
          alt={`Portrait of ${person.name}`}
        />

        <div className={cardStyles.cardTitle}>
          <button
            className={cardStyles.toggleButton}
            aria-expanded={expanded}
            aria-controls={`panel-${idSlug}`}
            id={`toggle-${idSlug}`}
            onClick={(e) => {
              e.stopPropagation()
              setExpanded((v) => !v)
            }}
            type="button"
          >
            <h3 id={`person-${idSlug}`}>{person.name}</h3>
          </button>
        </div>
      </div>

      <div
        id={`panel-${idSlug}`}
        role="region"
        aria-labelledby={`toggle-${idSlug}`}
        className={expanded ? `${cardStyles.panel} ${cardStyles.expanded}` : cardStyles.panel}
      >
        <p className={cardStyles.role} style={{ fontFamily: 'var(--mono-font)', margin: '6px 0' }}>{person.role}</p>
        <p style={{ margin: '6px 0 12px' }}>{person.bio}</p>
        <a href={person.link} rel="noopener noreferrer" style={{ color: textColor, textDecoration: 'underline' }}>
          View Work
        </a>
      </div>
    </article>
  )
}