import logo from '@/assets/images/logo.svg'
import binaryCircle from '@/assets/images/binary-circle.svg'
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
                        className="top-0 left-0 w-full h-full absolute animation-rotate-reverse"
                        src={binaryCircle}
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                    <Image
                        className={`top-[5%] left-[5%] w-[90%] h-[90%] absolute animation-rotate`}
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                </a>
            </figure>
        </div>
    )
}
