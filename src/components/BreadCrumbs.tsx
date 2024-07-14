'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Locale } from '#/i18n.config'

type TBreadCrumbProps = {
    lang: Locale
    homeElement: ReactNode
    separator: ReactNode
    containerClasses?: string
    listClasses?: string
    activeClasses?: string
    capitalizeLinks?: boolean
}

const dictionary: Record<string, Record<string, string>> = {
    br: {
        home: 'Início',
        about: 'Sobre',
        contact: 'Contato',
        privacy: 'Pivacidade',
        pages: 'Páginas'
    },
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy',
        pages: 'pages'
    }
}

const avoidLinks = ['br', 'en', 'pages']

export default function Breadcrumbs({
    lang,
    homeElement,
    separator,
    containerClasses,
    listClasses,
    activeClasses,
    capitalizeLinks
}: TBreadCrumbProps): JSX.Element {
    const dic = dictionary[lang]
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`
                    const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    const itemLink: string = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    const item = dic[itemLink.toLocaleLowerCase()] || itemLink
                    const toBeAvoid = avoidLinks.includes(itemLink.toLocaleLowerCase())

                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={toBeAvoid ? '/' : href}>{item}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )
}
