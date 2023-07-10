import { ReactNode } from "react";

export interface IProps {
    UserId: string;
    UserName: string;
    ImgUrl: string;
    heartCount: number;
    commentCount: number;
    retweetCount: number;
    children: ReactNode
}