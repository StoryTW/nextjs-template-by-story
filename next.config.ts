import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  turbopack: {
    rules: {
      '*.svg': [
        {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      ],
    },
  },
  sassOptions: {
    additionalData: `@use "@/assets/styles/mixins" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
