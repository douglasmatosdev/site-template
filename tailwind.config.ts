import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['sans-serif'],
                ranga: 'Ranga, cursive'
            },
            colors: {
                'dmds-1': '#fff',
                'dmds-2': '#222',
                'dmds-3': '#444',
                'dmds-4': '#999',
                'dmds-5': '#bebebe'
            }
        }
    },
    plugins: []
}
export default config
