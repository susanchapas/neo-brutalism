import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TimelineScroller from '../components/TimelineScroller'
import GlitchedHeader from '../components/GlitchedHeader'

export default function Timeline() {
  return (
    <>
      <Head>
        <title>Timeline - Neo-Brutalism</title>
        <meta
          name="description"
          content="Chronological development of Neo-Brutalism design."
        />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <GlitchedHeader text="TIMELINE" />
        <h2 className="visually-hidden">Historical Timeline Events</h2>
        <TimelineScroller />
      </main>
      <Footer />
    </>
  )
}
