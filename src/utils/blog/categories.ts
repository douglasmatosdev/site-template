import { readdirSync } from 'fs'

const blogPath = 'src/articles/blog'

const mountSlug = (str: string): string => {
    if (!str) return ''

    return str.toLocaleLowerCase().replaceAll(' ', '-').trim()
}

const getAllFilesNames = (source: string): string[] => {
    return readdirSync(source, { withFileTypes: true })
        .filter(file => file.isFile())
        .map(file => file.name)
}

const getAllFoldersNames = (source: string): string[] => {
    return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
}

const mountObjects = (arr: string[], root: CategoryTree, source: string): CategoryTree[] => {
    return arr.map((a, i) => {
        const newSource = `${source}/${mountSlug(a)}`
        if (typeof root?.id === 'undefined') {
            return {
                id: `root_${i}`,
                parentId: null,
                name: a,
                files: getAllFilesNames(`${newSource}`),
                source: newSource,
                slug: mountSlug(a),
                children: []
            }
        } else {
            return {
                id: `${root.name}__${i}`,
                parentId: root.id,
                name: a,
                files: getAllFilesNames(`${blogPath}/${newSource}`),
                source: newSource,
                slug: mountSlug(a),
                children: []
            }
        }
    })
}

const mountTree = (source: string, data: CategoryTree[], root = {} as CategoryTree): void => {
    let historySource = source.replace(`${blogPath}/`, '')
    const foldersNamesList = getAllFoldersNames(source)
    const objectsReferences = mountObjects(foldersNamesList, root, historySource)

    objectsReferences.forEach(or => {
        data.push(or)
        historySource = `${historySource}/${or.name}`
        mountTree(`${source}/${or.name}`, data, or)
    })
}

export default async function blogCategories(): Promise<CategoryTree[]> {
    const tree = [] as CategoryTree[]
    mountTree(blogPath, tree)

    const idMapping = tree.reduce(
        (acc, el, i) => {
            acc[el.id as string] = i

            return acc
        },
        {} as { [key: string]: number }
    )
    const categories = [] as CategoryTree[]
    tree.forEach(el => {
        if (el.parentId === null) {
            categories.push(el)

            return
        }
        const parentEl = tree[idMapping[el.parentId as string]]
        parentEl.children = [...(parentEl.children || []), el]
    })

    // console.clear()
    // console.log(JSON.stringify(categories, null, 2))

    return categories
}
