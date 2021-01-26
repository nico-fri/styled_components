import styled, { css } from 'styled-components'

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
