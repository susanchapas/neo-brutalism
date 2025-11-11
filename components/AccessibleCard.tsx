interface AccessibleCardProps {
  title: string
  description: string
  link: string
}

export default function AccessibleCard({ title, description, link }: AccessibleCardProps) {
  const id = `card-${title.replace(/\s+/g, '-').toLowerCase()}`
  return (
    <article role="group" aria-labelledby={id} style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
      <a href={link} rel="noopener noreferrer" role="button">Visit Site</a>
    </article>
  )
}