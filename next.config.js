const repo = 'MainSite'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig


// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   // trim off `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`

//   module.exports = {
//     output: 'export',
//     assetPrefix: assetPrefix,
//     basePath: basePath,
//   }
// }

// module.exports = nextConfig


