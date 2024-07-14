import { getAllPosts } from '@/lib/blog'
import stripHtml from '@/lib/strip-html'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import getBaseUrl from '@/lib/baseUrl'
import { Locale } from '#/i18n.config'
import info from '@/utils/info'

const PostsPreviewList = dynamic(() => import('@/components/PostsPreviewList'), {
    ssr: false
})

function getPosts(lang: Locale): Post[] {
    const allPosts = getAllPosts(['createdAt', 'slug', 'title', 'image', 'content', 'description'], lang)

    return allPosts
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { name } = info()
    const allPosts = getPosts(params.lang) as Post[]
    const title = `Blog // ${name}`
    const description = stripHtml(
        `Here you your description with posts lenght <strong>${allPosts.length} articles</strong>.`
    )
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${params.lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: `/images/random.webp`,
                    width: 1220,
                    height: 630,
                    alt: `${name} banner`
                }
            ]
        }
    }
}

export default function Posts({ params }: { params: { lang: Locale } }): JSX.Element {
    const allPosts = getPosts(params.lang) as Post[]
    const description = `Here you description with your posts length <strong>${allPosts.length} articles</strong>.`

    return (
        <>
            <PostsPreviewList description={description} allPosts={allPosts} />
        </>
    )
}
