interface Person {
  name: string
  role: string
  bio: string
  image: string
  link: string
}

export default function PersonProfile({ person }: { person: Person }) {
  return (
    <article style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
      <img src={person.image} alt={`Portrait of ${person.name}`} style={{ width: '100px', height: '100px', border: 'var(--border-thick)' }} />
      <h3>{person.name}</h3>
      <p style={{ fontFamily: 'var(--mono-font)' }}>{person.role}</p>
      <p>{person.bio}</p>
      <a href={person.link} rel="noopener noreferrer">View Work</a>
    </article>
  )
}