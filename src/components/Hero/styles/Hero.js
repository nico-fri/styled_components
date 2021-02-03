import styled, { css } from 'styled-components/macro'

export const ReviewCard = styled.div`
  border-radius: 15px 15px 0 15px;
  background: ${(props) => props.theme.background.footer};
  padding: 5px 20px 15px 20px;
  position: absolute;
  bottom: 15%;
  right: 0;
  width: 100%;
  max-width: 250px;
  text-align: center;
  z-index: 2;
`

export const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;
  line-height: 25px;
  ${(props) =>
    props.light_grey &&
    css`
      color: ${(props) => props.theme.colors.light_grey}!important;
    `};
`

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  min-width: 130px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.1s ease-in;
  ${(props) =>
    props.mobile &&
    css`
      margin: 10px 0;
    `};
  ${(props) =>
    props.primary &&
    css`
      color: ${props.theme.colors.light};
      background: ${props.theme.colors.primary};
      box-shadow: rgba(241, 80, 96, 0.8) 0px 7px 29px 0px;
    `};
  ${(props) =>
    props.secondary &&
    css`
      color: ${props.theme.colors.dark};
      background: ${props.theme.colors.secondary};
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `}
`

export const IconButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  margin-right: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: ${(props) => props.theme.colors.secondary};
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
  }
`

export const HeroWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.background.secondary};
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const HeroImage = styled.img`
  margin-top: 50px;
  width: 70%;
  z-index: 2;
`

export const ShapeImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  object-fit: contain;
`

export const LeftHero = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const RightHero = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
  }
`
