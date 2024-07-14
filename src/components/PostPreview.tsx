import readingTime from 'reading-time'
import stripHtml from '@/lib/strip-html'

import { cn } from '@/utils/tailwindMerge'
import dynamic from 'next/dynamic'

const LinkI18n = dynamic(() => import('./LinkI18n'), { ssr: false })
interface PostPreviewProps {
    content: string
    href: string
    index: number
    image: string
    title: string
    description: string
    stats?: string
    className?: string
}

export default function PostPreview(props: PostPreviewProps): JSX.Element {
    const stats = readingTime(props.content)
    const description = stripHtml(props.description ?? '')

    return (
        <LinkI18n
            href={props.href}
            className={cn('border-0 flex-1 md:w-96 no-underline cursor-pointer', props?.className || '')}
        >
            <Animation index={`${props.index}`}>
                <div className="flex flex-col">
                    <div
                        style={{ backgroundImage: `url(${props.image})` }}
                        className="rounded-[8px] md:min-w-96 w-full h-[180px] mb-5 bg-cover bg-no-repeat bg-center filter-[grayscale(1)]"
                    />

                    <div className="max-w-md">
                        <h3 className="m-0 text-dmds-2 dark:text-dmds-1">{props.title}</h3>
                        <p className="text-dmds-3 dark:text-dmds-4 m-0 overflow-hidden">{description}</p>
                        <p className="mx-1 my-0 text-dmds-2 dark:text-dmds-1 uppercase inline-block font-[500] text-[12px]">
                            {stats.text}
                        </p>
                    </div>
                </div>
            </Animation>
        </LinkI18n>
    )
}

function Animation(props: { index: string; children: React.ReactNode }): JSX.Element {
    return (
        <div className="realative w-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] rounded-md" />

            {props.children}
        </div>
    )
}
