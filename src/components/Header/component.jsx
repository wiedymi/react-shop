import React from 'react'
import Cart from '@/components/Header/Cart'
import Container from '@/components/Container'
import { StyledHeader } from '@/components/styled/StyledHeader'
import Search from '@/components/Search'
import Logo from '@/components/Header/Logo'
import StyledNavbar from '@/components/Header/styled'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Cart />
          <Search />
        </Container>
      </StyledHeader>
      <StyledNavbar>
        <div className="navbar">
          <Container>
            <Logo />
            <div className="grid-d-6">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className="banner">
          <div className="blur">
            <Container>
              <div className="info">
                <h2>
                  Sign up and get <span>27%</span> off
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Container>
          </div>
        </div>
      </StyledNavbar>
    </>
  )
}

export default Header
