import React from 'react'
import { Slide } from '../reusable/Slide/Slide'
import { SlideTwo } from '../reusable/SlideTwo/SlideTwo'
import { SlideThree } from '../reusable/SlideThree/SlideThree'
import { HomeSection, HomeContainer } from './HomeElements'
import { Separator } from '../reusable/Separator/Separator';
import Hero from '../reusable/Hero';
import imageCardOne from '../../assets/spa-girl-1.png';


function Home() {
  return (
    <HomeSection>
      <HomeContainer >
      <Hero
                isCardHeader = {true}
                cardTitle = 'Buscamos el punto más cercano para que puedas realizar tus servicios sin hacer colas.'
                hasButtons = {true}
                buttonOneIsHidden = {false}
                buttonOneHasBackgroundImage = {true}
                // buttonOneBackgroundImage = {googleBackground}
                textButtonOne = {`Descargalo con Google app`}
                buttonTwoIsHidden = {false}
                buttonTwoHasBackgroundImage = {true}
                // buttonTwoBackgroundImage = {appleBackground}
                textButtonTwo = {`Descargalo con Google app`}
                hasAnimation = {true}
                animationDirection = {`enterTop`}
                cardRoundedCorner = {true}
                cardHasImage = {true}
                cardImage = {imageCardOne}                
                imageHasAnimation = {true}
                cardHasArrow = {true}
                isReverse={false}
                cardHasLogo = {true}
            />
        <Slide />
        <Separator />
        <SlideTwo />
        <SlideThree />
      </HomeContainer>
    </HomeSection>
  )
}

export default Home