import { cn } from '@/utils/tailwindMerge'
import Link from 'next/link'

interface AnchorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    children?: React.ReactNode
    href: string
    ref?: React.Ref<HTMLAnchorElement> | undefined
}
const Anchor = (props: AnchorProps): JSX.Element => {
    const { children, href, ref = null } = props

    return (
        <Link
            {...props}
            ref={ref}
            href={href}
            className={cn(
                'mb-6 text-xl leading-9 font-light text-dmds-3 dark:text-dmds-5 cursor-pointer',
                props.className
            )}
        >
            <u>
                <strong>{children}</strong>
            </u>
        </Link>
    )
}

export default Anchor
