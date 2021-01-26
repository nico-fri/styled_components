import React from 'react'
import { Button, IconButton } from '../../styles/Button'
import {
  Container,
  FlexStartRow,
  FlexRow,
  HeroContainer,
  LeftContainer,
  LeftRightWrapper,
  RightContainer,
} from '../../styles/Container'
import { H1, Text } from '../../styles/Font'
import Woman from '../../assets/Hero/woman.png'
import { HeroImage, ShapeImage } from '../../styles/Image'
import { BiPlay } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import { ReviewCard } from '../../styles/Card'
import { AiFillStar } from 'react-icons/ai'
import Shape from '../../assets/Hero/shape.png'
import { useHistory } from 'react-router-dom'

function Hero() {
  const history = useHistory()
  return (
    <HeroContainer>
      <Container>
        <LeftRightWrapper>
          <LeftContainer>
            <H1>Hire freelancers with better reviews</H1>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, reiciendis obcaecati aut dolores, asperiores voluptatem
              voluptatibus nisi velit cum illum deserunt
            </Text>
            <FlexStartRow>
              <Button primary large onClick={() => history.push('/error')}>
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
            </FlexStartRow>
          </LeftContainer>
          <RightContainer>
            <ShapeImage src={Shape} />

            <FlexRow>
              <HeroImage src={Woman} />
            </FlexRow>
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
          </RightContainer>
        </LeftRightWrapper>
      </Container>
    </HeroContainer>
  )
}
export default Hero
