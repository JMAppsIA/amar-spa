import styled from "styled-components";

export const CardContainer = styled.div`
    width: 390px;
    height: 611px;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const CardImage = styled.img`
    width: 390px;
    height: 320px;
`;

export const CardTextContainer = styled.div`
    padding: 2px 16px;
    margin-top: 40px;
    margin-left: 50px;

    &>span {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #4F4F4F;
        margin-top: 31px;
    }
`;

export const CardTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #333333;
`;

export const CardDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 38px
    color: #4F4F4F;
`;