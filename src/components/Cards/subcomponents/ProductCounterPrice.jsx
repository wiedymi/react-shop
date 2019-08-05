import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Price from '@/components/Cards/subcomponents/Price'
import StyledCounter from '@/components/styled/StyledCounter'
class ProductCounterPrice extends Component {
  decrement = () => {
    const { handleCount, count } = this.props
    handleCount(count === 1 ? 1 : count - 1)
  }

  increment = () => {
    const { handleCount, count } = this.props
    handleCount(count + 1)
  }

  render () {
    const { count, price } = this.props
    return (
      <StyledCounter>
        <div className="counter desktop">
          <div className="decrement" onClick={this.decrement}
            role="presentation"
          >
            -
          </div>
          <div className="result">{count}</div>
          <div className="increment" onClick={this.increment}
            role="presentation"
          >
            +
          </div>
          <Price count={count} price={price} />
        </div>
        <div className="counter mobile">
          <Price count={count} price={price}
            text="Price: " />
        </div>
      </StyledCounter>
    )
  }
}

ProductCounterPrice.propTypes = {
  handleCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCounterPrice
