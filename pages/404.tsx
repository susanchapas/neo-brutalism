import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import typoStyles from '../styles/typography.module.css'
import errorStyles from '../styles/error.module.css'

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
      <main id="main" className={errorStyles.errorContainer}>
        <h1 className={`${typoStyles.main_header} ${errorStyles.errorCode}`}>
          404
        </h1>
        <p className={errorStyles.errorMessage}>
          ERROR: PAGE NOT FOUND. THE REQUESTED RESOURCE DOES NOT EXIST IN THIS
          SYSTEM.
        </p>
        <Link href="/" className={errorStyles.homeButton}>
          [RETURN TO HOME]
        </Link>
      </main>
      <Footer />
    </>
  )
}
