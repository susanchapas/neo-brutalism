import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TimelineScroller from '../components/TimelineScroller'
import typoStyles from '../styles/typography.module.css'

export default function Timeline() {
  return (
    <>
      <Head>
        <title>Timeline - Neo-Brutalism</title>
        <meta name="description" content="Chronological development of Neo-Brutalism design." />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <h1 className={typoStyles.main_header}>TIMELINE</h1>
        <TimelineScroller />
      </main>
      <Footer />
    </>
  )
}