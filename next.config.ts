import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /*experimental: {
    //appDir: true,
    //fontLoaders: [
    //  {
    //    loader: '@next/font/google',
    //    options: { subsets: ['latin'] },
    //  },
    //],
  },*/
};

export default nextConfig;
