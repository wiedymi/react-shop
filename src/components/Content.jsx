import React from 'react'
import Container from '@/components/Container'
import Search from '@/components/Search/container'
import Filter from '@/components/Filter/container'
import Cards from '@/components/Cards/container'

const Content = () => {
  return (
    <Container>
      <div className="grid-d-9 grid-t-8 grid-tl-8 grid-m-12 no-padding">
        <div className="content grid-12">
          <Search />
        </div>
        <div className="grid-d-12 rid-t-4 grid-tl-4 grid-m-12 no-margin">
          <Filter mobile />
        </div>
        <div className="content grid-12 tn-top m-bottom">
          <Cards />
        </div>
      </div>
      <div className="grid-d-3 grid-t-4 grid-tl-4 grid-m-12 lf-padding">
        <div className="grid-12 no-padding relative">
          <Filter mobile={false} />
        </div>
      </div>
    </Container>
  )
}

export default Content
