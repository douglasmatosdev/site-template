'use client'
import { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useScroll, useAnimationControls, Variants, motion } from 'framer-motion'

const isBrowser = (): boolean => typeof window !== 'undefined' // The approach recommended by Next.js

function scrollToTop(): void {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
}

export default function ScrollToTopButton(): JSX.Element {
    const { scrollYProgress } = useScroll()
    const controls = useAnimationControls()

    useEffect(() => {
        return scrollYProgress.on('change', latestValue => {
            if (latestValue > 0.1) {
                controls.start('show')
            } else {
                controls.start('hide')
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <motion.button
            className="fixed bottom-4 md:bottom-10 right-4 md:right-10 p-2 md:p-4 z-[300] bg-amber-500 rounded-full"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}
        >
            <p className="text-dmds-2 dark:text-dmds-1 text-xl md:text-2xl">
                <FaArrowUp />
            </p>
        </motion.button>
    )
}
