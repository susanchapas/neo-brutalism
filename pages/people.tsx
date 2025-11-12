import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonProfile from '../components/PersonProfile'
import gridStyles from '../styles/grid.module.css'
import typoStyles from '../styles/typography.module.css'
import GlitchedHeader from '../components/GlitchedHeader'

const people = [
  {
    name: 'David Rudnick',
    role: 'Designer at Figma',
    bio: 'Designer and typographic experimenter focused on raw UI systems and expressive interfaces.',
    image: '/david-rudnick-bnw.svg',
    imageHover: '/david-rudnick-on-hover.svg',
    link: 'https://figma.com'
  },
  {
    name: 'Le Corbusier',
    role: 'Architect',
    bio: 'Pioneering modernist architect whose emphasis on raw materials and functionalism helped shape Brutalist principles.',
    image: '/le-corbusier-bnw.svg',
    imageHover: '/le-corbusier-on-hover.svg',
    link: 'https://en.wikipedia.org/wiki/Le_Corbusier'
  },
  {
    name: 'Wim Crouwel',
    role: 'Graphic Designer',
    bio: 'Dutch designer celebrated for grid-based, modular typography and rigorous modernist graphic systems.',
    image: '/wim-crouwel-bnw.svg',
    imageHover: '/wim-crouwel-on-hover.svg',
    link: 'https://en.wikipedia.org/wiki/Wim_Crouwel'
  }
]

export default function People() {
  return (
    <>
      <Head>
        <title>People - Neo-Brutalism</title>
        <meta name="description" content="Key figures in the Neo-Brutalism movement." />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)', minHeight: '100vh' }}>
        <GlitchedHeader text="PEOPLE" />
        <section aria-labelledby="people-heading">
          <h2 id="people-heading" className="visually-hidden">People</h2>
          <ul className={gridStyles.peopleGrid}>
            {people.map((person, i) => {
              // cycle through a palette that keeps text readable
              const palette = ['--digital-yellow', '--status-green', '--system-blue']
              const bg = palette[i % palette.length]
              return (
                <li key={person.name} className={gridStyles.gridItem}>
                  <PersonProfile person={person} bgVar={bg} />
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