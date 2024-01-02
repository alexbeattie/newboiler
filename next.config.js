/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alexbeattie.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
