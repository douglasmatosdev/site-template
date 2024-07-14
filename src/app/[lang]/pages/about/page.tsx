import { Metadata } from 'next'
import perfilImg from '@/assets/images/perfil.jpg'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import { Locale } from '#/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import getBaseUrl from '@/lib/baseUrl'
import info from '@/utils/info'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const {
        page: { about }
    } = await getDictionary(params.lang)
    const { name } = info()
    const title = `${about.title} // ${name}`
    const description = about.description
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${params.lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: [
                {
                    url: `/images/opengraph-image.png`,
                    width: 1220,
                    height: 630,
                    alt: `${name} banner`
                }
            ]
        }
    }
}

export default async function About({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { about }
    } = await getDictionary(params.lang)
    const { name, fullName } = info()

    return (
        <main className="flex flex-col mb-8">
            <section className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">{about.title}</h1>
            </section>

            <section className="w-full h-full text-justify  break-words whitespace-break-spaces">
                <figure className="w-full h-full max-w-[500px] max-h-[500px] float-left">
                    <Image className="w-11/12" src={perfilImg} width={200} height={200} alt={`${name} perfil`} />
                    <figcaption className="h-8">
                        <p className="inline-block">{fullName} - </p>
                        <p className="inline-block">
                            <strong>
                                <i>
                                    <small>
                                        {params.lang === 'br' ? 'junho' : 'June'} 2023, Duque de Caxias, RJ -{' '}
                                        {params.lang === 'br' ? 'Brasil' : 'Brazil'}{' '}
                                    </small>
                                </i>
                            </strong>
                        </p>
                    </figcaption>
                </figure>
                <Paragraph dangerouslySetInnerHTML={{ __html: about.p1 }} />
            </section>
        </main>
    )
}
