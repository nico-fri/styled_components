import React from 'react'
import {
  Container,
  FooterContainer,
  FlexRow,
  CenterWrapper,
  Divider,
} from '../../styles/Container'
import { H2, Linkr, Text } from '../../styles/Font'
import { ListItem, ListWrapper, ListLink } from '../../styles/List'
import { links } from '../../data/links'
import Logo from '../../assets/reviews.svg'
import { IconImage } from '../../styles/Image'

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <CenterWrapper>
          <IconImage src={Logo} />
          <H2 light>Start growing</H2>
          <H2 light>with Reviews today</H2>
          <Divider />
        </CenterWrapper>
        <FlexRow>
          <CenterWrapper>
            <ListWrapper>
              {links.map((item, index) => (
                <ListItem key={index}>
                  <ListLink
                    light
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
            <CenterWrapper>
              <Text light>{new Date().getFullYear()}</Text>
              <Linkr light>Impressum</Linkr>
              <Linkr light>Datenschutz</Linkr>
            </CenterWrapper>
          </CenterWrapper>
        </FlexRow>
      </Container>
    </FooterContainer>
  )
}

export default Footer
