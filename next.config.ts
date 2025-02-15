import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: isProduction ? '/leejinwon' : '',
  assetPrefix: isProduction ? 'https://zhenxhen.github.io/leejinwon' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
