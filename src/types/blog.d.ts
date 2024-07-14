declare type BlogCategories = {
    name: string
    subcategories?: BlogCategories[]
    slug: string
}

declare type CategoryTree = {
    parentId?: number | string | null
    id?: number | string
    name?: string
    slug?: string
    source?: string
    files?: string[]
    children?: CategoryTree[]
}

declare interface Post {
    title: string
    description: string
    createdAt: string
    author: string
    image: string
    published: boolean
    lastModified?: string
    content: string
    slug: string
    tags: string
    lang: string
}
