import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlitchedHeader from '../components/GlitchedHeader'
import layoutStyles from '../styles/layout.module.css'

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility Statement - Neo-Brutalism</title>
        <meta name="description" content="Accessibility commitment and features of the Neo-Brutalism design system." />
      </Head>
      <Header />
      <main id="main" className={layoutStyles.layout} style={{ background: 'var(--paper-white)', color: 'var(--foundation-black)' }}>
        <GlitchedHeader text="ACCESSIBILITY STATEMENT" />
        
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            OUR COMMITMENT
          </h2>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Neo-Brutalism is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            CONFORMANCE STATUS
          </h2>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            This site strives to conform with WCAG 2.1 Level AA standards. We aim to provide:
          </p>
          <ul style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)' }}>
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Keyboard navigation support for all interactive elements</li>
            <li>High contrast color ratios (minimum 7:1 for normal text)</li>
            <li>Clear focus indicators on all focusable elements</li>
            <li>Alternative text for images</li>
            <li>ARIA labels and live regions where appropriate</li>
            <li>Skip links to main content</li>
            <li>Responsive design that works across devices and screen sizes</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            ACCESSIBILITY FEATURES
          </h2>
          <ul style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)' }}>
            <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using Tab, Enter, and arrow keys</li>
            <li><strong>Focus Indicators:</strong> Yellow outlines (3px) with 3px offset appear on focused elements</li>
            <li><strong>High Contrast:</strong> Black borders and text on white/colored backgrounds ensure readability</li>
            <li><strong>Reduced Motion:</strong> Respects prefers-reduced-motion user preferences</li>
            <li><strong>Screen Reader Support:</strong> Proper heading hierarchy, landmarks, and ARIA attributes</li>
            <li><strong>Mobile Responsive:</strong> Touch-friendly targets and responsive layouts</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            KNOWN LIMITATIONS
          </h2>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            While we strive for full accessibility, we acknowledge the following areas for improvement:
          </p>
          <ul style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)' }}>
            <li>Some decorative animations may be distracting (we respect prefers-reduced-motion)</li>
            <li>The glitched header effect may be challenging for some users with cognitive disabilities</li>
            <li>Bold visual design may be overwhelming for users sensitive to high-contrast interfaces</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            FEEDBACK
          </h2>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            We welcome your feedback on the accessibility of this site. If you encounter any accessibility barriers, please contact us:
          </p>
          <ul style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)', listStyle: 'none' }}>
            <li>
              <strong>GitHub:</strong>{' '}
              <a 
                href="https://github.com/susanchapas/neo-brutalism/issues" 
                style={{ color: 'var(--system-blue)', textDecoration: 'underline' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Report an accessibility issue on GitHub (opens in new tab)"
              >
                Report an issue
              </a>
            </li>
          </ul>

          <h2 style={{ fontFamily: 'var(--h1-font)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            TECHNICAL SPECIFICATIONS
          </h2>
          <p style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            This website is built with:
          </p>
          <ul style={{ fontFamily: 'var(--body-font)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)' }}>
            <li>Next.js for server-side rendering and optimization</li>
            <li>Semantic HTML5 elements</li>
            <li>CSS with proper focus management</li>
            <li>WAI-ARIA attributes for enhanced screen reader support</li>
          </ul>

          <p style={{ fontFamily: 'var(--mono-font)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#666', marginTop: '3rem', marginBottom: '2rem' }}>
            Last updated: November 24, 2025
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
