interface IconCrossProps {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const IconCross = ({ onClick }: IconCrossProps): JSX.Element => {
    return (
        <div onClick={onClick} className="relative w-7 h-7">
            <div className="absolute origin-center top-[8px] -left-[2px] rotate-45 w-7 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
            <div className="absolute origin-center top-[8px] -left-[2px] -rotate-45 w-7 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
        </div>
    )
}
