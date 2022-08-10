import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 20px 60px;
    background-color: ${props => props.theme.color.bg};
`;
export const Contain = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    color: ${props => props.theme.color.text};
    font-size: 20px;
    padding: 60px 40px;
`;
export const ContainSmall = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    padding: 5px 10px;
`;