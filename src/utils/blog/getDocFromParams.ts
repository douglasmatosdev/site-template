import { Doc, allDocs } from 'contentlayer/generated'
// import { notFound } from 'next/navigation'

export async function getDocFromParams(slug: string): Promise<Doc | never[]> {
    const doc = allDocs.find(doc => doc.slugAsParams === slug) ?? []

    // if (!doc) notFound()

    return doc
}
