import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'
import { IndexContainer, SnsContainer, SnsWrap, Title } from '../../components/page/@me/index.style'
import SNS from '../../components/sns/sns'

const Me: NextPage = () => {
    return (
        <>
        <IndexContainer>
            <SideBar route='index'/>
            <SnsContainer>
                <Title>Shock 메모</Title>
                <SnsWrap>
                    <SNS>
                        s
                    </SNS>
                </SnsWrap>
            </SnsContainer>
        </IndexContainer>
        </>
    )
}

export default Me
