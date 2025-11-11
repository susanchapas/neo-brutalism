const timelineItems = [
  { date: '1950s-1960s', title: 'Brutalist Architecture Origins', description: 'Concrete structures emphasizing raw materials and functionality.' },
  { date: '1980s-1990s', title: 'Swiss Typography Influence', description: 'Grid-based, sans-serif typography principles.' },
  { date: '1990s-2000s', title: 'Early Web and Browser Defaults', description: 'Times New Roman and basic HTML layouts.' },
  { date: '2010s', title: 'Skeuomorphism to Flat Design', description: 'Transition from realistic to abstract UI elements.' },
  { date: '2020s', title: 'Rise of Figma and Gumroad', description: 'Tools enabling raw, unpolished design expressions.' }
]

export default function TimelineScroller() {
  return (
    <div style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', display: 'flex', gap: '16px', padding: '16px' }}>
      {timelineItems.map((item, index) => (
        <article key={index} style={{ scrollSnapAlign: 'start', minWidth: '300px', border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px' }}>
          <time style={{ fontFamily: 'var(--mono-font)', fontSize: '0.9rem' }}>{item.date}</time>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}