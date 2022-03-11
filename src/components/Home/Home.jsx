import React from 'react'
import { Slide } from '../reusable/Slide/Slide'
import { HomeSection, HomeContainer } from './HomeElements'

function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <Slide />
      </HomeContainer>
    </HomeSection>
  )
}

export default Home