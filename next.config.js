// next.config.js
const { withContentlayer } = require('next-contentlayer');

const githubOwner = process.env.GITHUB_REPOSITORY.split('/')[0];
const githubRepo = process.env.GITHUB_REPOSITORY.split('/')[1];
const basePath =
  githubRepo === `${githubOwner}.github.io` ? '/' : `/${githubRepo}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
