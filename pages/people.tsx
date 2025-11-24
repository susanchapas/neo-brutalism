import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonProfile from '../components/PersonProfile'
import gridStyles from '../styles/grid.module.css'
import GlitchedHeader from '../components/GlitchedHeader'

// When exporting the site to a subpath (the docs/ export uses an assetPrefix),
// public assets need the prefix. The exported HTML in `docs/` uses `/neo-brutalism`
// as the base, so prefix these paths so the static pages can find the files.
const base = '/neo-brutalism'

const people = [
  {
    name: 'David Rudnick',
    role: 'Designer at Figma',
    bio: 'Designer and typographic experimenter focused on raw UI systems and expressive interfaces.',
    image: `${base}/david-rudnick-bnw.webp`,
    link: 'https://figma.com',
  },
  {
    name: 'Le Corbusier',
    role: 'Architect',
    bio: 'Pioneering modernist architect whose emphasis on raw materials and functionalism helped shape Brutalist principles.',
    image: `${base}/le-corbusier-bnw.webp`,
    link: 'https://en.wikipedia.org/wiki/Le_Corbusier',
  },
  {
    name: 'Wim Crouwel',
    role: 'Graphic Designer',
    bio: 'Dutch designer celebrated for grid-based, modular typography and rigorous modernist graphic systems.',
    image: `${base}/wim-crouwel-bnw.webp`,
    link: 'https://en.wikipedia.org/wiki/Wim_Crouwel',
  },
]

export default function People() {
  return (
    <>
      <Head>
        <title>People - Neo-Brutalism</title>
        <meta
          name="description"
          content="Key figures in the Neo-Brutalism movement."
        />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        {/* add extra spacing under the hero */}
        <div style={{ marginBottom: '48px' }}>
          <GlitchedHeader text="PEOPLE" />
        </div>

        {/* short introductory blurb above the people cards */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            color: 'var(--foundation-black)',
            textAlign: 'left',
          }}
        >
          <p style={{ margin: 0, fontFamily: 'var(--body-font)', fontSize: '1.2rem', lineHeight: '1.6' }}>
            A selection of designers, architects, and thinkers who influenced
            the Neo‑Brutalism approach — advocates of raw materials, strict
            grids, and direct, unapologetic design language. Their work
            foregrounds process and construction: surfaces are left honest,
            joins and structure are visible, and ornament is traded for
            functional clarity. Together these profiles show how typographic
            systems, material decisions, and thoughtful constraints produce
            work that is both rigorous and expressive. Explore each card to
            see selected projects and further reading on how their methods can
            inform modern design practice.
          </p>
        </div>
        <section aria-labelledby="people-heading">
          <h2 id="people-heading" className="visually-hidden">
            People
          </h2>
          <ul className={gridStyles.peopleGrid}>
            {people.map((person) => {
              return (
                <li key={person.name} className={gridStyles.gridItem}>
                  <PersonProfile person={person} isListing />
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
