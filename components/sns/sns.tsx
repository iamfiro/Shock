import Image from "next/image";
import { ServiceIconNoText } from "../ServiceIcon";
import { useRouter } from "next/router";
import { IProps } from "./sns.type";
import { Container } from "./sns.style";


const SNS = ({children}: IProps) => {
    const routes = useRouter()
    return (
        <>
        <Container>
            a
        </Container>
        {children}
        </>
    );
}

export default SNS