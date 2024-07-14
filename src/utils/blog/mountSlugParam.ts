export function mountSlugParam(params: Record<string, string>): string {
    return Object.values(params).reduce((prev, value, i) => {
        return prev.concat(i === 0 ? value : '/' + value)
    }, '')
}
