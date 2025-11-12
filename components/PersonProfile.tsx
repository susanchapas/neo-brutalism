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
}

export default function PersonProfile({ person, bgVar = '--status-green' }: Props) {
  // pick a readable text color depending on the background choice
  const darkBgNames = ['--system-blue', '--glitch-purple']
  const textColor = darkBgNames.includes(bgVar) ? 'var(--paper-white)' : 'var(--foundation-black)'

  return (
    <article
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: `var(${bgVar})`,
        color: textColor,
      }}
      tabIndex={0}
      aria-labelledby={`person-${person.name.replace(/\s+/g, '-')}`}
    >
      <img
        src={person.image}
        alt={`Portrait of ${person.name}`}
        style={{ width: '100px', height: '100px', border: 'var(--border-thick)', display: 'block', marginBottom: '12px' }}
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