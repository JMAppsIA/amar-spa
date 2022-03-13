import styled from 'styled-components';

export const CardSection = styled.section`
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
    max-width: 100%;
    margin-right: 100px;
    margin-left: 100px;

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

export const CardBackgroundColor = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  ${({ hasRoundedCorner }) =>
    hasRoundedCorner
      ? `
        border-radius: 12px;
        `
      : ``}

  background-color: ${({ color }) =>
    color === "red"
      ? "var(--red)"
      : color === "blue"
      ? "var(--blue)"
      : color === "gold"
      ? "var(--gold)"
      : color === "green"
      ? "var(--green)"
      : color === "peach"
      ? "var(--peach)"
      : color === "white"
      ? "var(--white)"
      : color === "purple"
      ? "var(--purple)"
      : color === "purple-light"
      ? "var(--purple-light)"
      : color === "orange"
      ? "var(--orange)"
      : color === "gray"
      ? "var(--gray)"
      : color === "yellow"
      ? "var(--yellow)"
      : color === "blue-chill"
      ? "var(--blue-chill)"
      : "var(--black)"};
`;

export const CardLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        padding-right: 25px;
        padding-left: 25px;
        flex-basis: calc((100% - 25px) / 2);
        
        color: ${({fontColor}) => (
            fontColor === 'black' ? 'var(--black)': (
                fontColor === 'white' ? 'var(--white)' : (
                    fontColor === 'catskill-white' ? 'var(--catskill-white)' : (
                        fontColor === 'blue' ? 'var(--blue)' : 'var(--black)'
                    ) 
                )
            )
        )};

        &:first-child {
            margin-bottom: 0;
        }   
        
    }

    @media (min-width: 1024px) {
        ${({isCardHeader}) => isCardHeader ? (`padding-right: 55px;
        padding-left: 72px;`): ``};
        flex-basis: calc((100% - 30px) / 2);
    }
`;

export const CardImageContent = styled.div`

    ${({hasLogo}) => (hasLogo === true ? `
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        
            @media (min-width: 1024px) {
                margin-bottom: 20px;
            }            
    `:`display: none;`)};

`;

export const LeftCardImage = styled.img`
    display: block;
    height: 32px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 10px;

    @media (min-width: 1024px) {
        height: 42px;
        max-height: 90px;
        margin-right: 15px;
    }
`;

export const CardH3 = styled.h3`
    display: inline-block;
`;

export const CardH1 = styled.h1`
    margin-bottom: 15px;    
    @media (min-width: 1024px) {
        margin-bottom: 25px;
    }

    &:only-child {
        margin-bottom: 0;
    }
`;

export const CardH4 = styled.h4`

`;

export const CardButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: -20px;

  ${({ hasAnimation, animDirection, pageHasLoaded }) =>
    hasAnimation
      ? `
                opacity:`+(!pageHasLoaded? `none`:`0.01`)+`;                
                transition-property: opacity, transform;
                transition-duration: 0.75s;
                transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                               
            ` +
        (animDirection === "enterBottom"
          ? `
                transform: `+(pageHasLoaded? `none`:`translate3d(0, 15px, 0)`)+`;
                @media (min-width: 768px) {
                    transform: translate3d(0, 20px, 0);
                }
                @media (min-width: 1024px) {
                    transform: translate3d(0, -50px, 0);
                }
            `
          : animDirection === "enterTop"
          ? `
                transform: `+(pageHasLoaded? `none`:`translate3d(0, -15px, 0)`)+`;
                @media (min-width: 768px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(0, -20px, 0)`)+`;
                }
                @media (min-width: 1024px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(0, 50px, 0)`)+`;
                }
            `
          : animDirection === "enterScale"
          ? `
                transform: `+(pageHasLoaded? `none`:`scale3d(1.1, 1.1, 1)`)+`;
            `
          : animDirection === "enterRight"
          ? `
                transform: `+(pageHasLoaded? `none`:`translate3d(15px, 0, 0)`)+`;
                @media (min-width: 768px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(20px, 0, 0)`)+`;
                }
                @media (min-width: 1024px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(50px, 0, 0)`)+`;
                }
            `
          : animDirection === "enterLeft"
          ? `
                transform: `+(pageHasLoaded? `none`:`translate3d(-15px, 0, 0)`)+`;
                @media (min-width: 768px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(-20px, 0, 0)`)+`;
                }
                @media (min-width: 1024px) {
                    transform: `+(pageHasLoaded? `none`:`translate3d(-50px, 0, 0)`)+`;
                }
            `
          : ``)
      : ``};
`;

export const CardButton = styled.a`
    display: ${({isHidden}) => (isHidden ? 'grid' : 'grid')};
    overflow: hidden;
    /* text-indent: 101%; */
    cursor: pointer;
    background: ${({hasBackground}) => (hasBackground ? '#B8E8D1' : 'transparent')};
    box-shadow: 0px 10px 16px rgba(192, 220, 207, 0.25);
    border-radius: 10px;
    width: 188px;
    height: 52px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 139.34%;
    outline: none;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #32463D;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#B8E8D1' : '#01BF71' )};
    }

    @media (min-width: 1024px) {
        width: 206px;
        height: 62px;
        border-radius: 6px;
        background-size: auto;
    }

    &:first-child {
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const CardArrow = styled.a`
    display: block;
    width: 18px;
    height: 10px;
    margin-top: 75px;
    cursor: pointer;

    ${({hasArrow,arrowSvg})=> (hasArrow === true? 
    `
        background-image: url(${arrowSvg});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
    `:``)};

    animation: arrow 1s linear infinite 2.5s;

    @media (min-width: 1024px) {
        width: 36px;
        height: 20px;
        margin-top: 100px;
    }

    @keyframes arrow {
        0%,
        50%,
        100% {
        transform: translate3d(0, 0, 0);
        }
        25% {
        transform: translate3d(0, 5px, 0);
        }
        75% {
        transform: translate3d(0, -5px, 0);
        }
    }
  
`

export const CardRightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({cardRightHasBackground}) => (cardRightHasBackground? 
    `
        background: #F2F2F2;
        border-radius: 354px 0px 0px 0px;
    ` : ``)};
    ${({hasImage}) => (hasImage? 
    `
        position: relative;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    ` : ``)};

    ${({hasRoundedCorner}) => (
        hasRoundedCorner ? 
        `
            border-radius: 354px 0px 0px 0px;

            @media (min-width: 1024px) {                
                border-radius: 354px 0px 0px 0px;
            }
        ` : ``
    )}

    &:first-child {
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        flex-basis: calc((100% - 25px) / 2);
        &:first-child {
            margin-bottom: 0;
        }   
    }

    @media (min-width: 1024px) {    
        flex-basis: calc((100% - 30px) / 2);  
  }
`;

export const CardSpacer = styled.div`
    position: relative;
    height: 0;
    padding-top: 92.59259259%;    
`

export const CardImage = styled.a`
    position: absolute;
    top: 0;
    width: 679px;
    height: 776px;    
    ${({imageHasAnimation,pageHasLoaded}) => (imageHasAnimation? 
    `
        opacity: `+(!pageHasLoaded? `none`:`0.01`)+`;
        transition: opacity 1s linear, transform 1s ease-out;
    `: ``)}
    transform: scale3d(1.1, 1.1, 1);
    background-image: ${({cardBackgroundImage})=> (cardBackgroundImage? `url(${cardBackgroundImage})`:``)};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;

    ${({hasRoundedCorner}) => (
        hasRoundedCorner ? 
        `
            overflow: hidden;
            border-radius: 5px;

            @media (min-width: 1024px) {                
                border-radius: 10px;
            }
        ` : ``
    )}
`;