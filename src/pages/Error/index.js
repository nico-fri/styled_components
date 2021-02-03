import React from 'react'
import {
  Container,
  LeftContainer,
  LeftRightWrapper,
  RightContainer,
} from '../../styles/Container'
import Progress from '../../assets/Error/progress.svg'
import {
  ErrorWrapper,
  ErrorImage,
  ErrorLink,
  Text,
  Heading,
} from './styles/Error'

function Error() {
  return (
    <>
      <ErrorWrapper>
        <Container>
          <LeftRightWrapper>
            <LeftContainer>
              <Heading>Under Development</Heading>
              <Text>This site is currently under development</Text>
              <ErrorLink to='/'>Back to home</ErrorLink>
            </LeftContainer>
            <RightContainer>
              <ErrorImage src={Progress} />
            </RightContainer>
          </LeftRightWrapper>
        </Container>
      </ErrorWrapper>
    </>
  )
}

export default Error
