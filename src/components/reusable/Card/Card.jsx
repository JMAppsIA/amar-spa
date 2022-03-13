import React from 'react'
import { CardContainer, CardDescription, CardImage, CardTitle, CardTextContainer } from './CardElements'
import image from '../../../assets/plasma-rico.png'

export function Card(props) {
  return (
    <CardContainer>
        <CardImage src={image} />
        <CardTextContainer>
            <CardTitle>Plasma rico en plaquetas</CardTitle>
            <CardDescription>
            You will be offered a procedure for hair loss, without injections and pain, based on organic compounds. You will also receive recommendations for home care.
Duration of the procedure - 1 hour
            </CardDescription>
        </CardTextContainer>
    </CardContainer>
  )
}