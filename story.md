# Project Story: Neo-Brutalism Site

## Overview

This is a static informational website about Neo-Brutalism design principles, built with Next.js, TypeScript, and CSS Modules. The project was created through AI-human collaboration between November 11-24, 2024, resulting in a production site deployed to GitHub Pages.

**Live site:** https://susanchapas.github.io/neo-brutalism  
**Repository:** https://github.com/susanchapas/neo-brutalism

## Time Tracking

**Total duration:** 13 days (November 11-24, 2024)  
**Total active development time:** ~20-25 hours

**Phases:**
- Initial scaffold: November 11 (1 day, ~2 hours)
  - Project setup, Next.js configuration, initial file structure
- Core styling & design system: November 11-12 (2 days, ~4 hours)
  - CSS variables, color palette, typography, card components
- Timeline implementation: November 12-14 (3 days, ~5 hours)
  - Multiple iterations from horizontal to vertical to winding path design
- People page refinement: November 14-15 (2 days, ~3 hours)
  - Portrait positioning, card layouts, accordion behavior
- Footer decoration & responsive fixes: November 15-19 (5 days, ~4 hours)
  - FooterDecor component, mobile overflow fixes, spacing adjustments
- Final audit & accessibility pass: November 23-24 (2 days, ~2-3 hours)
  - Accessibility testing, font optimization, final cleanup

**Total commits:** 95  
**Pull requests:** 2 (both merged)

## Collaboration Process

The work followed a specification-driven approach. The human created a detailed markdown specification (`instructions.md`) describing exact requirements for design, accessibility, SEO, and code structure. The AI (GitHub Copilot) implemented this specification, with the human providing iterative feedback through commits and course corrections.

### Workflow Pattern

1. Human provided detailed requirements upfront
2. AI generated initial scaffold matching the specification
3. Human tested in browser and reported issues
4. AI fixed issues based on specific bug reports
5. Repeat cycle 3-4 until feature complete
6. Human made direct commits for fine-tuning when faster than AI iteration

### Division of Labor

**AI handled:**
- Initial project scaffold (Next.js, TypeScript, tooling setup)
- Component generation from specifications
- CSS implementation of design system
- Accessibility patterns (ARIA attributes, keyboard navigation)
- SEO meta tags and structured data
- Test file generation
- Bug fixes based on specific reports

**Human handled:**
- Writing the comprehensive specification document
- Testing each change in a live browser
- Making final decisions on visual adjustments
- Writing git commit messages
- Direct CSS tweaks when iteration was inefficient
- Quality assurance and accessibility testing
- Deployment configuration

## Key Decisions

### Technical Stack

**Next.js 13.5.11 (Pages Router):** Chosen for static export compatibility with GitHub Pages. Used Pages Router instead of App Router because the specification was written before App Router became standard.

**TypeScript:** Required for type safety and developer experience.

**CSS Modules:** Preferred over CSS-in-JS or frameworks to keep styling explicit and maintainable. Every style decision visible in source code.

**No UI frameworks:** Deliberate choice to ensure design system remained transparent and didn't get abstracted away by third-party components.

### Design System Implementation

**CSS Variables:** All colors, fonts, spacing, borders, and shadows defined as CSS custom properties in `styles/variables.css`. This made the brand system a single source of truth.

**Mobile-first:** All CSS written for small screens first, with `@media (min-width: X)` queries adding desktop enhancements.

**Heavy borders and shadows:** Implemented with `--border-thick: 4px solid var(--foundation-black)` and `--shadow-heavy: 5px 5px 0 var(--foundation-black)`. Applied consistently across all interactive elements.

### Component Architecture

Components kept small and single-purpose:
- `Header.tsx`: Navigation with hamburger menu for mobile
- `Footer.tsx`: Site info with status indicator
- `FooterDecor.tsx`: Decorative SVG element (pure visual)
- `AccessibleCard.tsx`: Reusable card with ARIA support
- `GlitchedHeader.tsx`: Asymmetric hero text component
- `PersonProfile.tsx`: People page profile cards
- `TimelineScroller.tsx`: Timeline visualization
- `WindingPath.tsx`: SVG connector for timeline

Each component has corresponding CSS Module for scoped styles.

### Accessibility Approach

**WCAG AA compliance:** Target level set from day one. All interactive elements keyboard-accessible, proper ARIA labels, color contrast checked.

**Skip link:** Implemented at top of each page, visible on focus.

**Hamburger menu:** Full keyboard support with focus trap when open, `aria-expanded` and `aria-controls` attributes.

**Semantic HTML:** Used `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` throughout instead of generic `<div>` containers.

**Focus indicators:** Visible focus styles on all interactive elements using `:focus-visible` with high-contrast outlines.

**Reduced motion:** `prefers-reduced-motion` media query used to disable animations for users who request it.

### Timeline Evolution

The timeline feature went through multiple iterations:

1. **Horizontal scroller:** Initial implementation had cards in a horizontal scroll container
2. **Vertical with connectors:** Switched to vertical layout with connecting lines
3. **Winding path:** Added angular SVG path connecting timeline nodes for visual interest
4. **Pure CSS implementation:** Final version used CSS positioning instead of heavy SVG manipulation

This iteration happened because horizontal scrolling felt wrong on desktop, and the vertical version needed visual interest beyond a straight line.

### People Page Challenges

The people page portraits caused the most layout issues. Requirements: portraits should "overhang" their card containers, creating visual tension. Problems encountered:

- Portraits caused horizontal scroll on mobile
- Cards didn't size properly to contain content
- Accordion toggle buttons got covered by portraits
- Portrait alignment inconsistent across different content lengths

Solutions:
- Made cards use grid layout with explicit column sizing
- Clamped portrait sizes with `max-width`
- Positioned toggle button with higher z-index
- Made entire card header clickable, not just button
- Added `overflow: hidden` to container, not individual cards

Took approximately 15 commits to get this correct.

### Footer Decoration

Added decorative SVG motif at top of footer late in the project. This element is purely decorative (no semantic meaning). Used `aria-hidden="true"` to hide from screen readers. Required careful z-index and shadow work to ensure it didn't clip or interfere with main content.

### Static Export Configuration

GitHub Pages requires static HTML. Configuration:

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/neo-brutalism',
  assetPrefix: '/neo-brutalism/',
};
```

This disables Next.js image optimization (requires Node server) and sets proper base paths for GitHub Pages subdirectory hosting.

### Font Loading

Initially used Google Fonts CDN. Switched to self-hosted fonts (commit `3b1a825`) to:
- Improve performance (no external requests)
- Ensure fonts always available offline
- Avoid GDPR concerns with Google tracking

Fonts added to `/public/fonts/` and loaded via `@font-face` in `styles/fonts.css`.

### Testing Strategy

**Jest + Testing Library:** Unit tests for components checking rendering and accessibility.

**Axe-core:** Script in `scripts/axe-check.js` runs automated accessibility checks against localhost.

**Manual testing:** Human tested all functionality in browser, especially:
- Keyboard navigation
- Responsive breakpoints
- Focus states
- Screen reader compatibility (VoiceOver and NVDA)

No visual regression testing or E2E tests. Kept testing lightweight and focused on accessibility.

## Challenges & Solutions

### Challenge: Horizontal Scroll on Mobile
**Cause:** Elements with fixed widths or absolute positioning escaping container bounds.  
**Solution:** Added `overflow-x: hidden` to page container and clamped widths with `max-width: 100vw`.

### Challenge: Footer Spacing on Mobile
**Cause:** Fixed `min-height: 100vh` on main content causing footer overlap.  
**Solution:** Removed fixed height, used `margin-bottom` on main content instead.

### Challenge: Accordion Layout Shift
**Cause:** About page accordions changed page height when opened, causing jarring scroll jumps.  
**Solution:** Removed accordion behavior, kept all content visible. Neo-Brutalism favors "everything exposed" over progressive disclosure anyway.

### Challenge: Static Export with Next.js Image
**Cause:** `next/image` requires Node server for optimization.  
**Solution:** Set `images.unoptimized: true` in config, used regular `<img>` tags where optimization not needed.

### Challenge: Husky Hooks Not Running
**Cause:** Husky needs to be initialized after package install.  
**Solution:** Added `"prepare": "husky install"` script to package.json, runs automatically on `npm install`.

### Challenge: Active Navigation Link Detection
**Cause:** Next.js Link component doesn't automatically set `aria-current`.  
**Solution:** Used `useRouter()` hook to check current path and conditionally add `aria-current="page"`.

### Challenge: Hamburger Menu Focus Management
**Cause:** Focus remained on hamburger button when menu opened, required extra tab to reach first link.  
**Solution:** Added focus management to programmatically focus first menu item when menu opens.

## What Worked Well

**Detailed specification:** Having a comprehensive spec document upfront made the AI collaboration efficient. Less ambiguity, fewer back-and-forth clarifications.

**Commit granularity:** Small, focused commits made it easy to track progress and revert when needed.

**CSS Modules:** Scoped styling prevented cascade conflicts and made it easy to understand component-specific styles.

**CSS Variables:** Centralized design tokens made global changes fast (e.g., changing brand color affected entire site instantly).

**Accessibility-first:** Building accessibility in from the start was easier than retrofitting later.

**Static export:** Simple deployment model (just commit `docs/` folder) with no server maintenance.

## What Was Difficult

**Layout debugging:** CSS layout issues (especially with overlapping/overhanging elements) required many iterations. Browser DevTools inspection by human was necessary.

**AI iteration speed:** For CSS tweaks, direct human editing was often faster than describing the change to AI and waiting for file update.

**Context limits:** AI sometimes forgot earlier decisions when working on later features. Had to reference the spec document repeatedly.

**Visual QA:** AI can't see the rendered page. Human had to be eyes and report exact visual bugs.

**Commit message style drift:** Later in project, commit messages became less consistent as human got tired of writing detailed messages.

## Lessons Learned

### For AI-Human Collaboration

**Write detailed specifications:** The more detailed the requirements document, the better the AI implementation. Vague requirements lead to iteration cycles.

**AI is better at generation than refinement:** AI excels at creating initial structures from specs. Humans are better at fine-tuning CSS by 2px.

**Visual bugs require human feedback:** AI can't verify visual correctness. Human must test in browser and report specific issues.

**Know when to switch modes:** Sometimes typing CSS directly is faster than describing the change. Pick the right tool for the task.

### For Web Projects

**Accessibility from day one:** Building accessibility into the initial implementation is far easier than adding it later.

**CSS variables are powerful:** Design tokens as CSS custom properties made theming and global changes trivial.

**Mobile-first prevents desktop-only thinking:** Starting with mobile constraints forced better layout decisions.

**Static exports simplify deployment:** No server, no database, no runtime complexity. Just HTML files.

**Semantic HTML improves accessibility:** Using proper elements (`<nav>`, `<article>`, etc.) instead of `<div>` gives screen readers context.

### For Neo-Brutalism Design

**Consistency matters:** Heavy borders and shadows must be applied consistently or the visual system breaks down.

**Accessibility and Brutalism align:** Both prioritize function and clarity. High contrast and large text help both aesthetics and accessibility.

**Don't hide structure:** The "exposed seams" philosophy means showing the grid, the CSS variables, the component boundaries. Makes debugging easier too.

**Typography carries the style:** With no gradients or subtle shadows, typography weight and color contrast become the primary visual tools.

## Project Statistics

- **Files created:** 45+
- **Lines of code:** ~3,000 (excluding dependencies)
- **Components:** 8
- **Pages:** 5
- **CSS Modules:** 10
- **Tests:** 3 test suites
- **Accessibility score:** 100 (Lighthouse)
- **Performance score:** 95-100 (Lighthouse)
- **Commits:** 95
- **Contributors:** 2 (1 human, 1 AI)

## Future Considerations

**Not implemented:**
- Search functionality (navigation structure in spec but not implemented)
- Analytics tracking (removed `utils/analytics.ts` before final commit)
- Blog or content management system
- Dark mode variant
- Progressive Web App features

**Potential improvements:**
- Upgrade to Next.js 14+ with App Router
- Add E2E tests with Playwright
- Implement proper image optimization pipeline
- Add animation polish with Framer Motion
- Create component library documentation

## Conclusion

This project demonstrates that AI-human collaboration can produce production-quality web applications when:

1. Requirements are clearly specified upfront
2. Human provides visual QA and feedback
3. AI handles code generation and structure
4. Division of labor plays to each participant's strengths

The resulting site is accessible, performant, and maintainable. The code is readable and follows modern web development practices. The design system is explicit and documented in the code itself.

The collaboration model worked because the human set clear constraints and the AI operated within them. When the AI proposed solutions that didn't work visually, the human caught it and requested corrections. When the human needed boilerplate or repetitive code, the AI generated it quickly.

The specification document was the key artifact. It served as both requirements and as a reference throughout the project. Without it, the project would have required far more back-and-forth communication and likely would have taken longer.

Total wall-clock time: 13 days. Active development time: approximately 20-25 hours spread across those days. For a production static site with full accessibility compliance, responsive design, and proper tooling, this represents efficient development.
