import React from 'react'
import { Mdx } from '@/components/Mdx'
import { Doc, allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { mountSlugParam } from '@/utils/blog/mountSlugParam'
import { Metadata } from 'next'
import stripHtml from '@/lib/strip-html'
import mdToHtml from '@/lib/mdToHtml'
import BlogDate from '@/components/BlogDate'
import getBaseUrl from '@/lib/baseUrl'
import { Locale } from '#/i18n.config'
import info from '@/utils/info'

interface PageProps {
    params: {
        lang: Locale
        slug: string
    }
}

type GenerateMetadataProps = {
    params: { slug: string; lang: Locale }
}

const getCachedDocFromParams = async (slug: string): Promise<Doc> => {
    const doc = await getDocFromParams(slug)

    return doc
}

export async function generateStaticParams(): Promise<string[]> {
    return allDocs.map(doc => doc.slugAsParams) // .slice(0, 10) // precache on first 10 posts
}

async function getDocFromParams(slug: string): Promise<Doc> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const { name } = info()
    const doc = await getCachedDocFromParams(`${params.lang}/${params.slug}`)

    const title = `Post // ${doc.title}`
    const description = stripHtml(doc.description ?? '').replaceAll('**', '')
    const url = getBaseUrl() + '/' + params.lang

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
                    url: doc.image,
                    width: 1220,
                    height: 630,
                    alt: `${name} banner`
                }
            ]
        }
    }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
    const doc = await getCachedDocFromParams(mountSlugParam(params))

    const description = await mdToHtml(doc.description ?? '')

    return (
        <div className="mt-6">
            <h1 className="font-bold text-2xl text-dmds-2 dark:text-dmds-1 mb-6">{doc.title}</h1>
            <h2
                className="font-light text-lg text-dmds-3 dark:text-dmds-4 mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <small className="font-semibold text-md text-dmds-4 mb-6">
                <BlogDate dateString={doc.createdAt} /> - {doc.author}
            </small>
            <Mdx code={doc.body.code} />
        </div>
    )
}
