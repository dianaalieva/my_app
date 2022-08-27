import styled from "@emotion/styled";

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