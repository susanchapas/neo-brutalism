import cardStyles from '../styles/card.module.css'

interface Person {
  name: string
  role: string
  bio: string
  image: string
  link: string
}

type Props = {
  person: Person
  /** CSS variable name, e.g. '--digital-yellow' */
  bgVar?: string
  /** When true, apply listing layout overrides so the card grows with content */
  isListing?: boolean
}

export default function PersonProfile({
  person,
  bgVar = '--status-green',
  isListing = false,
}: Props) {
  // Force person cards to a white background and readable text for consistency
  const textColor = 'var(--foundation-black)'

  const idSlug = person.name.replace(/\s+/g, '-')

  return (
    <article
      className={`${cardStyles.neo_brutalist_card} ${cardStyles.personCard} ${isListing ? cardStyles.personListing : ''}`}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
      }}
    >
      <div className={cardStyles.personImageCol}>
        <img
          className={cardStyles.personPortrait}
          src={encodeURI(person.image)}
          alt={`Portrait of ${person.name}`}
          width="200"
          height="200"
          loading="lazy"
        />
      </div>

      <div className={cardStyles.personContentCol}>
        <h3 id={`person-${idSlug}`} className={cardStyles.personName}>
          {person.name}
        </h3>
        <p className={cardStyles.personRole}>{person.role}</p>
        <p className={cardStyles.personBio}>{person.bio}</p>
        <a
          href={person.link}
          rel="noopener noreferrer"
          className={cardStyles.personLink}
        >
          View Work
        </a>
      </div>
    </article>
  )
}
