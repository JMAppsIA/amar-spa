import styled from 'styled-components';

export const HomeSection = styled.section`
    position: relative;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        margin-bottom: 25px;
    }
    @media (min-width: 1024px) {
        margin-bottom: 30px;
    }
`;

export const CardContainer = styled.div`
    position: relative;
    width: calc(100% - 40px);
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 50px);
        height: 100%;  
        ${({isReverse}) => (isReverse? 'flex-direction: row-reverse;':'')};        
    }
    @media (min-width: 1280px) {  
        width: calc(100% - 60px);
    }
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;