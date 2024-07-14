'use client'

import { i18n, type Locale } from '#/i18n.config'
import { usePathname, useRouter } from 'next/navigation'

interface ToggleLanguageProps {
    lang: Locale
}

export default function ToggleLanguage({ lang }: ToggleLanguageProps): JSX.Element {
    const pathName = usePathname()
    const router = useRouter()
    const storageLang = localStorage.getItem('lang')
    const selectedLanguage = storageLang || lang

    if (!storageLang) {
        localStorage.setItem('lang', lang)
    }

    const redirectedPathName = (locale: Locale): void => {
        if (!pathName) {
            router.push('/')
        }
        const segments = pathName.split('/')
        segments[1] = locale

        localStorage.setItem('lang', locale)

        router.push(segments.join('/'))
    }
    const labels = {
        br: 'pt-BR',
        en: 'en-US'
    } as Record<string, string>

    return (
        <div>
            <ul className=" flex justify-between cursor-pointer mr-6">
                {i18n.locales.map(locale => {
                    return (
                        <li
                            key={locale}
                            className={`${selectedLanguage === locale ? 'bg-blue-500' : ''} rounded-md py-2 px-4`}
                        >
                            <button onClick={() => redirectedPathName(locale)}>{labels[locale]}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
