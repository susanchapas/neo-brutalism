import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TimelineScroller from '../components/TimelineScroller'

export default function Timeline() {
  return (
    <>
      <Head>
        <title>Timeline - Neo-Brutalism</title>
        <meta name="description" content="Chronological development of Neo-Brutalism design." />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <h1>TIMELINE</h1>
        <TimelineScroller />
      </main>
      <Footer />
    </>
  )
}