import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  experimental: {
    //appDir: true,
    //fontLoaders: [
    //  {
    //    loader: '@next/font/google',
    //    options: { subsets: ['latin'] },
    //  },
    //],
  },
};

export default nextConfig;
