import styled from 'styled-components';

export const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* margin-top: 241px; */
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
    font-size: 36px;
    line-height: 93.84%;
    color: #333333;
    opacity: 0.8;
    margin-bottom: 50px;
    text-align: left;
    margin-top: 20px;
    

    &>span {
        margin-left: 30px;
        font-style: normal;
        font-weight: 800;
        font-size: 72px;
        line-height: 93.84%;
        text-transform: uppercase;
        color: #B8E8D1;
    }
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
    height: 810px;
    z-index: 3;

    @media screen and (max-width: 768px) {
        width: 548px;
        height: 597px;
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