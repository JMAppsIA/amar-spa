import styled from 'styled-components';

export const SlideContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 241px;
    margin-left: 100px;
`;

export const SlideLeftSection = styled.div`
    box-sizing: border-box;
    padding: 0 1.25rem;
    width: 50%;

`;

export const SlideTexts = styled.div`
    display: block;
    align-content: center;
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

export const SlideRightSection = styled.div`
    box-sizing: border-box;
    padding: 0 1.25rem;
    width: 50%;
`;

export const SlideImages = styled.div`
`;

export const SlideImageFront = styled.img`
    width: 679px;
    height: 776px;
    z-index: 1;
    position: absolute;
    right: 0;
    top: 50px;
`;

export const SlideImageBack = styled.img`
    width: 306.18px;
    height: 711.77px;
    z-index: 0;
    position: absolute;
    right: 0;
    top: 50px;
`;