'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const CopyButton = dynamic(() => import('@/components/CopyButton'), {
    ssr: false
})

type PreProps = {
    'data-language'?: 'javascript'
    children?: {
        $$typeof: symbol
        type: string
        key: null | string
        ref: null | string
        props: {
            children: string
        }
        _owner: null | string
        _store: Record<string, never>
    }
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>
export default function Pre(props: PreProps): JSX.Element {
    const [textContet, setTextContent] = useState<string>('')
    const preRef = useRef<HTMLPreElement>(null)

    const lang = props['data-language'] ?? 'Text'

    useEffect(() => {
        const childrens = preRef.current?.children
        if (childrens?.length) {
            const codeContainer = Array.from(childrens).find(c =>
                Array.from(c.attributes).find(attr => attr.textContent === 'code')
            )
            if (codeContainer) {
                const code = Array.from(codeContainer?.children).find(c => c?.tagName?.toLocaleLowerCase() === 'code')

                if (code && code?.textContent) {
                    setTextContent(code.textContent)
                }
            }
        }
    }, [])

    return (
        <pre ref={preRef} {...props} className="rounded-xl border mb-6">
            <div className="flex justify-between rounded-t-xl py-2 px-4 bg-dmds-3">
                <span className="text-dmds-5 dark:text-dmds-5">{lang}</span>
                <CopyButton text={textContet} />
            </div>
            <div data-code="code" className="p-4 overflow-x-auto">
                {props.children}
            </div>
        </pre>
    )
}
