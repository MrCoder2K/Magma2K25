/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: false, // works in Next.js 14
  },
};

module.exports = nextConfig;
