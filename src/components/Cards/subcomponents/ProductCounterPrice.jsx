import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Price from '@/components/Cards/subcomponents/Price'
import StyledCounter from '@/components/styled/StyledCounter'
import { NotificationManager } from 'react-notifications'

class ProductCounterPrice extends Component {
  decrement = () => {
    const { handleCount, count } = this.props
    handleCount(count === 1 ? 1 : count - 1)
  }

  increment = () => {
    const { handleCount, count } = this.props
    const maxCountOfProduct = 50

    if (count + 1 <= maxCountOfProduct) {
      handleCount(count + 1)
    } else {
      NotificationManager.error('You can add to your cart only 50 items for each product')
    }
  }

  render () {
    const { count, price, isProductPage } = this.props
    return (
      <StyledCounter>
        <div className="counter ">
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
          <Price count={count} price={price}
            text="Total: " />
        </div>
        {!isProductPage ? (
          <div className="counter mobile">
            <Price count={count} price={price}
              text="Price: " />
          </div>
        ) : (
          ''
        )}
      </StyledCounter>
    )
  }
}
ProductCounterPrice.defaultProps = {
  isProductPage: false,
}
ProductCounterPrice.propTypes = {
  handleCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isProductPage: PropTypes.bool.isRequired,
}

export default ProductCounterPrice
