/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/neo-brutalism' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
}

module.exports = nextConfig