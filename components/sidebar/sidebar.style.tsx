import { styled } from 'styled-components';
import { ListItemProps } from './sidebar.type';

export const Container = styled.nav`
    height: 100vh;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9fafa;
    padding: 25px;
    border: 1px solid var(--color-gray-border);
`

export const ListWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const ListItem = styled.div<ListItemProps>`
    width: 40px;
    height: 40px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px 5px 0px;
    background-color: ${(props) => props.selected ? props.selectedColor : '#F9FAFA'};
    &:nth-child(1) {
        margin-top: 10px;
    }
    &:hover {
        background-color: ${(props) => props.selected ? props.selectedColor : '#eaecec'};
        cursor: ${(props) => props.selected ? '' : 'pointer'};
    }
`

export const ListName = styled.span`
    font-family: var(--font-pretendard);
    font-size: 15px;
    margin-left: 10px;
    color: var(--color-sidebar-title);
`

export const Divider = styled.div`
    width: 100%;
    height: 1.3px;
    background-color: #e7e6e6;
    margin: 10px 0;
`