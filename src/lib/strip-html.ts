export default function stripHtml(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, '')
}
