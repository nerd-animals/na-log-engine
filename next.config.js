// next.config.js
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/na-log',
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
