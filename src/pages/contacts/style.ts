import styled from "@emotion/styled";

export const BlockLink = styled.div`
    display: flex;
    text-align: center;
`;
export const Contact = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color.text};
`;
export const BlockText = styled.p`
    color: ${props => props.theme.color.text};
    font-size: 18px;
    padding: 5px 50px;
    text-align: center;
`;