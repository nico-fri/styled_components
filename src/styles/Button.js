import styled, { css } from 'styled-components'

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
  ${(props) =>
    props.large &&
    css`
      min-width: 130px;
    `}

    &:hover {
    ${(props) =>
      props.primary &&
      css`
        box-shadow: rgba(241, 80, 96, 0.8) 0px 0px 10px 0px;
      `};
    ${(props) =>
      props.secondary &&
      css`
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
      `}
  }
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
