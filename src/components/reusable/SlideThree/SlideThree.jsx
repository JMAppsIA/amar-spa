import React from 'react'
import { Card } from '../Card/Card'
import { SlideContainer, SlideContent, SlideTitle } from './SlideThreeElements'

export function SlideThree() {
  return (
    <SlideContainer>
      <SlideTitle>
        <p>Nuestros</p>
        <span>procedimientos</span>
      </SlideTitle>
      <SlideContent>
        <Card 
          // title={`Plasma rico en plaquetas`}
          // description={`You will be offered a procedure for hair loss, without injections and pain, based on organic compounds. You will also receive recommendations for home care.
          // Duration of the procedure - 1 hour`}
        />
      </SlideContent>
    </SlideContainer>
  )
}