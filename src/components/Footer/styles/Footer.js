import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
  padding: 50px 0;
  background: ${(props) => props.theme.background.footer};
`

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.light_grey};
  height: 1px;
  width: 200px;
  margin: 20px;
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;
  line-height: 25px;
  color: ${(props) => props.theme.colors.secondary};
`

export const FooterLink = styled(Link)`
  font-size: 1.2rem;
  margin: 5px 25px;
  text-decoration: none;
  transition: all 0.2s ease-in;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.colors.secondary}!important;
    `};
`

export const IconImage = styled.img`
  height: 2rem;
  margin-right: 5px;
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
  color: ${(props) => props.theme.colors.secondary};
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
