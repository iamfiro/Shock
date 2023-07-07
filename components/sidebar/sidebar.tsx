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
                    <ListItem href={{ pathname: '/@me'}} selected={route === 'index'} selectedColor="#EF7443">
                        <Image src={`/icon/sidebar/document.png`} width={24} height={24} alt="document" style={{ display: route === 'index' ? 'none': 'block'}} />
                        <Image src={`/icon/sidebar/document-white.png`} width={24} height={24} alt="document" style={{ display: route === 'index' ? 'block': 'none'}} />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/category'}} selected={route === 'category'} selectedColor="#e33ee9">
                        <Image src={`/icon/sidebar/category.png`} width={24} height={24} alt="category" style={{ display: route === 'category' ? 'none': 'block'}} />
                        <Image src={`/icon/sidebar/category-white.png`} width={24} height={24} alt="category" style={{ display: route === 'category' ? 'block': 'none'}} />
                    </ListItem>
                    <Divider/>
                    <ListItem href={{ pathname: '/@me/pomodoro'}} selected={route === 'pomodoro'} selectedColor="#ef4343">
                        <Image src={`/icon/sidebar/alarm.png`} width={24} height={24} alt="pomodoro" style={{ display: route === 'pomodoro' ? 'none': 'block'}} />
                        <Image src={`/icon/sidebar/alarm-white.png`} width={24} height={24} alt="pomodoro" style={{ display: route === 'pomodoro' ? 'block': 'none'}} />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/sound'}} selected={route === 'sound'} selectedColor="#4377ef">
                        <Image src={`/icon/sidebar/sound.png`} width={24} height={24} alt="sound" style={{ display: route === 'sound' ? 'none': 'block'}} />
                        <Image src={`/icon/sidebar/sound-white.png`} width={24} height={24} alt="sound" style={{ display: route === 'sound' ? 'block': 'none'}} />
                    </ListItem>
                    <ListItem href={{ pathname: '/@me/bot'}} selected={route === 'bot'} selectedColor="#2fcd0c">
                        <Image src={`/icon/sidebar/bot.png`} width={24} height={24} alt="bot" style={{ display: route === 'bot' ? 'none': 'block'}} />
                        <Image src={`/icon/sidebar/bot-white.png`} width={24} height={24} alt="bot" style={{ display: route === 'bot' ? 'block': 'none'}} />
                    </ListItem>
                </ListWrap>
            </Container>
        </>
    );
}

export default SideBar