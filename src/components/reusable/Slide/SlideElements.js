import styled from 'styled-components';

export const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 241px;
    margin-left: 100px;

    @media screen and (max-width: 768px) {
        margin-top: 62px;
        margin-left:25px;
    }
`;

export const SlideContent = styled.div`
    box-sizing: border-box;
    padding: 0 1.25rem;
    width: 50%;

`;

export const SlideTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #333333;
    margin-bottom: 50px;
`;

export const SlideDescription = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 33px;
    color: #333333;
    margin-bottom: 7px;
`;

export const SlideButtons = styled.div`
    display: flex;
`;

export const SlideImages = styled.div`
    box-sizing: border-box;
    padding: 0 1.25rem;
    width: 50%;       
`;

export const SlideImageFront = styled.img`
    width: 679px;
    height: 776px;
    z-index: 1;
    position: absolute;
    right: 0;
    top: 50px;

    @media screen and (max-width: 768px) {
        width: 548px;
        height: 597px;
        left: 50%;
    }
`;

export const SlideImageBack = styled.img`
    width: 306.18px;
    height: 711.77px;
    z-index: 0;
    position: absolute;
    right: 0;
    top: 50px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SlideBackgroundCircle = styled.span`
    z-index: -1;
    position: absolute;
    right: 0;
    top: 50px;
    background: #F2F2F2;
    border-radius: 180px 0px 0px 0px;
`;