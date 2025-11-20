Project summary

Create a fast, semantic, mobile-first Next.js informational site about Neo-Brutalism that prioritizes SEO, responsiveness, clean code, accessibility, and obvious developer ergonomics (ESLint + Prettier + scripts).

Repo / Tech choices (what Copilot should generate)

Framework: Next.js (Pages router - pages/), latest stable.

Language: TypeScript.

Styling: CSS Modules + CSS variables (no UI frameworks). Keep styles explicit so the aesthetic is clear.

Fonts: Google Fonts — Anton (H1/H2), Space Mono (labels/metadata), Inter (body).

Tooling: Node.js (>=18), Yarn or npm, TypeScript, ESLint, Prettier, Husky (precommit), lint-staged.

Accessibility tools (dev): eslint-plugin-jsx-a11y, axe-core (dev script to run axe), @testing-library/react.

SEO: Meta tags, Open Graph tags, JSON-LD structured data (Organization + WebSite + BreadcrumbList), /sitemap.xml, /robots.txt.

Testing: Basic unit tests for components and an accessibility smoke test with jest + axe.

Images: Use public/ and optimized <Image /> (Next.js) for responsive images; include alt attributes always.

CI: Provide a GitHub Actions workflow template (lint, build, test).

Project structure you should output
/package.json
/next.config.js
/tsconfig.json
/.eslintrc.js
/.prettierrc
/.husky/* (pre-commit)
/.github/workflows/ci.yml
/public/favicon.ico
/public/og-image.png
/pages/_document.tsx
/pages/_app.tsx
/pages/index.tsx
/pages/about.tsx
/pages/timeline.tsx
/pages/people.tsx
/components/
  Header.tsx
  Footer.tsx
  NavCard.tsx
  StickyNav.tsx
  AccessibleCard.tsx
  TimelineScroller.tsx
  PersonProfile.tsx
/styles/
  globals.css
  variables.css
  layout.module.css
/utils/
  seo.tsx
  analytics.ts
/scripts/
  axe-check.js
README.md

Root package.json — scripts (explicit)
{
  "name": "neo-brutalist-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint",
    "format": "prettier --write .",
    "test": "jest",
    "axe": "node ./scripts/axe-check.js",
    "prepare": "husky install"
  },
  "engines": {
    "node": ">=18"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "eslint-plugin-jsx-a11y": "latest",
    "prettier": "latest",
    "husky": "latest",
    "lint-staged": "latest",
    "jest": "latest",
    "@testing-library/react": "latest",
    "axe-core": "latest",
    "jest-environment-jsdom": "latest"
  }
}

ESLint + Prettier config (requirements)

Use eslint-config-next base.

Enable jsx-a11y rules and set serious defaults: no-autofocus disallow, anchor-has-content, aria-* enforced.

Prettier settings: 2 spaces, single quote true, trailingComma "es5".

Add lint-staged to run eslint --fix and prettier --write on staged files.

Accessibility & WCAG checklist Copilot must enforce while generating code

All interactive elements must be reachable and usable with keyboard (Tab order logical; :focus-visible styles visible).

Skip link at top: <a href="#main" class="skip-link">Skip to content</a> that becomes visible on focus.

Use semantic HTML (<header>, <nav>, <main>, <article>, <section>, <footer>).

Provide ARIA roles only when semantics are insufficient.

Provide clear focus states that meet contrast requirements.

Color contrast: ensure text contrast >= 4.5:1 for normal text, 3:1 for large text. Provide calculations or variables to enforce.

Avoid color-only UI cues; include labels/icons.

Images include meaningful alt, or role="presentation" if decorative.

Forms accessible (labels, aria-describedby for errors, error summaries).

Landmarks must be unique and correctly structured.

Provide lang="en-US" and dir="ltr".

Logical heading order (H1 on each page unique).

prefers-reduced-motion support to reduce or disable animations.

SEO checklist Copilot must enforce

Unique, descriptive <title> and <meta name="description"> per page.

rel="canonical" tag.

Structured data JSON-LD for Organization and WebSite on homepage.

Open Graph and Twitter Card meta tags.

Sitemap generation script or a static /sitemap.xml file at build time.

robots.txt exposing sitemap path.

Semantic markup for articles and lists.

Human-readable URLs: /, /about, /timeline, /people.

Server rendering for content (Next.js pages will achieve this).

Accessible link texts (no “click here”).

Use H1 once per page and unique.

Design & style system rules (implement in styles/variables.css + globals.css)

Define CSS variables for the brand palette and typography. Example (Copilot should emit exact CSS variables):

:root{
  --foundation-black: #000000;
  --paper-white: #ffffff;
  --glitch-purple: #A300FF;
  --digital-yellow: #FFEB00;
  --warning-red: #FF004E;
  --system-blue: #0050FF;
  --status-green: #aee20f;

  --h1-font: 'Anton', system-ui, sans-serif;
  --mono-font: 'Space Mono', monospace;
  --body-font: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

  --border-thick: 4px solid var(--foundation-black);
  --shadow-heavy: 5px 5px 0 var(--foundation-black);
  --page-padding: 16px;
  --max-width: 1100px;
}


Mobile-first: base rules for small screens; use media queries for min-width: 640px and up.

Typography: H1/H2 in uppercase using Anton; H3 & labels use Space Mono; body uses Inter.

Use strong, visible grid: generate CSS utility for a 12-column flex grid, then intentionally break it in components with negative margins or overlapping z-index.

All major components must show border: var(--border-thick) and box-shadow: var(--shadow-heavy).

Hover interaction: instant transform translate(2px, 2px) and color flip — but respect prefers-reduced-motion.

Sticky nav: position: sticky; top: 0; z-index: 1000; with thick border and background blocks in accent color for contrast.

Component specs (exact behavior/markup)
Header.tsx / Sticky nav

Semantic <header> containing skip link, compact logo as text SVG or plain text, and a nav <nav role="navigation" aria-label="Primary"> with visually clear focus states.

Mobile-first collapse: a hamburger icon that toggles an accessible menu (aria-expanded, aria-controls). The menu should be off-canvas but in DOM order; trap focus when open.

Sticky on scroll: position: sticky; top: 0; with accessible contrast.

Nav items: Home, About, Timeline, People, and a visible search field (search optional but include markup with label).

Provide a visually hidden counter for current page and visually emphasize active link using aria-current="page".

Footer.tsx

Design requirements:

Use <footer> with three columns on desktop and stacked on mobile.

Include: contact info (structured with <address>), site map (text links), social links (icons with accessible labels), copyright.

Microcopy: small Space Mono label [SITE STATUS] and live green dot (use aria-hidden="true" for decorative dot, but include accessible text).

Provide link to accessibility statement and link to source on GitHub.

Footer must be reachable by keyboard and have clear focus outlines for links.

NavCard.tsx or AccessibleCard.tsx

Card structure: <article> with a visible border (3-5px), heading, description, and CTA button (button must be <a> with proper role if external).

Use role="group" for grouped metadata and include aria-labelledby.

For sample sites (Figma & Gumroad) include cards linking to those pages with rel="noopener noreferrer" for external links.

TimelineScroller.tsx

Vertical scroll container on mobile and desktop with snap points (scroll-snap-type: x mandatory) for timeline items.

Provide keyboard support: arrow-left/right should move viewport to previous/next item (implement onKeyDown handlers).

Each timeline node must include a date label (Space Mono), a title, and short description.

Ensure content is accessible when paged or tabbed.

PersonProfile.tsx (for People page)

Semantic <section aria-labelledby="people-heading"> with ul of persons.

Each li contains an image framed with a thick colored border, name (H3), role, and short bio.

Include aria-describedby for extra metadata.

Page content requirements (exact H1 and specified copy included)
pages/index.tsx (Home)

H1 EXACT:
EXPOSED STRUCTURE: WHAT IS NEO-BRUTALISM?

Body text EXACT (place after H1 in a readable <p> block using the body font):

Neo-Brutalism is the intentional collision of utilitarian structure (Brutalism's legacy) and the high-saturation friction of modern digital design. It rejects softness, shadows, and gradients in favor of thick borders, maximalist typography, and jarring color palettes.

This style prioritizes functionality and transparency over conventional "beauty." The seams are exposed, the code is visible, and the system is operating at full capacity. The goal is clarity through chaos.

Under that body text, create cards linking to sample Neo-Brutalist websites — at minimum Figma and Gumroad — styled as the AccessibleCard components. Cards must include:

Title (e.g., FIGMA - SITE SAMPLE)

Short one-line description

Visual thumbnail (framed)

External link with rel="noopener noreferrer".

Hero area must be high contrast: black text over white block or white text on a full accent block (choose accessible combination), large uppercase Anton H1.

pages/about.tsx (About / Protocol)

H1 EXACT:
PROTOCOL DEFINITION: THE RULES OF NEO-BRUTALISM

Include the exact rules and paragraphs the user supplied under the headings: Colors, Layout, Typography, Components, Verbiage & Tone, Style. Use <h2> for each rule and then <p> or <ul> lists.

Keep rule blocks visually separated with color blocks and thick borders; each rule block should be focusable (tabindex=0) for keyboard scanning and include a Space Mono label (e.g., [COLORS]).

pages/timeline.tsx (Timeline)

Add a horizontal scroller that visually mimics a data tape. The timeline should cover:

Brutalist architecture origins

Swiss typography

Browser defaults and the early web

Skeuomorphism -> Flat design transition

Rise of Figma and Gumroad and their role in the style

Each timeline item: date, one-line summary, link to a source (if possible).

Include instructions in comments for Copilot to populate more nodes from curated sources if asked.

pages/people.tsx (People)

Title: PEOPLE (H1)

Create profile cards for (at minimum) David Rudnick, Anthony Rigatuso, Filippo Spiezia.

For each: image placeholder, short bio (2–3 lines), role, and one notable project link.

Use thick border frames and accent color underlines for metadata labels.

Sticky nav behavior (detailed)

Mobile-first: nav collapsed into hamburger.

On scroll, nav keeps a 1:1 visual relationship with the top of the viewport (position: sticky).

When the page scrolls past hero, nav background should flip to an accent block for contrast while preserving readable text (use aria-hidden decorative transitions if needed).

Provide prefers-reduced-motion handling: remove transitions and transforms if user has reduced motion preference.

Footer design (explicit layout)

Row 1: left — site logo (text emblem) + [SITE STATUS] (green dot + "LIVE") (Space Mono label), center — sitemap links, right — small social icon links (use inline SVGs, each aria-labeled).

Row 2 (small): accessibility statement link, privacy policy, contact email (use mailto:).

Sticky-ish behavior not required; should remain at document end but clearly visible.

Footer links include aria-describedby where needed and rel="noopener noreferrer" for external.

Accessibility statement (small page or modal)

Provide a short, plain language statement describing accessibility practices and contact method for reporting issues.

Include an automated accessibility report snapshot (a generated summary section showing contrast checks and keyboard checks that were performed) — Copilot should include a placeholder and the script to fill it using axe.

SEO & Structured data examples (generate exact JSON-LD to include in <Head>)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://your-site.example",
  "name": "Neo-Brutalist Archive",
  "logo": "https://your-site.example/logo.png",
  "sameAs": ["https://github.com/your-repo"]
}


Also generate a WebSite schema and BreadcrumbList on interior pages.

Performance & accessibility testing (scripts and guidance)

Dev script npm run axe runs a headless check via axe-core against http://localhost:3000 and writes a summary JSON to /reports/axe-report.json.

Provide guidance in README to run Lighthouse in CI and set a target score (e.g., accessibility >= 90).

Add GitHub Action job: lint, build, test, axe (axe check optional but recommended).

Keyboard / screen reader behavior (explicit)

Skip link present and top focus.

Hamburger toggles menu and places focus on first link when opened.

Modal dialogs (if any) trap focus and return focus to triggering element.

All images include alt text. If image decorative: alt="" and role="presentation".

Provide aria-live="polite" regions for dynamic messages (e.g., form submission).

Provide aria-describedby on any input error messages and aria-invalid when appropriate.

Visual & UI micro-interactions

Hover: instantaneous transform: translate(2px,2px) and color flip. But when prefers-reduced-motion is set, remove transform and color flip.

Click states must be visible (not just color change).

Provide CSS for :focus-visible to always show a thick focus outline (e.g., outline: 3px solid var(--digital-yellow); outline-offset: 3px;).

Comments for Copilot (meta instructions — include exactly in prompt)

Mobile-first: write all CSS small-screen-first. Add @media (min-width: 640px) breakpoints for larger screens.

Accessibility first: if you must choose between a flashy effect and an accessible alternative, choose accessible. Provide a progressive enhancement that enables the effect when safe.

SEO-first: prefer server-rendered content. Add meta tags per page and server-side rendered content for timeline and people.

Code quality: prioritize clear function/component boundaries, descriptive prop names, and small components (single responsibility).

No external CSS frameworks: build styles with CSS Modules and CSS variables so visual identity is explicit.

Fonts: include link rel="preload" hints and use font-display: swap.

Testing: include basic tests for navigation, header rendering, and one accessibility check for the home page.

Example of a component skeleton (paste to give the assistant something concrete)
// components/Header.tsx
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className={styles.brand}>
        <Link href="/" aria-label="Neo-Brutalist Home">
          <strong className={styles.logo}>NEO-BRUTALIST</strong>
        </Link>
      </div>
      <nav role="navigation" aria-label="Primary">
        <ul className={styles.navList}>
          <li><Link href="/" aria-current="page">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/timeline">Timeline</Link></li>
          <li><Link href="/people">People</Link></li>
        </ul>
      </nav>
    </header>
  );
}

Deliverables Copilot should produce in the first commit

Full Next.js project scaffold in repo shape given above.

All pages (index, about, timeline, people) with content placeholders filled as specified.

CSS variables and classes implementing the brand palette and the heavy borders / exposed structure aesthetic.

ESLint, Prettier, Husky, lint-staged integration.

README with instructions to run, test, and build, plus a short accessibility summary and keyboard usage tips.

Basic tests and an axe script for automated accessibility checks.

GitHub Actions workflow for CI.

Helpful developer notes (for Copilot to obey)

Keep color contrast calculations visible in comments for maintainers.

For image thumbnails, include width and height attributes for layout stability or use Next.js <Image> with sizes.

Avoid inline styles for major layout — use CSS Modules.

Keep components small and testable.

Add comments explaining why certain accessibility choices were made.

# Neo-Brutalism Informational Website – Sitemap

## Home Page (`/`)
- Hero section introducing Neo-Brutalism’s core idea  
- Key visuals (bold typography, color contrast, utilitarian grid)  
- Brief overview linking to deeper sections  
- Footer with navigation links and social credits  

---

## About (`/about`)
- Overview of Neo-Brutalism as a design philosophy  
- Origins in digital minimalism and raw structure  
- Comparison with traditional Brutalism  
- Design principle breakdown: “Digital Exposure and Color Tension”  
- Embedded quotes or manifesto statements  

---

## Timeline (`/timeline`)
- Chronological layout of Neo-Brutalism’s development  
  - Early influence (2010–2015)  
  - Web adoption phase (2016–2020)  
  - Contemporary interpretation (2021–present)  
- Interactive or scrollable visual timeline  
- Key turning points and notable projects  

---

## People (`/people`)
- Profiles of prominent designers and studios  
- Each profile includes:
  - Photo or logo  
  - Short bio  
  - Signature works and design approach  
  - Links to websites or portfolios  
- Optional filter by style or medium  

---

## Nav (persistent across all pages)
- Navigation links: Home | About | Timeline | People  

## Footer (persistent across all pages)
- Contact or credit line  
- Social media or design resources  


Use the whole markdown document you just received as the authoritative spec. Generate a new Next.js TypeScript project that meets every checkbox in the spec: file structure, TypeScript pages, components, CSS variables, accessibility behaviors, SEO tags/JSON-LD, ESLint/Prettier config, Husky hooks, basic unit tests, and a simple CI workflow. Prioritize semantic HTML, keyboard navigation, mobile-first layout, and the Neo-Brutalist brand variables. Implement the home page copy exactly as provided and create accessible cards for Figma and Gumroad. Put all assets in /public. Add an axe script that outputs a JSON report. Keep code clean, commented, and ready to run with npm install && npm run dev. Do not add any third-party UI frameworks.

README content (short, precise, include commands)

Include a README.md with:

Run locally: npm install → npm run dev

Build: npm run build → npm run start

Lint & format: npm run lint and npm run format

Test: npm run test

Accessibility scan: npm run axe

Contribution notes and link to accessibility statement.

CI template (short)

Lint, build, and run npm run test on push to main.

Optionally run npm run axe if a headless environment is available.

Final instructions to Copilot (tone & priority)

Produce readable, well-documented code.

Use TypeScript types for props and keep components purely presentational unless state is required.

Hard requirement: H1 in each page must match the exact copy requested above.

Hard requirement: mobile-first, sticky nav, footer design, Node.js tooling, ESLint, Prettier.

Hard requirement: WCAG AA conformance and keyboard access.

Closing reflection

This site should look like a system that refuses to hide its seams: heavy borders, aggressive typography, and bright color blocks that force attention. It is a public record, not a friendly brochure. Build the code so that future maintainers can see the decisions on every line: the fonts chosen, the focus rules, the contrast checks. That transparency matters — design as a declaration, code as a ledger.