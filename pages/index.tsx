import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccessibleCard from '../components/AccessibleCard'
import { organizationJsonLd, websiteJsonLd } from '../utils/seo'
import typoStyles from '../styles/typography.module.css'
import gridStyles from '../styles/grid.module.css'
import layoutStyles from '../styles/layout.module.css'
import GlitchedHeader from '../components/GlitchedHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neo-Brutalism: Exposed Structure</title>
        <meta name="description" content="Discover Neo-Brutalism, the intentional collision of utilitarian structure and high-saturation digital design. Rejecting softness for thick borders and maximalist typography." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </Head>
  <Header />
  <main id="main" className={layoutStyles.layout} style={{ background: 'var(--paper-white)', color: 'var(--foundation-black)', minHeight: '100vh' }}>
        <GlitchedHeader text="EXPOSED STRUCTURE: WHAT IS NEO-BRUTALISM?" />
        <p style={{ fontFamily: 'var(--body-font)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Neo-Brutalism is the intentional collision of utilitarian structure (Brutalism's legacy) and the high-saturation friction of modern digital design. It rejects softness, shadows, and gradients in favor of thick borders, maximalist typography, and jarring color palettes.
        </p>
        <p style={{ fontFamily: 'var(--body-font)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          This style prioritizes functionality and transparency over conventional "beauty." The seams are exposed, the code is visible, and the system is operating at full capacity. The goal is clarity through chaos.
        </p>
        <section>
          <h2 className={typoStyles.subheader}>Sample Neo-Brutalist Sites</h2>
          <div className={gridStyles.homeGrid}>
            <AccessibleCard bgVar="--digital-yellow" title="FIGMA - SITE SAMPLE" description="Figma is a collaborative interface design tool that embodies Neo-Brutalist principles in its raw, functional design." link="https://figma.com" />
            <AccessibleCard bgVar="--system-blue" title="GUMROAD - SITE SAMPLE" description="Gumroad is a platform for creators to sell digital products, featuring a direct, no-nonsense approach to e-commerce." link="https://gumroad.com" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}