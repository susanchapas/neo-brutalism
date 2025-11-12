import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TimelineScroller from '../components/TimelineScroller'
import typoStyles from '../styles/typography.module.css'
import GlitchedHeader from '../components/GlitchedHeader'

export default function Timeline() {
  return (
    <>
      <Head>
        <title>Timeline - Neo-Brutalism</title>
        <meta name="description" content="Chronological development of Neo-Brutalism design." />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <GlitchedHeader text="TIMELINE" />
        <TimelineScroller />
      </main>
      <Footer />
    </>
  )
}