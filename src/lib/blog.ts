import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Locale } from '#/i18n.config'

const postsDirectory = join(process.cwd(), 'src/articles')

export function getPostSlugs(lang: Locale): string[] {
    return fs.readdirSync(`${postsDirectory}/${lang}`)
}

export function getPostBySlug(slug: string, fields: string[] = [], lang: Locale): Record<string, string> {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(`${postsDirectory}/${lang}`, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {} as Record<string, string>

    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug
        }

        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = [], lang: Locale): Post[] {
    const slugs = getPostSlugs(lang)
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields, lang))
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        .reverse() as unknown as Post[]

    return posts
}
