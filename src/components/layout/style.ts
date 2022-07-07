import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeadMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: ${props => props.theme.color.text};
    font-size: 20px;
    padding: 50px;
    background-color: ${props => props.theme.color.bg};
`;
export const HeadLink = styled(Link)`
    font-size: 24px;
    color: ${props => props.theme.color.text};
    text-decoration: none;
`;
export const Example = styled.div`
    color: ${props => props.theme.color.text};
    font-size: 24px;
`;
export const DropWrap = styled.div`
    background-color: ${props => props.theme.color.text};
`;