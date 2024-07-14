import loadIcon from '@/assets/images/load-icon.png'
import Image from 'next/image'

interface LoadIconProps {
    width?: number
    height?: number
}
export default function LoadIcon({ width = 24, height = 24 }: LoadIconProps): JSX.Element {
    return <Image src={loadIcon} alt="load icon" width={width} height={height} className="animate-spin" />
}
