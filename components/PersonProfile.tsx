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
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
      aria-labelledby={`person-${person.name.replace(/\s+/g, '-')}`}
    >
      <img
        className={cardStyles.portrait}
        src={encodeURI(currentImage)}
        alt={`Portrait of ${person.name}`}
        aria-hidden="true"
      />
      <h3 id={`person-${person.name.replace(/\s+/g, '-')}`}>{person.name}</h3>
      <p style={{ fontFamily: 'var(--mono-font)', margin: '6px 0' }}>{person.role}</p>
      <p style={{ margin: '6px 0 12px' }}>{person.bio}</p>
      <a href={person.link} rel="noopener noreferrer" style={{ color: textColor, textDecoration: 'underline' }}>
        View Work
      </a>
    </article>
  )
}