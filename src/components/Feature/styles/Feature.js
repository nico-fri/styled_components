import styled, { css } from 'styled-components/macro'

export const FeatureWrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export const FirstFeature = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) =>
    props.reverse &&
    css`
      order: 2;
    `}
  @media (max-width: 992px) {
    order: 2;
    width: 100%;
  }
`

export const SecondFeature = styled.div`
  padding: 0 50px;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  ${(props) =>
    props.reverse &&
    css`
      order: 1;
    `}
  @media (max-width: 992px) {
    order: 1;
    width: 100%;
    padding: 0;
  }
`

export const FeatureImage = styled.img`
  margin: 20px 0;
  width: 90%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  min-width: 75px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.1s ease-in;
  color: ${(props) => props.theme.colors.light};
  background: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(241, 80, 96, 0.8) 0px 7px 29px 0px;
`

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`

export const TopLine = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;
  line-height: 25px;
`
