/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['**'],
    unoptimized: true
  },
  output: 'standalone'
};

export default nextConfig; 