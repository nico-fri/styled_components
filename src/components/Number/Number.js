import React from 'react'
import { Card, CardWrapper } from '../../styles/Card'
import {
  Container,
  FlexRow,
  LeftRightWrapper,
  CenterWrapper,
} from '../../styles/Container'
import { H2, H4, H3, Text } from '../../styles/Font'

function Number({
  title,
  topLine,
  cardOne,
  textOne,
  cardTwo,
  textTwo,
  cardThree,
  textThree,
}) {
  return (
    <Container>
      <FlexRow>
        <CenterWrapper>
          <H4 primary>{topLine}</H4>
          <H2>{title}</H2>
        </CenterWrapper>
      </FlexRow>
      <FlexRow>
        <LeftRightWrapper>
          <CardWrapper first>
            <Card>
              <H3>{cardOne}</H3>
              <Text>{textOne}</Text>
            </Card>
          </CardWrapper>
          <CardWrapper second>
            <Card>
              <H3>{cardTwo}</H3>
              <Text>{textTwo}</Text>
            </Card>
          </CardWrapper>
          <CardWrapper third>
            <Card>
              <H3>{cardThree}</H3>
              <Text>{textThree}</Text>
            </Card>
          </CardWrapper>
        </LeftRightWrapper>
      </FlexRow>
    </Container>
  )
}

export default Number
