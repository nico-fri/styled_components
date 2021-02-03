import styled, { css } from 'styled-components/macro'
import { Link } from 'react-scroll'

export const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  padding-bottom: 20px;
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

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  min-width: 75px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.1s ease-in;
  margin: 10px 0;
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

export const SidebarWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in;
  background: ${(props) => props.theme.background.secondary};
  @media (min-width: 992px) {
    display: none;
  }
`
