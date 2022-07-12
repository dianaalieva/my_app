import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeadMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: ${props => props.theme.color.text};
    font-size: 20px;
    
`;
export const HeadLink = styled(Link)`
    font-size: 24px;
    color: ${props => props.theme.color.text};
    text-decoration: none;
`;
export const DropBlock = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Example = styled.button`
    color: ${props => props.theme.color.text};
    font: inherit;
    font-size: 24px;
    padding: 0 20px;
    border: none;
    background-color: transparent;
`;
export const Drop = styled.div`
    background-color: ${props => props.theme.color.secondary};
    right: 43%;
    top: 90px;
    transition: 0.1s;
    position: fixed;
    width: 200px;
`;
export const DropsRow = styled.div`
    transition: 0.2s;
    box-shadow: inset 2px 2px 10px #201A45;
    text-align: center;
    &:hover {
        background-color: ${props => props.theme.color.bg};
    }
`;
export const ThemeButton = styled.button`
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.color.secondary};    
    border-radius: 5px;
    box-shadow: 1px 1px 2px #000;
`;
export const NavLink = styled(Link)`
    color: ${props => props.theme.color.text};
    font-size: 20px;
    text-decoration: none;
    &:hover, &:focus {
        color: yellow;
    }
`;
export const DropOutside = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${props => props.theme.color.bg};
`;
