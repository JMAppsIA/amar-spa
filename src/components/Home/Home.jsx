import React from 'react'
import { HomeSection, HomeContainer } from './HomeElements'
import { Separator } from '../reusable/Separator/Separator';
import Hero from '../reusable/Hero';
import imageCardOne from '../../assets/spa-girl-1.png';



function Home() {


  return (
    <HomeSection>
      <HomeContainer >
      <Hero
                isCardHeader = {false}
                cardTitle = 'Estamos enfocados en tu cuidado personal'
                hasDescription={true}
                cardDescription= {`Echa un vistazo a nuestros procedimientos y obtén un descuento en tu primer servicio 🥳, así como una consulta gratis 👩‍⚕️`}
                hasButtons = {true}
                buttonOneIsHidden = {false}
                buttonOneHasBackgroundImage = {true}
                // buttonOneBackgroundImage = {googleBackground}
                textButtonOne = {`Dejar una solicitud`}
                buttonTwoIsHidden = {false}
                buttonTwoHasBackgroundImage = {false}
                // buttonTwoBackgroundImage = {appleBackground}
                textButtonTwo = {`Más servicios`}
                hasAnimation = {true}
                animationDirection = {`enterTop`}
                cardRoundedCorner = {true}
                cardHasImage = {true}
                cardImage = {imageCardOne}                
                imageHasAnimation = {true}
                cardHasArrow = {true}
                isReverse={false}
                cardHasLogo = {true}
                cardRightHasBackground = {true}
            />
        <Separator />
      </HomeContainer>
    </HomeSection>
  )
}

export default Home