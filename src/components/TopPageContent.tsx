import dynamic from 'next/dynamic'
import Nav from './Nav'
import LoadIcon from './LoadIcon'
import { Locale } from '#/i18n.config'

const TogggleTheme = dynamic(() => import('./ToggleTheme'), {
    loading: () => <LoadIcon />,
    ssr: false
})
const ToggleLanguage = dynamic(() => import('./ToggleLanguage'), {
    ssr: false
})

interface TopPageContentProps {
    lang: Locale
}

export default function TopPageContent({ lang }: TopPageContentProps): JSX.Element {
    return (
        <>
            <div className="flex justify-end px-8 py-4">
                <ToggleLanguage lang={lang} />
                <TogggleTheme />
            </div>
            <Nav />
        </>
    )
}
