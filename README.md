# Neo-Brutalist Site

A Next.js TypeScript project showcasing Neo-Brutalism design principles.

Live Site: https://susanchapas.github.io/neo-brutalism

[AI collaboration process with time stamps] (story.md)

## Run Locally

1. Install dependencies: `npm install`

2. Start development server: `npm run dev`

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

1. Build the project: `npm run build`

2. Start production server: `npm run start`

## Development

- Lint: `npm run lint`

- Format: `npm run format`

- Test: `npm run test`

- Accessibility scan: `npm run axe` (requires dev server running)

## Accessibility

This site prioritizes WCAG AA compliance. See our [accessibility statement](/accessibility) for details.

## Contributing

Please ensure all changes pass linting, formatting, and tests. Use `npm run prepare` to set up Husky hooks.

## CI

The project uses GitHub Actions for CI, running lint, build, and tests on push to main.

## Scripts & Usage

This project provides several npm scripts defined in `package.json`. Run them from the `neo-brutalism/` directory with `npm run <script>`.

- `dev` — Run the Next.js development server on port 3000.
   - Usage: `npm run dev` → Open http://localhost:3000

- `build` — Build the Next.js app for production (server-required mode).
   - Usage: `npm run build`

- `export:docs` — Build and export a static HTML version of the site into the `docs/` folder (suitable for GitHub Pages).
   - Usage: `npm run export:docs` (runs `next build && next export -o docs`)
   - Result: a `docs/` folder containing `index.html`, route HTML files and an `_next/` static asset folder.

- `start` — Start the Next.js production server (after `npm run build`).
   - Usage: `npm run start`

- `lint` — Run Next.js/ESLint checks.
   - Usage: `npm run lint`

- `format` — Run Prettier to format files.
   - Usage: `npm run format`

- `test` — Run the Jest test suite.
   - Usage: `npm run test`

- `axe` — Run the accessibility check (script under `scripts/axe-check.js`). Typically run while a dev server is running.
   - Usage: `npm run axe`

- `prepare` — Sets up Husky Git hooks (run automatically on install).

Notes & recommendations:

- GitHub Pages: to publish the static export, commit the generated `docs/` folder and the updated `package.json` to the branch you use for Pages (e.g., `main`/`master`) and set the Pages source to that branch and `/docs` in the repository Settings → Pages.

- Previewing the exported site locally:
   - Python: `python3 -m http.server --directory docs 8080`
   - Node: `npx http-server docs -p 8080`

- Node / Next compatibility: this repository currently pins `next` to `^13.5.11` and `react`/`react-dom` to `18.2.0` so builds work with Node 18. If you upgrade to `next@latest` you may need Node >= 20.9.0.

- Long-term (optional): consider switching to Next's `output: 'export'` in `next.config.js` instead of `next export`, since `next export` is deprecated for newer Next.js versions. If you want, I can update `next.config.js` and scripts to use that approach.

# husky-hook-test