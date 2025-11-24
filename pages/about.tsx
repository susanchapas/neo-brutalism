import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlitchedHeader from '../components/GlitchedHeader'
import aboutStyles from '../styles/about.module.css'
import typoStyles from '../styles/typography.module.css'

const accordionData = [
  {
    title: '[COLORS]',
    content: 'Neo-Brutalism uses a limited palette of high-contrast, saturated colors. Foundation black (#000000) and paper white (#ffffff) form the base. Accent colors like glitch purple (#A300FF), digital yellow (#FFEB00), warning red (#FF004E), system blue (#0050FF), and status green (#20FFB5) are used sparingly for emphasis. Avoid gradients, shadows, or subtle hues—colors should be bold and jarring.'
  },
  {
    title: '[LAYOUT]',
    content: 'Mobile-first design with a 12-column grid system. Use thick borders (4px solid black) and heavy box shadows (5px 5px 0 black) on all major components. Intentionally break the grid with negative margins or overlapping elements to create tension. Max width of 1100px for content, with 16px padding on mobile and 32px on desktop.'
  },
  {
    title: '[TYPOGRAPHY]',
    content: 'H1/H2 in Anton (uppercase), labels/metadata in Space Mono, body text in Inter. All text is left-aligned. Use font-display: swap for performance. Avoid text shadows or effects—typography should be raw and direct.'
  },
  {
    title: '[COMPONENTS]',
    content: 'Buttons, cards, and forms use the thick border and shadow. Hover states: instant transform translate(2px, 2px) and color flip. Respect prefers-reduced-motion. All interactive elements must be keyboard accessible with visible focus outlines (3px solid digital yellow, offset 3px).'
  },
  {
    title: '[VERBIAGE & TONE]',
    content: 'Direct, utilitarian language. No marketing fluff. Explain concepts clearly but bluntly. Use technical terms without apology. The tone is authoritative, not friendly.'
  },
  {
    title: '[STYLE]',
    content: 'Reject minimalism. Embrace maximalism in structure. Expose the underlying grid and seams. The design should look like a system operating at full capacity—raw, functional, and unapologetic.'
  }
];

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className={aboutStyles.accordionItem}>
    <button
      aria-expanded={isOpen}
      className={`${aboutStyles.accordionButton} ${isOpen ? aboutStyles.active : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
    <div className={`${aboutStyles.accordionPanel} ${isOpen ? aboutStyles.show : ''}`}>
      <div className={aboutStyles.contentContainer}>
        <p>{content}</p>
      </div>
    </div>
  </div>
);

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>About — Neo-Brutalism</title>
        <meta name="description" content="The rules and principles of Neo-Brutalism design." />
      </Head>
      <Header />
      <main id="main">
        <GlitchedHeader text="THE RULES OF NEO-BRUTALISM" />

        <div className={aboutStyles.overview}>
          <p>This page outlines the core principles of Neo-Brutalism, a design philosophy that prioritizes raw functionality, unapologetic aesthetics, and a rejection of minimalist trends. The following sections define the rules for color, layout, typography, and more.</p>
        </div>

        <div className={aboutStyles.centered}>
          <div className={aboutStyles.dashboard}>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}