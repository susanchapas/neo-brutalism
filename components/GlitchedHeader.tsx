import typoStyles from '../styles/typography.module.css'
import layoutStyles from '../styles/layout.module.css'

interface GlitchedHeaderProps {
  text: string
}

export default function GlitchedHeader({ text }: GlitchedHeaderProps) {
  return (
    /* Outer wrapper is full-width so the yellow background can span the viewport.
       The headline itself is wrapped in the site's centered `.layout` so the
       text remains constrained while the color block stays full-bleed. */
    <div style={{ position: 'relative', marginBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'var(--digital-yellow)',
        zIndex: 0,
      }} />
      <div className={layoutStyles.layout}>
        <h1 className={typoStyles.main_header} style={{ position: 'relative', zIndex: 1 }}>
          {text}
        </h1>
      </div>
    </div>
  )
}
