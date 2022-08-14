import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem;
`;
export const TimerBlock = styled(Link)`
    position: absolute;
    text-decoration: none;
    background-color: ${props => props.theme.color.accent};
    box-shadow: 0 1rem 1rem 0 rgba(2, 2, 2, 0.25);
    border-radius: 1rem;
    color: ${props => props.theme.color.text};
    padding: 1rem;
    margin: 1rem;
`;
export const Screen = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
    padding: 10px;
    margin: 0 auto;
    background-color: ${props => props.theme.color.primary};
    box-shadow: 0 0 0.5rem 0.5rem rgba(2, 2, 2, 0.25);
    border-radius: 10px;
    color: ${props => props.theme.color.accent};
    text-align: center;
    font-size: 1.5rem;
`;