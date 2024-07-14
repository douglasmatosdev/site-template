'use client'

import { useState } from 'react'

export default function CopyButton({ text }: { text: string }): JSX.Element {
    const [isCopied, setIsCopied] = useState(false)

    const copy = async (): Promise<void> => {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 10000)
    }

    return (
        <button disabled={isCopied} onClick={copy} className="text-dmds-1">
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    )
}
