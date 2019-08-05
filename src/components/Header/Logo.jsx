import React from 'react'
import Tippy from '@tippy.js/react'
import { StyledHeaderH1, StyledLogo } from '@/components/styled/StyledHeader'

const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <Tippy content="Some info about the company, blah blah blah">
          <StyledHeaderH1>React Shop</StyledHeaderH1>
        </Tippy>
      </a>
    </StyledLogo>
  )
}

export default Logo
