import React from 'react'
import {
  Container,
  FeatureContainer,
  FlexRow,
  LeftRightWrapper,
  FirstFeature,
  SecondFeature,
  Wrapper,
} from '../../styles/Container'
import { H2, Text, H4 } from '../../styles/Font'
import { FeatureImage } from '../../styles/Image'
import { Button } from '../../styles/Button'
import { useHistory } from 'react-router-dom'

function Feature({ title, subtitle, reverse, img, btnText, topLine }) {
  const history = useHistory()
  return (
    <FeatureContainer>
      <Container>
        <LeftRightWrapper>
          <FirstFeature reverse={reverse}>
            <FlexRow>
              <FeatureImage src={img} />
            </FlexRow>
          </FirstFeature>
          <SecondFeature reverse={reverse}>
            <Wrapper>
              <H4 primary>{topLine}</H4>
              <H2>{title}</H2>
              <Text>{subtitle}</Text>
              <Button primary onClick={() => history.push('/error')}>
                {btnText}
              </Button>
            </Wrapper>
          </SecondFeature>
        </LeftRightWrapper>
      </Container>
    </FeatureContainer>
  )
}

export default Feature
