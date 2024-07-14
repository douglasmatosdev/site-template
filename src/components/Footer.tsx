import SocialMedias from './SocialMedias'
import { Locale } from '#/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import info from '@/utils/info'

interface FooterProps {
    lang: Locale
}
export const Footer = async ({ lang }: FooterProps): Promise<JSX.Element> => {
    const { footer } = await getDictionary(lang)
    const { name } = info()

    return (
        <footer className="flex flex-col items-center h-max px-2 pt-8 pb-8 mt-auto">
            <p className="text-sm md:text-xl">
                &copy; 2023-{new Date().getFullYear()} {name}. {footer.copy}
            </p>
            <div className="w-full md:max-w-[45%] my-6">
                <SocialMedias />
            </div>
        </footer>
    )
}
