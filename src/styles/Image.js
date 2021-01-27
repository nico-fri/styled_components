import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
`

export const IconImage = styled.img`
  height: 2rem;
  margin-right: 5px;
`

export const HeroImage = styled(Image)`
  margin-top: 50px;
  width: 70%;
  z-index: 2;
`

export const FeatureImage = styled(Image)`
  margin: 20px 0;
  width: 90%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const ShapeImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  object-fit: contain;
`
