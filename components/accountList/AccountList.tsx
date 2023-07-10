import Image from "next/image";
import { useRouter } from "next/router";
import { Center, ChangeAccountButton, Container, LastAccount, ProfileContainer, ProfileImage, ProfileWrap, SeeAll, Top, UserId, UserName } from "./AccountList.style";
import { IUserProfile } from './AccountList.type';

const Profile = ({imgUrl, userId, userName}: IUserProfile) => {
    return (
        <ProfileContainer>
            <ProfileWrap>
                <ProfileImage src={imgUrl} width={40} height={40} alt={userName}></ProfileImage>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <UserName>{userName}</UserName>
                    <UserId>@{userId}</UserId>
                </div>
            </ProfileWrap>
        </ProfileContainer>
    )
}

const AccountList = () => {
    return (
        <>
            <Container>
                <Top>
                    <div style={{ display: 'flex' }}>
                        <ProfileImage src={'/sample/profileImage.jpg'} width={40} height={40} alt="profile"></ProfileImage>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <UserName>키페</UserName>
                            <UserId>@xxKrype102</UserId>
                        </div>
                    </div>
                    <ChangeAccountButton>계정 변경</ChangeAccountButton>
                </Top>
                <Center>
                    <LastAccount>최근에 사용한 계정</LastAccount>
                    <SeeAll>전체 보기</SeeAll>
                </Center>

                <Profile imgUrl="/sample/profileImage.jpg" userId="xxyzKippey10" userName="키페"/>
                <Profile imgUrl="/sample/profileImage.jpg" userId="xxyzKippey10" userName="키페"/>
            </Container>
        </>
    );
}

export default AccountList