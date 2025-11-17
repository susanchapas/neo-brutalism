/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/neo-brutalism' : ''

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