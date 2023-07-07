import Image from "next/image";
import { NextPage } from "next";
import { Container, ListItem, Divider, ListWrap } from "./sidebar.style";
import { ServiceIconNoText } from "../ServiceIcon";

const SideBar: NextPage = () => {
    return (
        <>
            <Container>
                <ServiceIconNoText width={25} height={25} />
                <ListWrap>
                    <ListItem selected={true} selectedColor="#EF7443">
                        <Image src={`/icon/sidebar/document${true ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem selected={false} selectedColor="#e33ee9">
                        <Image src={`/icon/sidebar/category${false ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <Divider/>
                    <ListItem selected={false} selectedColor="#ef4343">
                        <Image src={`/icon/sidebar/alarm${false ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem selected={false} selectedColor="#4377ef">
                        <Image src={`/icon/sidebar/sound${false ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                    <ListItem selected={false} selectedColor="#2fcd0c">
                        <Image src={`/icon/sidebar/bot${false ? '-white' : ''}.png`} width={24} height={24} alt="home" />
                    </ListItem>
                </ListWrap>
            </Container>
        </>
    );
}

export default SideBar