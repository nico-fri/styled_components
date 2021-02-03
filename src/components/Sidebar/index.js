import React from 'react'
import {
  ListItem,
  ListLink,
  ListWrapper,
  Button,
  SidebarWrapper,
} from './styles/Sidebar'
import { links } from '../../data/links'
import { useHistory } from 'react-router-dom'

function Sidebar({ isVisible }) {
  const history = useHistory()

  return (
    isVisible && (
      <>
        <SidebarWrapper>
          <ListWrapper column>
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
        </SidebarWrapper>
      </>
    )
  )
}

export default Sidebar
