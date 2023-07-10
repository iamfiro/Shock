import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../../components/sidebar/sidebar'
import { IndexContainer, SnsContainer, SnsWrap, Title } from '../../components/page/@me/index.style'
import SNS from '../../components/sns/sns'
import AccountList from '../../components/accountList/AccountList'

const n = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const Me: NextPage = () => {
    return (
        <>
        <IndexContainer>
            <SideBar route='index'/>
            <SnsContainer>
                <SnsWrap>
                    {
                        n.map((n:any) => {
                            return (
                                <SNS 
                                UserId='KimchiWarrior' 
                                UserName='김치말이' 
                                ImgUrl='/sample/profileImage.jpg'
                                heartCount={1200}
                                commentCount={12}
                                retweetCount={832}
                                key={Math.random()}
                            >
                                
                            </SNS>
                            )
                        })
                          
                    }
                </SnsWrap>
                <AccountList/>
            </SnsContainer>
        </IndexContainer>
        </>
    )
}

export default Me
