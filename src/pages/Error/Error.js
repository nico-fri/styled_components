import React from 'react'
import {
  Container,
  LeftContainer,
  LeftRightWrapper,
  RightContainer,
  MaxContainer,
  FlexRow,
  Wrapper,
} from '../../styles/Container'
import { H1, Linkr, Text } from '../../styles/Font'
import { Image } from '../../styles/Image'
import Progress from '../../assets/Error/progress.svg'

function Error() {
  return (
    <MaxContainer>
      <Container>
        <LeftRightWrapper>
          <LeftContainer>
            <FlexRow>
              <Wrapper>
                <H1>Under Development</H1>
                <Text>This site is currently under development</Text>
                <Linkr to='/'>Back to home</Linkr>
              </Wrapper>
            </FlexRow>
          </LeftContainer>
          <RightContainer>
            <FlexRow>
              <Image src={Progress} />
            </FlexRow>
          </RightContainer>
        </LeftRightWrapper>
      </Container>
    </MaxContainer>
  )
}

export default Error
