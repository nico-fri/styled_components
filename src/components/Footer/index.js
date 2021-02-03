import React from 'react'
import { links } from '../../data/links'
import Logo from '../../assets/reviews.svg'
import {
  FooterWrapper,
  Divider,
  Text,
  FooterLink,
  Title,
  IconImage,
  ListWrapper,
  ListLink,
  ListItem,
  CenterWrapper,
} from './styles/Footer'
import { Container } from '../../styles/Container'
import { useHistory } from 'react-router-dom'

function Footer() {
  const history = useHistory()

  return (
    <>
      <FooterWrapper>
        <Container>
          <CenterWrapper>
            <IconImage src={Logo} />
            <Title light>Start growing</Title>
            <Title light>with Reviews today</Title>
            <Divider />
            <ListWrapper>
              {links.map((item, index) => (
                <ListItem key={index}>
                  <ListLink
                    activeClass='active'
                    to={item.to}
                    spy={true}
                    smooth={true}
                  >
                    {item.title}
                  </ListLink>
                </ListItem>
              ))}
            </ListWrapper>
            <Text>{new Date().getFullYear()}</Text>
            <FooterLink onClick={() => history.push('/error')}>
              Impressum
            </FooterLink>
          </CenterWrapper>
        </Container>
      </FooterWrapper>
    </>
  )
}

export default Footer
