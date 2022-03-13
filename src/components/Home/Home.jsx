import React from 'react'
import { Slide } from '../reusable/Slide/Slide'
import { SlideTwo } from '../reusable/SlideTwo/SlideTwo'
import { SlideThree } from '../reusable/SlideThree/SlideThree'
import { HomeSection, HomeContainer } from './HomeElements'
import { Separator } from '../reusable/Separator/Separator';

function Home() {
  return (
    <HomeSection>
      <HomeContainer >
        <Slide />
        <Separator />
        <SlideTwo />
        <SlideThree />
      </HomeContainer>
    </HomeSection>
  )
}

export default Home