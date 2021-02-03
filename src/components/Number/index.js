import React from 'react'
import {
  Card,
  CardWrapper,
  CenterWrapper,
  CardContainer,
  Heading,
  TopLine,
  CardTitle,
  CardText,
} from './styles/Number'

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
    <>
      <CenterWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading>{title}</Heading>
      </CenterWrapper>
      <CardContainer>
        <CardWrapper first>
          <Card>
            <CardTitle>{cardOne}</CardTitle>
            <CardText>{textOne}</CardText>
          </Card>
        </CardWrapper>
        <CardWrapper second>
          <Card>
            <CardTitle>{cardTwo}</CardTitle>
            <CardText>{textTwo}</CardText>
          </Card>
        </CardWrapper>
        <CardWrapper third>
          <Card>
            <CardTitle>{cardThree}</CardTitle>
            <CardText>{textThree}</CardText>
          </Card>
        </CardWrapper>
      </CardContainer>
    </>
  )
}

export default Number
