const dictionaries = {
    br: () => import('@/dictionaries/br.json').then(module => module.default),
    en: () => import('@/dictionaries/en.json').then(module => module.default)
}
const dictionaryPromise = dictionaries.en()
const dictionaryResolved = await dictionaries.en()

declare type DictionariesPromise = typeof dictionaryPromise
declare type Dictionaries = typeof dictionaryResolved
