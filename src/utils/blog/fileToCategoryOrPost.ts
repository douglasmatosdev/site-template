import { sanitize } from './sanitize'

export function fileToCategoryOrPost(files: string[]): CategoryTree[] {
    return files.map(f => ({
        name: sanitize.fileToSlug(f),
        slug: sanitize.fileToSlug(f)
    }))
}
