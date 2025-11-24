import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import typoStyles from '../styles/typography.module.css'
import layoutStyles from '../styles/layout.module.css'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Neo-Brutalism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main
        id="main"
        className={layoutStyles.layout}
        style={{
          background: 'var(--paper-white)',
          color: 'var(--foundation-black)',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'var(--page-padding)',
        }}
      >
        <h1
          className={typoStyles.main_header}
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          404
        </h1>
        <p
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '600px',
          }}
        >
          ERROR: PAGE NOT FOUND. THE REQUESTED RESOURCE DOES NOT EXIST IN THIS
          SYSTEM.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'var(--digital-yellow)',
            color: 'var(--foundation-black)',
            textDecoration: 'none',
            fontFamily: 'var(--mono-font)',
            fontWeight: 'bold',
            border: '4px solid var(--foundation-black)',
            boxShadow: '5px 5px 0 var(--foundation-black)',
            transition: 'transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(2px, 2px)'
            e.currentTarget.style.boxShadow =
              '3px 3px 0 var(--foundation-black)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)'
            e.currentTarget.style.boxShadow =
              '5px 5px 0 var(--foundation-black)'
          }}
        >
          [RETURN TO HOME]
        </Link>
      </main>
      <Footer />
    </>
  )
}
