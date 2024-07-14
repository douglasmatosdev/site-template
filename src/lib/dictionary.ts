import 'server-only'
import type { Locale } from '#/i18n.config'

const dictionaries = {
    br: () => import('@/dictionaries/br.json').then(module => module.default),
    en: () => import('@/dictionaries/en.json').then(module => module.default)
}
export const getDictionary = async (locale: Locale): Promise<Dictionaries> => await dictionaries[locale]()
