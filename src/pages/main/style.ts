import styled from "@emotion/styled";

export const MainWrap = styled.div`
    background-color: ${props => props.theme.color.bg};
    padding:50px;
`;
export const TextWrap = styled.div`
    padding: 15px;
    color: ${props => props.theme.color.text};
    font-size: 18px;
`;

export const FotoWrap = styled.div`
    width: 100px;
    height: 150px;
`;