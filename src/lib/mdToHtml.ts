import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default async function mdToHtml(value: string): Promise<string> {
    const file = await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(value)

    return String(file)
}
