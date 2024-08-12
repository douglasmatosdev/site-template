import logoLoremIpsum from '@/assets/images/logo-lorem-ipsum.png'
import Image from 'next/image'

export interface LogoProps {
    containerClassName?: string
}

export const Logo = ({ containerClassName = 'w-16 h-16 md:w-32 md:h-32' }: LogoProps): JSX.Element => {
    return (
        <div className={`rounded-full relative ${containerClassName}`}>
            <figure>
                <a href="/">
                    <Image
                        className={`top-[5%] left-[5%] w-[90%] h-[90%] absolute animation-rotate rounded-full`}
                        src={logoLoremIpsum}
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                </a>
            </figure>
        </div>
    )
}
