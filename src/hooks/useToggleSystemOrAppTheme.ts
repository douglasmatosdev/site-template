'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
import { useIsClient } from './useIsClient'

export const useToggleSystemOrAppTheme = (): {
    theme: ThemeModes
    toggleTheme: () => void
} => {
    const isClient = useIsClient()

    const getCurrentTheme = (): boolean => !!isClient && window.matchMedia('(prefers-color-scheme: dark)').matches

    const { theme, setTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState<ThemeModes>(getCurrentTheme() ? 'dark' : 'light')

    const toggleTheme = useCallback(() => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme)
        setCurrentTheme(newTheme)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme])

    const mediaQueryListener = (e: MediaQueryListEvent): void => {
        setCurrentTheme(e.matches ? 'dark' : 'light')
    }

    useEffect(() => {
        if (theme !== 'system') {
            setCurrentTheme(theme as ThemeModes)
        }

        if (!isClient) return
        const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const currentTheme = darkThemeMediaQuery.matches ? 'dark' : 'light'

        setTheme(currentTheme)
        setCurrentTheme(currentTheme)

        darkThemeMediaQuery.addEventListener('change', mediaQueryListener)

        return () => darkThemeMediaQuery.removeEventListener('change', mediaQueryListener)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        theme: theme as ThemeModes,
        toggleTheme
    }
}
