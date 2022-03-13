import styled from 'styled-components';

export const StyleH1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #333333;
    /* margin-bottom: 50px; */

    @media (min-width: 1024px) {
        font-size: 48px;
        line-height: 1.05;
    }
`;

export const StyleH2 = styled.h2`
    font-size: 26px;
    letter-spacing: 0;
    line-height: 1.25;

    @media (min-width: 1024px) {
        font-size: 42px;
        letter-spacing: -0.04em;
        line-height: 1.15;
    }    
`;

export const StyleH3 = styled.h3`
    font-size: 24px;
    line-height: 1.3;

    @media (min-width: 1024px) {
        font-size: 32px;
        line-height: 1.2;
    }     
`;

export const StyleH4 = styled.h4`
    ont-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 33px;
    color: #333333;

    @media (min-width: 1024px) {
        font-size: 24px;
    }    
`;