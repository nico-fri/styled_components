import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ErrorImage = styled.img`
  width: 70%;
`

export const ErrorLink = styled(Link)`
  font-size: 1.2rem;
  margin: 5px 25px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey};
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin: 15px 0;
  line-height: 25px;
`

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`
