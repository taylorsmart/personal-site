import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import type { FrontMatter, Article, ArticleCategory } from '@/types'

const root = process.cwd()
const contentDir = path.join(root, 'content')

export function getArticleCategory(slug: string): ArticleCategory {
  return slug.startsWith('prd') ? 'product' : 'engineering'
}

export function getArticlePath(slug: string): string {
  return `/newsLetter/${getArticleCategory(slug)}/${slug}`
}

export async function getFiles(type: string): Promise<string[]> {
  const contentPath = path.join(contentDir, type)
  try {
    return fs.readdirSync(contentPath).filter((file) => file.endsWith('.mdx'))
  } catch (error) {
    console.error(`Error reading directory ${contentPath}:`, error)
    return []
  }
}

export async function getFileBySlug(
  type: string,
  slug?: string
): Promise<Article> {
  try {
    const filePath = slug
      ? path.join(contentDir, type, `${slug}.mdx`)
      : path.join(contentDir, `${type}.mdx`)

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`)
    }

    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)

    const mdxSource = await serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
      parseFrontmatter: true,
    })

    const frontMatter: FrontMatter = {
      title: '',
      summary: '',
      excerpt: '',
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || undefined,
      category: slug ? getArticleCategory(slug) : undefined,
      path: slug ? getArticlePath(slug) : undefined,
      content,
      ...data,
    }

    return {
      mdxSource,
      frontMatter,
    }
  } catch (error) {
    console.error(`Error processing file ${type}/${slug}:`, error)
    throw error
  }
}

export async function getAllFilesFrontMatter(
  type: string
): Promise<FrontMatter[]> {
  try {
    const files = await getFiles(type)

    const posts = await Promise.all(
      files.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const { frontMatter } = await getFileBySlug(type, slug)
        return frontMatter
      })
    )

    // Sort by date if available, otherwise by title
    return posts.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return (a.title || '').localeCompare(b.title || '')
    })
  } catch (error) {
    console.error(`Error getting all files for ${type}:`, error)
    return []
  }
}

export async function getArticlesByCategory(
  type: string,
  category: ArticleCategory
): Promise<FrontMatter[]> {
  const posts = await getAllFilesFrontMatter(type)
  return posts.filter((post) => post.category === category)
}
