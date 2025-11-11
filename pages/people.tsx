import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PersonProfile from '../components/PersonProfile'

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
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <h1>PEOPLE</h1>
        <section aria-labelledby="people-heading">
          <h2 id="people-heading" className="visually-hidden">People</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {people.map(person => <li key={person.name}><PersonProfile person={person} /></li>)}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}