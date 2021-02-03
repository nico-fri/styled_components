import React, { useState } from 'react'
import { Container } from '../../styles/Container'
import {
  Nav,
  NavContainer,
  NavLinks,
  NavMenu,
  ListItem,
  ListWrapper,
  ListLink,
  Logo,
  Button,
  LogoImage,
} from './styles/Navbar'
import { links } from '../../data/links'
import LogoImg from '../../assets/reviews.svg'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'
import { useHistory } from 'react-router-dom'
import { Sidebar } from '../../components'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const history = useHistory()

  return (
    <>
      <Nav>
        <Container>
          <NavContainer>
            <Logo>
              <LogoImage src={LogoImg} />
              Reviews
            </Logo>
            <NavLinks>
              <ListWrapper>
                {links.map((item, index) => (
                  <ListItem key={index}>
                    <ListLink
                      activeClass='active'
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-10}
                    >
                      {item.title}
                    </ListLink>
                  </ListItem>
                ))}
              </ListWrapper>
              <Button secondary onClick={() => history.push('/error')}>
                Login
              </Button>
              <Button primary onClick={() => history.push('/error')}>
                Create Account
              </Button>
            </NavLinks>
            <NavMenu onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <IconContext.Provider
                  value={{ style: { height: '20px', width: '20px' } }}
                >
                  <VscClose />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{ style: { height: '20px', width: '20px' } }}
                >
                  <HiOutlineMenuAlt4 />
                </IconContext.Provider>
              )}
            </NavMenu>
          </NavContainer>
        </Container>
      </Nav>
      <Sidebar isVisible={isVisible} />
    </>
  )
}

export default Navbar
