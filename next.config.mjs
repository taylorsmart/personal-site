// // https://github.com/vercel/next.js/tree/canary/packages/next-mdx
// import remarkGfm from 'remark-gfm'

// const withMDX = require("@next/mdx", "remark-gfm")({
//   extension: /\.(md|mdx)$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// });

// module.exports = withMDX();

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
