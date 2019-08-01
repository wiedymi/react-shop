import React from 'react'
import Container from '@/components/Container'
import Search from '@/components/Search/container'
import Filter from '@/components/Filter/container'
import Cards from '@/components/Cards/container'
import {
  StyledSearch,
  StyledSearchContent,
  StyledCardContent,
  StyledFilter,
  StyledCardMobileContent,
  StyledFilterMobile,
} from '@/components/styled/StyledContent'

const Content = () => {
  return (
    <Container>
      <StyledSearch>
        <StyledSearchContent>
          <Search />
        </StyledSearchContent>
        <StyledFilter>
          <Filter mobile />
        </StyledFilter>
        <StyledCardContent>
          <Cards />
        </StyledCardContent>
      </StyledSearch>
      <StyledFilterMobile>
        <StyledCardMobileContent>
          <div className="absolute">
            <Filter mobile={false} />
          </div>
        </StyledCardMobileContent>
      </StyledFilterMobile>
    </Container>
  )
}

export default Content
