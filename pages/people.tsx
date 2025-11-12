import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonProfile from '../components/PersonProfile'
import typoStyles from '../styles/typography.module.css'
import GlitchedHeader from '../components/GlitchedHeader'

const people = [
  {
    name: 'David Rudnick',
    role: 'Designer at Figma',
    bio: 'Known for pushing the boundaries of design with raw, functional aesthetics.',
    image: '/placeholder.jpg',
    link: 'https://figma.com'
  },
  {
    name: 'Anthony Rigatuso',
    role: 'Designer',
    bio: 'Advocate for brutalist design principles in modern interfaces.',
    image: '/placeholder.jpg',
    link: 'https://example.com'
  },
  {
    name: 'Filippo Spiezia',
    role: 'Designer',
    bio: 'Explores the intersection of architecture and digital design.',
    image: '/placeholder.jpg',
    link: 'https://example.com'
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
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {people.map((person, i) => {
              // cycle through a palette that keeps text readable
              const palette = ['--digital-yellow', '--status-green', '--system-blue']
              const bg = palette[i % palette.length]
              return (
                <li key={person.name}>
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