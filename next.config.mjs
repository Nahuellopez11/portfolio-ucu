import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      root: '/Users/nahuellopez/Documents/carpetajoaco'
    }
  }
};

export default withMDX(config);
