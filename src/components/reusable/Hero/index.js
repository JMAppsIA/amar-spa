import React, { useEffect } from 'react'
import TextStyle from '../TextStyle';
import PropTypes from "prop-types";

import { CardArrow, CardButton, CardButtons, CardContainer, CardH1, CardH4, CardImage, CardLeftContent, CardRightContent, CardSection, CardSpacer, CardBackgroundColor } from './HeroElements';

const Hero = ({cardTitle,hasDescription, cardDescription, isReverse, hasButtons, hasAnimation,animationDirection, 
                buttonOneIsHidden, buttonOneHasBackgroundImage, buttonOneBackgroundImage, textButtonOne,
                buttonTwoIsHidden, buttonTwoHasBackgroundImage, buttonTwoBackgroundImage, textButtonTwo,
                cardRoundedCorner, cardHasImage, cardImage, imageHasAnimation, 
                pageHasLoaded, cardHasArrow, cardHasLogo,cardHasBackgroundColor,cardBgColor,isCardHeader, cardRightHasBackground}) => {

    useEffect( ()=>{
        pageHasLoaded=true;        
        }, [] );        

    return (
        <CardSection>
            <CardContainer isReverse={isReverse}>
            {cardHasBackgroundColor? (
                        <CardBackgroundColor color={cardBgColor} hasRoundedCorner={cardRoundedCorner}></CardBackgroundColor>
                    ):''}

            <CardLeftContent isCardHeader={isCardHeader}>
                    {/* <CardImageContent hasLogo={cardHasLogo}>
                        <LeftCardImage src={logo}/>
                        <CardH3>
                            <TextStyle isH3={true} hasP={true} textH3='Fluxy Banks'/>
                        </CardH3>
                    </CardImageContent>                     */}

                    {hasDescription? (
                        <CardLeftContent isCardHeader={isCardHeader}>
                            <CardH1>
                                <TextStyle isH1={true} hasP={true} textH1 ={cardTitle}></TextStyle>          
                            </CardH1>
                            <CardH4>
                                <TextStyle isH4={true} hasP={true} textH4 ={cardDescription}></TextStyle>          
                            </CardH4>
                        </CardLeftContent>
                    ):(
                    <CardH1>
                        <TextStyle isH1={true} hasP={true} textH1 ={cardTitle}></TextStyle>                        
                    </CardH1>
                    )}

                    
                    
                    {!hasButtons? '' : (
                        <>
                        <CardButtons pageHasLoaded={pageHasLoaded} hasAnimation = {hasAnimation} animDirection = {animationDirection}>
                            <CardButton
                                    isHidden = {buttonOneIsHidden}
                                    hasBackground = {buttonOneHasBackgroundImage}
                                    backgroundImage = {buttonOneBackgroundImage}>
                                    <span>{textButtonOne}</span>
                            </CardButton>
                            <CardButton
                                isHidden = {buttonTwoIsHidden}
                                hasBackground = {buttonTwoHasBackgroundImage}
                                backgroundImage = {buttonTwoBackgroundImage}>
                                <span>{textButtonTwo}</span>
                            </CardButton>
                        </CardButtons>
                        <CardArrow hasArrow={cardHasArrow} arrowSvg={null}></CardArrow>
                        </>
                    ) } 

                    
                    
                </CardLeftContent>
                
                <CardRightContent 
                    hasRoundedCorner = {cardRoundedCorner}
                    hasImage = {cardHasImage}
                    cardRightHasBackground= {cardRightHasBackground}
                    >
                    <CardSpacer></CardSpacer>            
                        <CardImage pageHasLoaded={pageHasLoaded} imageHasAnimation={imageHasAnimation} cardBackgroundImage={cardImage}/>              
                </CardRightContent>
            </CardContainer>
        </CardSection>
    )
}


Hero.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    hasDescription: PropTypes.bool.isRequired,
    cardDescription: PropTypes.string.isRequired,
    isReverse: PropTypes.bool.isRequired,
    hasButtons: PropTypes.bool.isRequired,
    hasAnimation: PropTypes.bool.isRequired,
    animationDirection: PropTypes.string,
    buttonOneIsHidden: PropTypes.bool.isRequired,
    buttonOneHasBackgroundImage: PropTypes.bool.isRequired,
    buttonOneBackgroundImage: PropTypes.string,
    textButtonOne: PropTypes.string.isRequired,
    buttonTwoIsHidden: PropTypes.bool.isRequired,
    buttonTwoHasBackgroundImage: PropTypes.bool.isRequired,
    buttonTwoBackgroundImage: PropTypes.string.isRequired,
    textButtonTwo: PropTypes.string.isRequired,
    cardRoundedCorner: PropTypes.bool.isRequired,
    cardHasImage: PropTypes.bool.isRequired,
    cardImage: PropTypes.string.isRequired,
    imageHasAnimation: PropTypes.bool.isRequired,
    pageHasLoaded: PropTypes.bool,
    cardHasArrow: PropTypes.bool.isRequired,
    cardHasLogo: PropTypes.bool.isRequired,
    cardHasBackgroundColor: PropTypes.bool.isRequired,
    cardBgColor: PropTypes.string,
    isCardHeader: PropTypes.bool.isRequired,
    cardRightHasBackground: PropTypes.bool.isRequired
}

export default Hero;
