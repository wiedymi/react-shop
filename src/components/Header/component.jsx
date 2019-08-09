import React from 'react'
import Cart from '@/components/Cart/CartHeaderIcon'
import HeaderWrapper from '@/components/Header/styles'
import Search from '@/components/Search'
import Banner from '@/components/common/Banner'
import Navbar from '@/components/common/Navbar'

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="container flex-end">
          <Search />
          <Cart />
        </div>
      </HeaderWrapper>
      <Navbar />
      <Banner />
    </>
  )
}

export default Header
