import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '#/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const locales = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    let locale = 'br'
    try {
        locale = matchLocale(languages, locales, i18n.defaultLocale)
    } catch (error) {
        locale = 'br'
    }

    return locale ?? 'br'
}

export function middleware(request: NextRequest): NextResponse<unknown> | undefined {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|manifest.json).*)'
    ]
}
