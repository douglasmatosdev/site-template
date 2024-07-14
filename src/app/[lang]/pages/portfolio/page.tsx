import { Metadata } from 'next'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import { Locale } from '#/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import getBaseUrl from '@/lib/baseUrl'
import Link from 'next/link'
import info from '@/utils/info'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const {
        page: { portfolio }
    } = await getDictionary(params.lang)
    const { name } = info()
    const title = `${portfolio.title} // ${name}`
    const description = portfolio.description
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

const portfolios = [
    {
        name: 'Fake Work',
        description: {
            br: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
            en: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'
        },
        thumb: 'https://images.stockcake.com/public/9/9/9/9999686a-777b-403a-bf17-4cab12c3e91f/robotics-programming-session-stockcake.jpg',
        repository: 'https://www.google.com',
        online: 'https://www.google.com'
    }
]

export default async function About({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { portfolio }
    } = await getDictionary(params.lang)
    const { name } = info()

    return (
        <main className="flex flex-col mb-8">
            <section className="bg-blue-500 dark:bg-blue-950 h-28 flex justify-center items-center mb-12">
                <h1 className="text-dmds-1 dark:text-dmds-1 text-4xl font-bold">{portfolio.title}</h1>
            </section>

            {portfolios.map((portf, index) => {
                return (
                    <section
                        key={`${portf.name}_${index}`}
                        className="w-full h-full text-justify  break-words whitespace-break-spaces mb-16 flex flex-col lg:flex-row"
                    >
                        <figure className="w-full h-full lg:max-w-[500px] lg:max-h-[500px] mb-4 lg:mb-0">
                            <Image
                                alt={`${name} perfil`}
                                src={portf.thumb}
                                width={500}
                                height={400}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                                className="w-11/12"
                            />
                        </figure>

                        <div className="flex flex-col w-full">
                            <h2>{portf.name}</h2>

                            <Paragraph>{portf.description[params.lang]}</Paragraph>

                            <div className="flex flex-col lg:flex-row  lg:justify-between items-center mt-auto">
                                <button
                                    type="button"
                                    className="mb-4 lg:mb-0 w-full lg:w-auto hover:bg-white transition-all duration-300 rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                                    title={portfolio.button_online}
                                >
                                    <Link target="_blank" href={portf.online} title={portfolio.button_online}>
                                        {portfolio.button_online}
                                    </Link>
                                </button>

                                <button
                                    type="button"
                                    className="w-full lg:w-auto hover:bg-white transition-all duration-300 rounded-md bg-dmds-5 dark:text-dmds-2 px-4 py-2 text-xl"
                                    title={portfolio.button_repository}
                                >
                                    <Link target="_blank" href={portf.repository} title={portfolio.button_repository}>
                                        {portfolio.button_repository}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}
