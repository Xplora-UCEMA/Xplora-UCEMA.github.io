/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
    unoptimized: true
  },
  // Añade esto para debugging
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        poll: 1000,
      }
    }
    return config
  }
};

export default nextConfig; 