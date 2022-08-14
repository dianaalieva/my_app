import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const GameTitle = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.color.text};
    text-align: center;
`;
export const ScreenGame = styled.div`
    position: relative;
    width: 80%;
    height: 60%;
    padding: 10px;
    margin: 0 auto;
    background-color: ${props => props.theme.color.primary};
    box-shadow: 0 0 0.5rem 0.5rem rgba(2, 2, 2, 0.25);
    border-radius: 10px;
    color: ${props => props.theme.color.accent};
    text-align: center;
    font-size: 1.5rem;
`;
export const ExampleGame = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: ${props => props.theme.color.secondary};

`;
export const GameLink = styled(Link)`
    font-size: 1.5rem;
    color: ${props => props.theme.color.text};
    text-decoration: none;
    background-color: ${props => props.theme.color.accent};
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.5rem rgba(2, 2, 2, 0.25);
`;
export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`;