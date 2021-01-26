import React, { useState } from 'react'
import { Container, FlexRow } from '../../styles/Container'
import { H3 } from '../../styles/Font'
import { ListItem, ListWrapper, ListLink } from '../../styles/List'
import { Nav, NavContainer, NavLinks, NavMenu } from '../../styles/Navbar'
import { links } from '../../data/links'
import { Button } from '../../styles/Button'
import { IconImage } from '../../styles/Image'
import Logo from '../../assets/reviews.svg'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'
import { useHistory } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const history = useHistory()

  return (
    <>
      <Nav>
        <Container>
          <NavContainer>
            <FlexRow>
              <IconImage src={Logo} />
              <H3>Reviews</H3>
            </FlexRow>
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
