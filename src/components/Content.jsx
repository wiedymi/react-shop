import React from 'react'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import Container from '@/components/Container'
import Search from '@/components/Search'
import Filter from '@/components/Filter'
import Cards from '@/components/Cards'
import {
  StyledSearch,
  StyledSearchContent,
  StyledCardContent,
  StyledFilter,
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
        <div className="grid-12 no-padding relative">
          <div className="absolute">
            <Filter mobile={false} />
          </div>
        </div>
      </StyledFilterMobile>
      <NotificationContainer />
    </Container>
  )
}

export default Content
