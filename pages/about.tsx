import { useState, useEffect, memo } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlitchedHeader from '../components/GlitchedHeader'
import aboutStyles from '../styles/about.module.css'
import visualStyles from '../styles/about-visuals.module.css'

// Color data
const primaryColors = [
  { name: 'Black', hex: '#000000', var: '--foundation-black' },
  { name: 'White', hex: '#FFFFFF', var: '--paper-white' },
]

const secondaryColors = [
  { name: 'Purple', hex: '#A300FF', var: '--glitch-purple' },
  { name: 'Yellow', hex: '#FFEB00', var: '--digital-yellow' },
  { name: 'Red', hex: '#FF004E', var: '--warning-red' },
  { name: 'Blue', hex: '#0050FF', var: '--system-blue' },
  { name: 'Green', hex: '#20FFB5', var: '--status-green' },
]

// Typography data
const fonts = [
  {
    name: 'Anton',
    example: 'HEADLINES SCREAM',
    family: 'var(--h1-font)',
    color: '--glitch-purple',
    url: 'https://fonts.google.com/specimen/Anton',
  },
  {
    name: 'Space Mono',
    example: 'TECHNICAL.LABELS',
    family: 'var(--mono-font)',
    color: '--warning-red',
    url: 'https://fonts.google.com/specimen/Space+Mono',
  },
  {
    name: 'Inter',
    example: 'Body text stays direct',
    family: 'var(--body-font)',
    color: '--system-blue',
    url: 'https://fonts.google.com/specimen/Inter',
  },
]

// Verbiage samples
const verbiageSamples = [
  'NO FLUFF',
  'DIRECT',
  'RAW FUNCTION',
  'UTILITARIAN',
  'TECHNICAL',
  'AUTHORITATIVE',
  'UNAPOLOGETIC',
  'SYSTEM ACTIVE',
  'EXECUTE',
  'OPERATIONAL',
]

// Visual Components - Memoized for performance
const ColorSwatches = memo(function ColorSwatches() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1500)
  }

  return (
    <div className={visualStyles.colorSection}>
      <div className={visualStyles.colorGroup}>
        <div className={visualStyles.colorGroupTitle}>Primary Colors</div>
        <div className={visualStyles.colorGrid}>
          {primaryColors.map((color) => (
            <div key={color.hex} className={visualStyles.colorSwatch}>
              <div
                className={visualStyles.colorCircle}
                style={{ backgroundColor: color.hex }}
                role="img"
                aria-label={`${color.name} color swatch`}
              />
              <div className={visualStyles.colorInfo}>
                <div className={visualStyles.colorName}>{color.name}</div>
                <div className={visualStyles.colorHex}>{color.hex}</div>
                <button
                  className={`${visualStyles.copyButton} ${copiedHex === color.hex ? visualStyles.copied : ''}`}
                  onClick={() => copyToClipboard(color.hex)}
                  aria-label={`Copy ${color.name} hex code`}
                >
                  {copiedHex === color.hex ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={visualStyles.colorGroup}>
        <div className={visualStyles.colorGroupTitle}>Secondary Colors</div>
        <div className={visualStyles.colorGrid}>
          {secondaryColors.map((color) => (
            <div key={color.hex} className={visualStyles.colorSwatch}>
              <div
                className={visualStyles.colorCircle}
                style={{ backgroundColor: color.hex }}
                role="img"
                aria-label={`${color.name} color swatch`}
              />
              <div className={visualStyles.colorInfo}>
                <div className={visualStyles.colorName}>{color.name}</div>
                <div className={visualStyles.colorHex}>{color.hex}</div>
                <button
                  className={`${visualStyles.copyButton} ${copiedHex === color.hex ? visualStyles.copied : ''}`}
                  onClick={() => copyToClipboard(color.hex)}
                  aria-label={`Copy ${color.name} hex code`}
                >
                  {copiedHex === color.hex ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const GridMockup = memo(function GridMockup() {
  return (
    <div className={visualStyles.gridMockupWrapper}>
      <div
        className={visualStyles.gridMockup}
        role="img"
        aria-label="Neo-brutalist grid layout example"
      >
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className={visualStyles.gridCell} />
        ))}
      </div>
    </div>
  )
})

const TypographySample = memo(function TypographySample() {
  return (
    <div className={visualStyles.typographySection}>
      {fonts.map((font) => (
        <div key={font.name} className={visualStyles.fontSample}>
          <div className={visualStyles.fontDisplay}>
            <div className={visualStyles.fontName}>{font.name}</div>
            <div
              className={visualStyles.fontExample}
              style={{
                fontFamily: font.family,
                color: `var(${font.color})`,
              }}
            >
              {font.example}
            </div>
          </div>
          <a
            href={font.url}
            target="_blank"
            rel="noopener noreferrer"
            className={visualStyles.downloadButton}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Download
          </a>
        </div>
      ))}
    </div>
  )
})

const ComponentMockup = memo(function ComponentMockup() {
  return (
    <div className={visualStyles.componentMockup}>
      <div className={visualStyles.sampleCard}>
        <div className={visualStyles.sampleCardTitle}>Sample Card</div>
        <p>Heavy borders and bold shadows define every element.</p>
        <div className={visualStyles.buttonGroup}>
          <button className={visualStyles.sampleButton}>Primary</button>
          <button
            className={`${visualStyles.sampleButton} ${visualStyles.secondary}`}
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  )
})

const AnimatedWords = memo(function AnimatedWords() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % verbiageSamples.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Colors without yellow and green: purple, red, blue
  const colors = ['glitch-purple', 'warning-red', 'system-blue']

  return (
    <div
      className={visualStyles.animatedWords}
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={visualStyles.wordDisplay}
        style={{ color: `var(--${colors[currentIndex % colors.length]})` }}
        key={currentIndex}
      >
        {verbiageSamples[currentIndex]}
      </div>
    </div>
  )
})

const StyleVisual = memo(function StyleVisual() {
  return (
    <div className={visualStyles.styleVisual}>
      <div
        className={visualStyles.layeredSquares}
        role="img"
        aria-label="Layered geometric shapes representing maximalist design"
      >
        <div className={visualStyles.square} />
        <div className={visualStyles.square} />
        <div className={visualStyles.square} />
        <div className={visualStyles.square} />
      </div>
    </div>
  )
})

const accordionData = [
  {
    title: '[COLORS]',
    content:
      'Neo-Brutalism uses a limited palette of high-contrast, saturated colors. Avoid gradients, shadows, or subtle hues—colors should be bold and jarring.',
    VisualComponent: ColorSwatches,
  },
  {
    title: '[LAYOUT]',
    content:
      'Bold grids with heavy borders and shadows define space. Break the grid deliberately to create visual tension and rawness.',
    VisualComponent: GridMockup,
  },
  {
    title: '[TYPOGRAPHY]',
    content:
      'Headlines scream in bold uppercase. Monospace labels ground technical details. Body text stays clean and direct—no decoration, no softness.',
    VisualComponent: TypographySample,
  },
  {
    title: '[COMPONENTS]',
    content:
      'All interactive elements use thick borders and shadows. Hover states feature instant transform and color flip with keyboard-accessible focus outlines.',
    VisualComponent: ComponentMockup,
  },
  {
    title: '[VERBIAGE & TONE]',
    content:
      'Direct, utilitarian language. No marketing fluff. The tone is authoritative, not friendly.',
    VisualComponent: AnimatedWords,
  },
  {
    title: '[STYLE]',
    content:
      'Reject minimalism. Embrace maximalism—expose the grid and seams. The design should look like a system operating at full capacity.',
    VisualComponent: StyleVisual,
  },
]

const AccordionItem = memo(function AccordionItem({
  title,
  content,
  VisualComponent,
  isOpen,
  onClick,
}: {
  title: string
  content: string
  VisualComponent: React.ComponentType
  isOpen: boolean
  onClick: () => void
}) {
  // Track if this accordion has ever been opened to preserve content after closing
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setHasBeenOpened(true)
    }
  }, [isOpen, hasBeenOpened])

  return (
    <div className={aboutStyles.accordionItem}>
      <button
        type="button"
        aria-expanded={isOpen}
        className={`${aboutStyles.accordionButton} ${isOpen ? aboutStyles.active : ''}`}
        onClick={onClick}
      >
        {title}
      </button>
      <div
        className={`${aboutStyles.accordionPanel} ${isOpen ? aboutStyles.show : ''}`}
      >
        <div className={aboutStyles.contentContainer}>
          <p>{content}</p>
          {/* Only render visual component after accordion has been opened once */}
          {hasBeenOpened && <VisualComponent />}
        </div>
      </div>
    </div>
  )
})

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>About — Neo-Brutalism</title>
        <meta
          name="description"
          content="The rules and principles of Neo-Brutalism design."
        />
      </Head>
      <Header />
      <main id="main">
        <GlitchedHeader text="THE RULES OF NEO-BRUTALISM" />

        <div className={aboutStyles.overview}>
          <p>
            This page outlines the core principles of Neo-Brutalism, a design
            philosophy that prioritizes raw functionality, unapologetic
            aesthetics, and a rejection of minimalist trends. The following
            sections define the rules for color, layout, typography, and more.
          </p>
        </div>

        <div className={aboutStyles.centered}>
          <div className={aboutStyles.dashboard}>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                VisualComponent={item.VisualComponent}
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
