import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for IONOS Webhosting Plus compatibility
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
