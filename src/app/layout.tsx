import type { Metadata } from 'next'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import ThemeProvider from '@/providers/themeProvider'
import { IsClientCtxProvider } from '@/hooks/useIsClient'
import { ToastContainer } from 'react-toastify'
import { Locale, i18n } from '#/i18n.config'
import getBaseUrl from '@/lib/baseUrl'
import dynamic from 'next/dynamic'
import info from '@/utils/info'

const ScrollToTopButton = dynamic(() => import('@/components/ScrollToTopButton'), { ssr: false })

export async function generateMetadata(): Promise<Metadata> {
    const { fullName, description } = info()
    const title = `Home Page // ${fullName}`
    const baseUrl = getBaseUrl() + '/en'

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        openGraph: {
            url: baseUrl,
            title,
            description,
            images: [
                {
                    url: `/images/opengraph-image.png`,
                    width: 1220,
                    height: 630,
                    alt: `${fullName} banner`
                }
            ]
        }
    }
}

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
    return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { lang: Locale }
}): JSX.Element {
    return (
        <html suppressHydrationWarning={true} lang={params.lang}>
            <body>
                <ToastContainer />
                <IsClientCtxProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <ScrollToTopButton />
                        {children}
                    </ThemeProvider>
                </IsClientCtxProvider>
            </body>
        </html>
    )
}
