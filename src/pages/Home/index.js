import React from 'react'
import { Feature, Footer, Hero, Navbar, Number } from '../../components'
import { featureOne, featureTwo, numberOne } from '../../data/data'
import { Container } from '../../styles/Container'
import { ScrollToWrapper } from './styles/Home'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <ScrollToWrapper id='features'>
          <Feature {...featureOne} />
        </ScrollToWrapper>
        <ScrollToWrapper id='numbers'>
          <Number {...numberOne} />
        </ScrollToWrapper>
        <ScrollToWrapper id='plattform'>
          <Feature {...featureTwo} />
        </ScrollToWrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Home
