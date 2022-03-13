import React from 'react'
import { StyledText } from '../StyledText/StyledText'
import { StyledButton } from '../Button/StyledButton'
import { SlideContainer, SlideContent, SlideTitle, SlideDescription, SlideButtons, SlideImages, SlideImageFront } from './SlideTwoElements'
import image from '../../../assets/spa-girl-3.png';
export function SlideTwo() {
  return (
    <SlideContainer>
      <SlideImages>
        <SlideImageFront src={image} />
      </SlideImages>
      <SlideContent>
        <SlideTitle>
          <p>Realizamos procedimientos de primera calidad 💆 </p>
        </SlideTitle>
        <SlideDescription>
        <p>Nos caracterizamos por ofrecer un servicio altamente profesional y confiable, 
          nuestra meta es poder ofrecerte tratamientos de calidad con precios accesibles. 
          Nos comprometemos a llevar tu tratamiento de principio a fin con la mejor asesoría por parte de nuestros 
          <StyledText> especialistas altamente capacitados </StyledText>📝
        </p>

        </SlideDescription>
        <SlideButtons>
          <StyledButton to={`/enviar-solicitud`} hasBackground={true}>{`Quiero saber más`}</StyledButton>
        </SlideButtons>
      </SlideContent>
    </SlideContainer>
  )
}