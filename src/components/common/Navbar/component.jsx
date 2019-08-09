import React from 'react'
import NavbarWrapper from '@/components/common/Navbar/styles'

const component = () => {
  return (
    <NavbarWrapper>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">
              <h1>
                <span>R</span>Shop
              </h1>
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default component
