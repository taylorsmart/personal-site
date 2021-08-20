// https://github.com/vercel/next.js/tree/canary/packages/next-mdx

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX()