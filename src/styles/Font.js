import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
`

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.colors.secondary}!important;
    `};
`

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`

export const H4 = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.colors.secondary};
    `};
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `};
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
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.colors.secondary};
    `};
`

export const Linkr = styled(Link)`
  font-size: 1.2rem;
  margin: 5px 25px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey};
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.colors.secondary};
    `};
`
