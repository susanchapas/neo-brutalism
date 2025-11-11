import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>Protocol Definition - Neo-Brutalism</title>
        <meta name="description" content="The rules and principles of Neo-Brutalism design." />
      </Head>
      <Header />
      <main id="main" style={{ padding: 'var(--page-padding)' }}>
        <h1>PROTOCOL DEFINITION: THE RULES OF NEO-BRUTALISM</h1>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Colors</h2>
          <p>Neo-Brutalism uses a limited palette of high-contrast, saturated colors. Foundation black (#000000) and paper white (#ffffff) form the base. Accent colors like glitch purple (#A300FF), digital yellow (#FFEB00), warning red (#FF004E), system blue (#0050FF), and status green (#20FFB5) are used sparingly for emphasis. Avoid gradients, shadows, or subtle hues—colors should be bold and jarring.</p>
        </section>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Layout</h2>
          <p>Mobile-first design with a 12-column grid system. Use thick borders (4px solid black) and heavy box shadows (5px 5px 0 black) on all major components. Intentionally break the grid with negative margins or overlapping elements to create tension. Max width of 1100px for content, with 16px padding on mobile and 32px on desktop.</p>
        </section>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Typography</h2>
          <p>H1/H2 in Anton (uppercase), labels/metadata in Space Mono, body text in Inter. All text is left-aligned. Use font-display: swap for performance. Avoid text shadows or effects—typography should be raw and direct.</p>
        </section>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Components</h2>
          <p>Buttons, cards, and forms use the thick border and shadow. Hover states: instant transform translate(2px, 2px) and color flip. Respect prefers-reduced-motion. All interactive elements must be keyboard accessible with visible focus outlines (3px solid digital yellow, offset 3px).</p>
        </section>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Verbiage & Tone</h2>
          <p>Direct, utilitarian language. No marketing fluff. Explain concepts clearly but bluntly. Use technical terms without apology. The tone is authoritative, not friendly.</p>
        </section>
        <section style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow-heavy)', padding: '16px', margin: '16px 0' }}>
          <h2>Style</h2>
          <p>Reject minimalism. Embrace maximalism in structure. Expose the underlying grid and seams. The design should look like a system operating at full capacity—raw, functional, and unapologetic.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}