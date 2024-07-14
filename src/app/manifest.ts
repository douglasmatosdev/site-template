import getBaseUrl from '@/lib/baseUrl'
import info from '@/utils/info'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    const baseUrl = getBaseUrl()
    const { name, fullName, description } = info()

    return {
        theme_color: '#222',
        background_color: '#222',
        display: 'standalone',
        scope: baseUrl,
        start_url: baseUrl,
        name: fullName,
        short_name: name,
        description,
        icons: [
            {
                src: '/images/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/images/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            },
            {
                src: '/images/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png'
            },
            {
                src: '/images/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
}
