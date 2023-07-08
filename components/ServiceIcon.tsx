import Image from 'next/image'
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface IProps {
    width: number;
    height: number;
}

export function ServiceIcon({width, height}: IProps) {
    const route = useRouter();
    return (
        <ImageHover src="/Shock.svg" width={width} height={height} alt="Shock Icon" onClick={() => {
            route.push('/@me')
        }}/>
    )
}

export function ServiceIconNoText({width, height}: IProps) {
    const route = useRouter();
    return (
        <ImageHover src="/ShockOnlyIcon.svg" width={width} height={height} alt="Shock Icon" onClick={() => {
            route.push('/@me')
        }}/>
    )
}


const ImageHover = styled(Image)`
    &:hover {
        cursor: pointer;
    }
`