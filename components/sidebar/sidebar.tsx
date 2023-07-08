import Image from "next/image";
import { NextPage } from "next";
import { Container, ListItem, Divider, ListWrap } from "./sidebar.style";
import { ServiceIconNoText } from "../ServiceIcon";
import { IProps } from "./sidebar.type";
import { useRouter } from "next/router";

const SideBar = ({ route }: IProps) => {
  const routes = useRouter();
  return (
    <>
      <Container>
        <ServiceIconNoText width={25} height={25} />
        <ListWrap>
          <ListItem
            href={{ pathname: "/@me" }}
            selected={route === "index"}
            selectedColor="#EF7443"
          >
            <Image
              priority
              src={`/icon/sidebar/document${
                route === "index" ? "-white" : ""
              }.png`}
              width={24}
              height={24}
              alt="home"
            />
          </ListItem>
          <ListItem
            href={{ pathname: "/@me/category" }}
            selected={route === "category"}
            selectedColor="#e33ee9"
          >
            <Image
              priority
              src={`/icon/sidebar/category${
                route === "category" ? "-white" : ""
              }.png`}
              width={24}
              height={24}
              alt="home"
            />
          </ListItem>
          <Divider />
          <ListItem
            href={{ pathname: "/@me/pomodoro" }}
            selected={route === "pomodoro"}
            selectedColor="#ef4343"
          >
            <Image
              priority
              src={`/icon/sidebar/alarm${
                route === "pomodoro" ? "-white" : ""
              }.png`}
              width={24}
              height={24}
              alt="home"
            />
          </ListItem>
          <ListItem
            href={{ pathname: "/@me/sound" }}
            selected={route === "sound"}
            selectedColor="#4377ef"
          >
            <Image
              priority
              src={`/icon/sidebar/sound${
                route === "sound" ? "-white" : ""
              }.png`}
              width={24}
              height={24}
              alt="home"
            />
          </ListItem>
          <ListItem
            href={{ pathname: "/@me/bot" }}
            selected={route === "bot"}
            selectedColor="#2fcd0c"
          >
            <Image
              priority
              src={`/icon/sidebar/bot${route === "bot" ? "-white" : ""}.png`}
              width={24}
              height={24}
              alt="home"
            />
          </ListItem>
        </ListWrap>
      </Container>
    </>
  );
};

export default SideBar;
