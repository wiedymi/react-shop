import React, { useState } from 'react'
import Cart from '@/components/Header/Cart'
import Logo from '@/components/Header/Logo'
import Container from '@/components/Container'
import { StyledHeader } from '@/components/styled/StyledHeader'

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(null)
  const handleScroll = () => {
    const { scrollY } = window

    window.addEventListener(
      'onchange',
      scrollY > 50 ? setFixedHeader('fixed-header') : setFixedHeader(null),
    )
  }
  if (window.innerWidth > 724) window.addEventListener('scroll', handleScroll)
  return (
    <StyledHeader fixedHeader={fixedHeader}>
      <Container>
        <Logo />
        <Cart />
      </Container>
    </StyledHeader>
  )
}

export default Header
