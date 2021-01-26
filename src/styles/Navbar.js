import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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
