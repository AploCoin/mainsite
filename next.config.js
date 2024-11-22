const repo = "MainSite";
var assetPrefix = `/${repo}/`;
var basePath = `/${repo}`;
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
var nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
}

//module.exports = withNextIntl(nextConfig);

const isGithubActions = process.env.GITHUB_ACTIONS || false

//let assetPrefix = ''
//let basePath = '/'

if (isGithubActions) {

  //   // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/`
  basePath = ``
  nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
}

module.exports = withNextIntl(nextConfig);

// module.exports = nextConfig
