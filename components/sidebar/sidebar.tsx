import Image from "next/image";
import { NextPage } from "next";
import { Container, ListItem, Divider, ListWrap } from "./sidebar.style";
import { ServiceIconNoText } from "../ServiceIcon";
import { IProps } from "./sidebar.type";
import { useRouter } from "next/router";

const SideBar = ({route}: IProps) => {
    const routes = useRouter()
    return (
        <>
            <Container>
                <ServiceIconNoText width={25} height={25} />
                <ListWrap>
                    <ListItem href={{ pathname: '/@me'}} prefetch={true} selected={route === 'index'} selectedColor="#EF7443">
                        <Image src={`/icon/sidebar/document${route === 'index' ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/category'}} prefetch={true} selected={route === 'category'} selectedColor="#e33ee9">
                        <Image src={`/icon/sidebar/category${route === 'category' ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <Divider/>
                    <ListItem href={{ pathname: '/@me/pomodoro'}} prefetch={true} selected={route === 'pomodoro'} selectedColor="#ef4343">
                        <Image src={`/icon/sidebar/alarm${route === 'pomodoro' ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/sound'}} prefetch={true} selected={route === 'sound'} selectedColor="#4377ef">
                        <Image src={`/icon/sidebar/sound${route === 'sound' ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/bot'}} prefetch={true} selected={route === 'bot'} selectedColor="#2fcd0c">
                        <Image src={`/icon/sidebar/bot${route === 'bot' ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                </ListWrap>
            </Container>
        </>
    );
}

export default SideBar