/** @type {import('next').NextConfig} */
// Allow overriding the app context path via the BASE_PATH env var.
// If BASE_PATH is not provided, fall back to the previous behavior
// (use `/neo-brutalism` in production, or no base path in dev).
const basePath =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : process.env.NODE_ENV === 'production'
      ? '/neo-brutalism'
      : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  // Allow using next/image with `next export` by disabling optimization
  images: {
    unoptimized: true,
  },
  // Add security headers for better Lighthouse scores
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';",
          },
        ],
      },
    ]
  },
  // Compress responses
  compress: true,
  // Enable SWC minification for smaller bundle sizes
  swcMinify: true,
}

module.exports = nextConfig
