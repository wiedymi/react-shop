import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import { LazyLoadInit } from '@/redux/handlers'
import Card from '@/components/Cards/Card/container'
import StyledCard from '@/components/styled/StyledCard'

class Cards extends Component {
  componentDidUpdate () {
    LazyLoadInit()
  }

  loadProducts = () => {
    const { nextPage, hasMoreProducts } = this.props
    if (hasMoreProducts) {
      nextPage()
    }
  }

  render () {
    const { visibleProducts, hasMoreProducts, isError } = this.props
    const cards = visibleProducts.map(product => <Card product={product} key={product._id.$oid} />)
    return (
      <StyledCard>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadProducts}
          hasMore={hasMoreProducts}
          loader="Load"
        >
          {isError ? (
            <div>No Internet Connection</div>
          ) : (
            <div className="cards">{cards.length > 0 ? cards : <div>Nothing to show</div>}</div>
          )}
        </InfiniteScroll>
      </StyledCard>
    )
  }
}

Cards.propTypes = {
  visibleProducts: PropTypes.array.isRequired,
  hasMoreProducts: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
}

export default Cards
