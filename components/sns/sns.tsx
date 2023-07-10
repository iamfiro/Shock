import Image from "next/image";
import { ServiceIconNoText } from "../ServiceIcon";
import { useRouter } from "next/router";
import { IProps } from "./sns.type";
import { Container, DataText, DataWrap, Horizontal, InteractionIcon, InteractionValue, PostedTime, ProfileImage, Username, Userid } from "./sns.style";
import { compactNumber } from "../../lib/numberFormat";


const SNS = ({children, UserId, UserName, ImgUrl, heartCount, commentCount, retweetCount}: IProps) => {
    const routes = useRouter()
    return (
        <>
        <Container>
            <Horizontal>
                <ProfileImage src={ImgUrl} width={40} height={40} alt="profile"></ProfileImage>
                <DataWrap>
                    <Horizontal style={{ alignItems: 'center', justifyContent: 'space-between'}}>
                        <Horizontal>
                            <Username>{UserName}</Username>
                            <Userid>@{UserId}</Userid>
                        </Horizontal>
                        <PostedTime>12시간 전</PostedTime>
                    </Horizontal>
                    <DataText>밑빠진 독인가, 신규 팔로워 알림은 계속 오는데 팔로워 수는 고정이네</DataText>
                    <Horizontal style={{ alignItems: 'center'}}>
                        <InteractionIcon src={'/icon/sns/heart.png'} width={20} height={20} alt="heart"/>
                        <InteractionValue>{compactNumber(heartCount)}</InteractionValue>
                        <InteractionIcon src={'/icon/sns/comment.png'} width={20} height={20} alt="comment"/>
                        <InteractionValue>{compactNumber(commentCount)}</InteractionValue>
                        <InteractionIcon src={'/icon/sns/retweet.png'} width={20} height={20} alt="retweet"/>
                        <InteractionValue>{compactNumber(retweetCount)}</InteractionValue>
                    </Horizontal>
                </DataWrap>
            </Horizontal>
        </Container>
        {children}
        </>
    );
}

export default SNS