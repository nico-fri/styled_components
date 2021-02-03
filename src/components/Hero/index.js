import React from 'react'
import { Container, LeftRightWrapper } from '../../styles/Container'
import {
  Heading,
  Text,
  Button,
  IconButton,
  HeroWrapper,
  HeroImage,
  ShapeImage,
  ContentWrapper,
  LeftHero,
  RightHero,
} from './styles/Hero'
import Woman from '../../assets/Hero/woman.png'
import { BiPlay } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import { ReviewCard } from './styles/Hero'
import { AiFillStar } from 'react-icons/ai'
import Shape from '../../assets/Hero/shape.png'
import { useHistory } from 'react-router-dom'

function Hero() {
  const history = useHistory()
  return (
    <>
      <HeroWrapper>
        <Container>
          <LeftRightWrapper>
            <LeftHero>
              <Heading>Hire freelancers with better reviews</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, reiciendis obcaecati aut dolores, asperiores
                voluptatem voluptatibus nisi velit cum illum deserunt
              </Text>
              <ContentWrapper>
                <Button primary onClick={() => history.push('/error')}>
                  Try for free
                </Button>
                <IconButton>
                  <IconContext.Provider
                    value={{ style: { height: '20px', width: '20px' } }}
                  >
                    <BiPlay />
                  </IconContext.Provider>
                </IconButton>
                <Text>See how it works</Text>
              </ContentWrapper>
            </LeftHero>
            <RightHero>
              <ShapeImage src={Shape} />

              <HeroImage src={Woman} />
              <ReviewCard>
                <Text light_grey>
                  80 percent said they'd be more likely to purchase if they saw
                  profile with positive user reviews..
                </Text>
                <IconContext.Provider
                  value={{
                    style: { height: '20px', width: '20px', color: '#F3C12C' },
                  }}
                >
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </IconContext.Provider>
              </ReviewCard>
            </RightHero>
          </LeftRightWrapper>
        </Container>
      </HeroWrapper>
    </>
  )
}
export default Hero
