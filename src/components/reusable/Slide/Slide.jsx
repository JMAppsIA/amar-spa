import React from 'react'
import { StyledBadge } from '../Badge/StyledBadge'
import { StyledButton } from '../Button/StyledButton'
import { SlideContent, SlideLeftSection, SlideTexts, SlideTitle, SlideDescription, SlideButtons, SlideRightSection, SlideImageBack, SlideImageFront } from './SlideElements'
import image from '../../../assets/spa-girl-1.png';
import leaf from '../../../assets/leaf-gray.png';

export function Slide() {
  return (
    <SlideContent>
        <SlideLeftSection>
        <SlideTexts>
            <SlideTitle>
              <p>Estamos enfocados en tu cuidado personal</p>
            </SlideTitle>
            <SlideDescription>
              <p>Echa un vistazo a nuestros procedimientos y obtén un <StyledBadge success={true}>10%</StyledBadge> de descuento en tu primer servicio 🥳, así como una consulta gratis 👩‍⚕️</p>
            </SlideDescription>
            <SlideButtons>
              <StyledButton to={`/enviar-solicitud`} hasBackground={true}>{`Dejar una solicitud`}</StyledButton>
            </SlideButtons>
        </SlideTexts>
        </SlideLeftSection>
        <SlideRightSection>
            <SlideImageFront src={image} />
            <SlideImageBack src={leaf} />
        </SlideRightSection>
    </SlideContent>
  )
}