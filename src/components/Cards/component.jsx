import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import { LazyLoadInit } from '@/redux/handlers'
import Card from '@/components/Cards/Card/container'

class Cards extends Component {
  componentDidMount () {
    const { getProducts, isLoading } = this.props
    let result
    if (isLoading) {
      try {
        getProducts()
      } catch (error) {
        result = new Error(error)
        return result
      }
    }

    return result
  }

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
    )
  }
}

Cards.propTypes = {
  visibleProducts: PropTypes.array.isRequired,
  hasMoreProducts: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Cards
