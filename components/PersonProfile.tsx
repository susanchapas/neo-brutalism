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
}

export default function PersonProfile({ person, bgVar = '--status-green' }: Props) {
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
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
        position: 'relative',
        paddingTop: '50px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-labelledby={`person-${person.name.replace(/\s+/g, '-')}`}
    >
      <img
        src={currentImage}
        alt={`Portrait of ${person.name}`}
        style={{
          position: 'absolute',
          top: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '150px',
          border: 'var(--border-thick)',
          display: 'block',
          marginBottom: '12px',
        }}
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