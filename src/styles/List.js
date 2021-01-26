import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'

export const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`

export const ListItem = styled.li`
  ${(props) =>
    props.padding &&
    css`
      padding-bottom: 20px;
    `};
`

export const ListLink = styled(Link)`
  font-size: 1.2rem;
  margin: 5px 25px;
  font-weight: 700;
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
