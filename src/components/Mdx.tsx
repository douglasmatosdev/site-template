import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/utils/tailwindMerge'
import Image from 'next/image'
import Pre from './Pre'
import Paragraph from './Paragraph'

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn('mt-2 text-4xl font-bold tracking-tight', className)} {...props} />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn('mt-2 text-2xl font-semibold tracking-tight', className)} {...props} />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn('mt-2 text-xl font-bold tracking-tight', className)} {...props} />
    ),
    img: ({ className, ...props }: React.HTMLAttributes<HTMLImageElement>) => (
        <Image src={''} alt={''} width={370} height={210} className={cn('my-6 w-full', className)} {...props} />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <Paragraph className={cn('break-words', className)} {...props} />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <strong className={cn('font-extrabold', className)} {...props} />
    ),
    b: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <bdo className={cn('font-bold', className)} {...props} />
    ),
    pre: Pre
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps): JSX.Element {
    const Component = useMDXComponent(code)

    return (
        <div className="my-6">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Component components={components} />
        </div>
    )
}
