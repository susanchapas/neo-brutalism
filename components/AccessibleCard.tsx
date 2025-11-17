import React, { useEffect, useState } from 'react'
import cardStyles from '../styles/card.module.css'

interface AccessibleCardProps {
  title: string
  description: string
  link: string
  bgVar?: string
  imageSrc?: string
  imageAlt?: string
  imageColor?: string
  showOnHover?: boolean
}

const defaultColors = ['--digital-yellow', '--glitch-purple', '--system-blue', '--status-green']

export default function AccessibleCard({ title, description, link, bgVar, imageSrc, imageAlt, imageColor, showOnHover }: AccessibleCardProps) {
  const id = `card-${title.replace(/\s+/g, '-').toLowerCase()}`
  // Force cards to use a white background site-wide while keeping text readable.
  const textColor = 'var(--foundation-black)'
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    // If the consumer passed an imageSrc and requested a color override, try to fetch
    // the SVG and inline it so we can recolor with CSS. This avoids build-time SVG
    // tooling and keeps the change localized.
    if (imageSrc && imageColor && imageSrc.endsWith('.svg')) {
      fetch(imageSrc)
        .then(res => res.text())
        .then(text => {
          if (!canceled) setSvgMarkup(text)
        })
        .catch(() => {
          if (!canceled) setSvgMarkup(null)
        })
    }
    return () => { canceled = true }
  }, [imageSrc, imageColor])

  return (
    <article
      role="group"
      aria-labelledby={id}
      className={cardStyles.neo_brutalist_card}
      style={{
        backgroundColor: 'var(--paper-white)',
        color: textColor,
      }}
      tabIndex={0}
    >
      <h2 id={id}>{title}</h2>

      {showOnHover && imageSrc ? (
        <div className={cardStyles.cardMediaWrap}>
          <div className={cardStyles.cardImage} aria-hidden={true}>
            {/* If we were able to fetch and inline an SVG, insert it so CSS can recolor it. */}
            {svgMarkup ? (
              <div
                className="inlined-svg"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
                style={imageColor ? { color: imageColor } as React.CSSProperties : undefined}
              />
            ) : (
              <img src={imageSrc} alt={imageAlt || title} />
            )}
          </div>
          <div className={cardStyles.cardInner}>
            <p>{description}</p>
            <a href={link} rel="noopener noreferrer" role="button" style={{ color: textColor, textDecoration: 'underline' }}>
              Visit Site
            </a>
          </div>
        </div>
      ) : (
        <div>
          <p>{description}</p>
          <a href={link} rel="noopener noreferrer" role="button" style={{ color: textColor, textDecoration: 'underline' }}>
            Visit Site
          </a>
        </div>
      )}
    </article>
  )
}