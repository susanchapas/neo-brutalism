import typoStyles from '../styles/typography.module.css'

interface GlitchedHeaderProps {
  text: string
}

export default function GlitchedHeader({ text }: GlitchedHeaderProps) {
  return (
    <div style={{ position: 'relative', marginBottom: '2rem' }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--digital-yellow)',
        zIndex: 0,
      }}></div>
      <h1 className={typoStyles.main_header} style={{ position: 'relative', zIndex: 1 }}>
        {text}
      </h1>
    </div>
  )
}
