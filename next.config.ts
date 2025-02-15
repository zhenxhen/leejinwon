import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/leejinwon',
  assetPrefix: '/leejinwon/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
