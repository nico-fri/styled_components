import React from 'react'
import {
  FeatureWrapper,
  FirstFeature,
  SecondFeature,
  FeatureImage,
  Button,
  Heading,
  Text,
  TopLine,
} from './styles/Feature'
import { useHistory } from 'react-router-dom'

function Feature({ title, subtitle, reverse, img, btnText, topLine }) {
  const history = useHistory()
  return (
    <>
      <FeatureWrapper>
        <FirstFeature reverse={reverse}>
          <FeatureImage src={img} />
        </FirstFeature>
        <SecondFeature reverse={reverse}>
          <TopLine>{topLine}</TopLine>
          <Heading>{title}</Heading>
          <Text>{subtitle}</Text>
          <Button onClick={() => history.push('/error')}>{btnText}</Button>
        </SecondFeature>
      </FeatureWrapper>
    </>
  )
}

export default Feature
