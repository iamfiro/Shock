import Image from "next/image";
import { ServiceIconNoText } from "../ServiceIcon";
import { useRouter } from "next/router";
import { IProps } from "./sns.type";
import { Container, DataText, DataWrap, Horizontal, PostedTime, ProfileImage, Username } from "./sns.style";


const SNS = ({children}: IProps) => {
    const routes = useRouter()
    return (
        <>
        <Container>
            <Horizontal>
                <ProfileImage src={'/sample/profileImage.jpg'} width={40} height={40} alt="profile"></ProfileImage>
                <DataWrap>
                    <Horizontal>
                        <Username>키페</Username>
                    </Horizontal>
                    <PostedTime>21시간 전</PostedTime>
                    <DataText>덕질계로 옮겨가셨으면 이 계정은 썰어주세요!</DataText>
                </DataWrap>
            </Horizontal>
        </Container>
        {children}
        </>
    );
}

export default SNS