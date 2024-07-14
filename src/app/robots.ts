import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/'
            }
        ],
        sitemap: `${process.env.NEXT_PULIC_BASE_URL}/sitemap.xml`
    }
}
