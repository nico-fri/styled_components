import styled, { css } from 'styled-components/macro'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 110px;
  padding-bottom: 30px;
  background: ${(props) => props.theme.background.secondary};
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`

export const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li``

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
`

export const Logo = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
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

export const LogoImage = styled.img`
  height: 2rem;
  margin-right: 5px;
`
