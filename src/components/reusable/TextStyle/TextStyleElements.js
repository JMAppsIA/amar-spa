import styled from 'styled-components';

export const StyleH1 = styled.h1`
    font-size: 30px;
    letter-spacing: 0;
    line-height: 1.1;

    @media (min-width: 1024px) {
        font-size: 54px;
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
    font-size: 16px;
    line-height: 1.75;

    @media (min-width: 1024px) {
        font-size: 20px;
    }    
`;