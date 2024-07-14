import info from '@/utils/info'
import Link from 'next/link'

interface SocialMediasProps {
    labels?: boolean
}

export default function SocialMedias(props: SocialMediasProps): JSX.Element {
    const { labels = true } = props
    const { socialMedias } = info()
    const socialMediasArray = Object.entries(socialMedias).map(([key, value]) => ({
        name: key,
        username: value.name,
        url: value.url,
        icon: value?.icon
    }))

    return (
        <div className="w-full">
            <ul className="flex justify-start items-center">
                {socialMediasArray.map((sm, i) => {
                    return (
                        <li key={`${sm.name}_${i}`} className="list-none flex-1">
                            <Link
                                href={sm.url}
                                className="flex flex-col justify-center items-center w-full h-full opacity-75 hover:opacity-100 focus:opacity-100 transition-all duration-300"
                            >
                                <span className="text-4xl">{sm?.icon}</span>
                                {labels ? <small>{sm.name}</small> : null}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
