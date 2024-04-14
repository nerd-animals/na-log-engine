// next.config.js
function getBasePath() {
  if (!process.env.GITHUB_REPOSITORY) {
    return '';
  }
  const githubOwner = process.env.GITHUB_REPOSITORY.split('/')[0];
  const githubRepo = process.env.GITHUB_REPOSITORY.split('/')[1];
  const basePath =
    githubRepo === `${githubOwner}.github.io` ? '' : `/${githubRepo}`;

  return basePath;
}

function getDomain() {
  if (!process.env.GITHUB_REPOSITORY) {
    return '';
  }

  const githubOwner = process.env.GITHUB_REPOSITORY.split('/')[0];

  return `${githubOwner}.github.io`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: getBasePath(),
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },

  publicRuntimeConfig: { basePath: getBasePath(), domain: getDomain() },
};

module.exports = nextConfig;
