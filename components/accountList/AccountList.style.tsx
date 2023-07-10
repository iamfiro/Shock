import { styled } from "styled-components";
import Image from 'next/image'
export const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fff;
    padding: 40px 30px;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileImage = styled(Image)`
    border-radius: 100px;
    margin-right: 12px;
`

export const UserName = styled.span`
    font-family: var(--font-pretendard);
`

export const UserId = styled.span`
    font-family: var(--font-pretendard);
    font-size: 14px;
    color: #8c979c;
`

export const ChangeAccountButton = styled.button`
    background-color: #fff;
    border: 0;
    font-family: var(--font-pretendard);
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

export const Center = styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: space-between;
`

export const LastAccount = styled.span`
    font-family: var(--font-pretendard);
    font-size: 14px;
`

export const SeeAll = styled.button`
    background-color: #fff;
    border: 0;
    font-family: var(--font-pretendard);
    font-size: 14px;
    color: #EF7443;
    
    &:hover {
        cursor: pointer;
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    margin: 13px 0px;
`

export const ProfileWrap = styled.div`
    display: flex;
`