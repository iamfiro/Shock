import { styled } from "styled-components";
import Image from 'next/image'

export const Container = styled.article`
    width: 300px;
    height: fit-content;
    border: 1px solid var(--color-gray-border);
    border-radius: 10px;
    box-shadow: var(--boxshadow-gray);
    padding: 7px 13px;
`

export const ProfileImage = styled(Image)`
    border-radius: 100px;
    margin-right: 12px;
`

export const Horizontal = styled.div`
    display: flex;
`


export const DataWrap = styled.article`
    display: flex;
    flex-direction: column;
`

export const Username = styled.span`
    font-family: var(--font-pretendard);
    margin-top: 4px;
`

export const PostedTime = styled.span`
    font-family: var(--font-pretendard);
    font-size: 14px;
    color: #808e94;
`

export const DataText = styled.span`
    font-family: var(--font-pretendard);
    margin-top: 8px;
`