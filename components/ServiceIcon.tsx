import Image from 'next/image'

interface IProps {
    width: number;
    height: number;
}

export function ServiceIcon({width, height}: IProps) {
    return (
        <Image src="/Shock.svg" width={width} height={height} alt="Shock Icon"/>
    )
}

export function ServiceIconNoText({width, height}: IProps) {
    return (
        <Image src="/ShockOnlyIcon.svg" width={width} height={height} alt="Shock Icon"/>
    )
}