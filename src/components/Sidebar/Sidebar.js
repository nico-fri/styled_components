import React from 'react'
import {
  CenterWrapper,
  Container,
  SidebarContainer,
} from '../../styles/Container'
import { ListItem, ListLink, ListWrapper } from '../../styles/List'
import { links } from '../../data/links'
import { Button } from '../../styles/Button'
import { useHistory } from 'react-router-dom'

function Sidebar({ isVisible }) {
  const history = useHistory()

  return (
    isVisible && (
      <SidebarContainer>
        <Container>
          <CenterWrapper>
            <ListWrapper column>
              {links.map((item, index) => (
                <ListItem padding key={index}>
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
          </CenterWrapper>
          <CenterWrapper>
            <Button mobile secondary onClick={() => history.push('/error')}>
              Login
            </Button>
            <Button mobile primary onClick={() => history.push('/error')}>
              Create Account
            </Button>
          </CenterWrapper>
        </Container>
      </SidebarContainer>
    )
  )
}

export default Sidebar
