import { Doc } from 'contentlayer/generated'
import { mountSlugParam } from './mountSlugParam'
import { getDocFromParams } from './getDocFromParams'
import { sanitize } from './sanitize'

export async function getDocFromFiles(files: string[], params: Record<string, string>): Promise<Promise<Doc[]>> {
    const docs = (await files.map(async (file: string) => {
        const slug = mountSlugParam(params)
        const fileName = sanitize.fileToSlug(file)

        const doc = (await getDocFromParams(`${slug}/${fileName}`)) as unknown as Promise<Doc | never[]>

        return doc
    })) as unknown as Promise<Promise<Doc[]>>

    return docs
}
