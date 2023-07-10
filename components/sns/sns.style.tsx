import { styled } from "styled-components";
import Image from 'next/image'

export const Container = styled.article`
    width: 650px;
    height: fit-content;
    border-bottom: 1px solid var(--color-gray-border);
    border-radius: 10px;
    padding: 10px 13px 7px 13px;
    margin-top: 5px;

    &:hover {
        border: 1px solid var(--color-gray-border);
        box-shadow: var(--boxshadow-gray);
        cursor: pointer;
    }
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
    width: 100%;
`

export const Username = styled.span`
    font-family: var(--font-pretendard);
    margin-top: 2px;
`

export const Userid = styled.span`
    font-family: var(--font-pretendard);
    color: #808e94;
    margin: 2px 0px 0px 5px;
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

export const InteractionIcon = styled(Image)`
    margin: 10px 10px 5px 0px;
`

export const InteractionValue = styled.span`
    font-family: var(--font-pretendard);
    font-size: 14px;
    color: #636874;
    margin: 5px 20px 0px 0px;
`