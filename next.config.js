/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH !== undefined
  ? process.env.BASE_PATH
  : (process.env.NODE_ENV === 'production' ? '/neo-brutalism' : '')

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
}

module.exports = nextConfig