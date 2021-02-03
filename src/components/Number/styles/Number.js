import styled, { css } from 'styled-components/macro'

export const Card = styled.div`
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 200px;
  min-height: 200px;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
`

export const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 15px;
  margin: 50px 20px;
  ${(props) =>
    props.first &&
    css`
      background: rgba(241, 80, 96, 0.2);
    `}
  ${(props) =>
    props.second &&
    css`
      background: rgba(96, 80, 241, 0.2);
    `}
      ${(props) =>
    props.third &&
    css`
      background: rgba(80, 241, 96, 0.2);
    `}
`

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`

export const CardTitle = styled.h3`
  font-size: 2rem;
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

export const CardText = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;
  line-height: 25px;
`
