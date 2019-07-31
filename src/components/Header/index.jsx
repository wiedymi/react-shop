import React, { useState } from 'react'
import Cart from '@/components/Header/Cart'
import Logo from '@/components/Header/Logo'
import Container from '@/components/Container'

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
    <div className={`header ${fixedHeader}`}>
      <Container>
        <Logo />
        <div className="grid-d-8 grid-t-1 grid-tl-1 grid-m-1"> </div>
        <Cart />
      </Container>
    </div>
  )
}

export default Header
