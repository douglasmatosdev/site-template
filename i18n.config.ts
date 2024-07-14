export const i18n = {
    defaultLocale: 'br',
    locales: ['br', 'en']
} as const

export type Locale = (typeof i18n)['locales'][number]
