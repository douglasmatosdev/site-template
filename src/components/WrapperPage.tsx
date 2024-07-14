import React from 'react'
import { Footer } from './Footer'
import TopPageContent from './TopPageContent'
import { Locale } from '#/i18n.config'

interface WrapperPageProps {
    lang: Locale
    children: React.ReactNode
}
export default function WrapperPage({ children, lang }: WrapperPageProps): JSX.Element {
    return (
        <main className="w-full bg-dmds-1 dark:bg-dmds-2 flex flex-col flex-1 md:px-8 md:pt-8">
            <TopPageContent lang={lang} />
            <section className="w-11/12 md:w-full max-w-[900px] flex-1 h-full ml-auto mr-auto">{children}</section>
            <Footer lang={lang} />
        </main>
    )
}
