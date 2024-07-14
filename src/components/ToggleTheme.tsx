'use client'
import { useToggleSystemOrAppTheme } from '@/hooks/useToggleSystemOrAppTheme'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

export default function TogggleTheme(): JSX.Element {
    const { theme, toggleTheme } = useToggleSystemOrAppTheme()

    const isDarkMode = theme === 'dark'

    return (
        <div
            onClick={toggleTheme}
            className="flex items-center cursor-pointer"
            title={`Change theme to ${isDarkMode ? 'light mode' : 'dark mode'}`}
        >
            {isDarkMode ? (
                <BsFillSunFill className="z-[999] cursor-pointer text-2xl text-yellow-500" />
            ) : (
                <BsFillMoonStarsFill className="z-[999] cursor-pointer text-2xl text-blue-800" />
            )}
        </div>
    )
}
