import React from 'react'
import { StyledHeaderH1, StyledLogo } from '@/components/styled/StyledHeader'

const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <StyledHeaderH1>
          <span>React</span> Shop
        </StyledHeaderH1>
      </a>
    </StyledLogo>
  )
}

export default Logo
