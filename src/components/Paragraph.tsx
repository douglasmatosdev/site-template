import { cn } from '@/utils/tailwindMerge'

interface ParagraphProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children?: React.ReactNode
}
const Paragraph = (props: ParagraphProps): JSX.Element => {
    const { children } = props

    return (
        <p {...props} className={cn('mb-6 text-xl leading-9 font-light text-dmds-3 dark:text-dmds-5', props.className)}>
            {children}
        </p>
    )
}

export default Paragraph
