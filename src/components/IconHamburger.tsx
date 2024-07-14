interface IconHamburgerProps {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const IconHamburger = ({ onClick }: IconHamburgerProps): JSX.Element => {
    return (
        <div onClick={onClick} className="relative origin-center">
            <div className="w-6 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
            <div className="w-6 h-1 my-1 dark:bg-dmds-5 bg-dmds-2"></div>
            <div className="w-6 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
        </div>
    )
}
