/** @type {import('next').NextConfig} */
// Allow overriding the app context path via the BASE_PATH env var.
// If BASE_PATH is not provided, fall back to the previous behavior
// (use `/neo-brutalism` in production, or no base path in dev).
const basePath = process.env.BASE_PATH !== undefined
  ? process.env.BASE_PATH
  : (process.env.NODE_ENV === 'production' ? '/neo-brutalism' : '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  // Allow using next/image with `next export` by disabling optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig