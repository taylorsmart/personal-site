import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
// import renderToString from 'next-mdx-remote/render-to-string'
import {serialize } from 'next-mdx-remote/serialize'
// import readingTime from 'reading-time'
// import { remark-autolink-headings ,remark-slug, remark-code-titles } from '@hashicorp/remark-plugins'

import MDXComponents from '../molecules/atoms/mdx-components'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root,'content', type))
}


export async function getFileBySlug(type, slug) {
  const source = slug
      ? fs.readFileSync(path.join(root, 'content', type, `${slug}.mdx`), 'utf8')
      : fs.readFileSync(path.join(root, 'content', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content)

  return {
      mdxSource,
      frontMatter: {
          wordCount: content.split(/\s+/gu).length,
          // readingTime: readingTime(content),
          slug: slug || null,
          content: content,
          ...data
      }
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'content', type))

  return files.reduce((allPosts, postSlug) => {
      const directory = postSlug.includes('prd') ? 'product/' : 'engineering/'

      const source = fs.readFileSync(
          path.join(root, 'content', type, postSlug),
          'utf8'
      )
      const { data } = matter(source)

      return [
          {
              ...data,
              slug: directory + postSlug.replace('.mdx', '')
          },
          ...allPosts
      ]
  }, [])
}

// export async function getFileBySlug() {
//     // MDX text - can be from a local file, database, anywhere
//     const source = `---
//   title: Test
//   ---

//   Some **mdx** text, with a component <Test name={title}/>
//     `

//     const { content, data } = matter(source)
//     const mdxSource = await serialize(content, { scope: data })
//     return { props: { source: mdxSource, frontMatter: data } }
//   }