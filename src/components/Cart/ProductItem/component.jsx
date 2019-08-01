import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledCart from '@/components/styled/StyledCart'

class ProductCart extends Component {
  state = {
    maxCountOfProduct: 50,
    minCountOfProduct: 1,
  }

  handleChange = ({ target }) => {
    const { id, updateProduct } = this.props
    const currentValueInCounter = target.value
    const { maxCountOfProduct, minCountOfProduct } = this.state
    if (currentValueInCounter === '') {
      updateProduct(id, 1)
    } else if (
      currentValueInCounter >= minCountOfProduct &&
      currentValueInCounter <= maxCountOfProduct
    ) {
      updateProduct(id, target.value)
    }
  }

  handleClickDelete = () => {
    const { id, count, removeProduct } = this.props
    removeProduct(id, count)
  }

  render () {
    const { title, price, count } = this.props
    return (
      <StyledCart>
        {title.length > 0 ? (
          <div className="cart-item">
            <div className="cart-item-info">
              <p>
                {title} {price}$
              </p>
            </div>
            <div className="cart-item-counter">
              <input type="number" value={count}
                onChange={this.handleChange} />
              <div
                className="cart-item-close"
                onClick={this.handleClickDelete}
                role="presentation"
                onKeyDown={() => {}}
              >
                x
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </StyledCart>
    )
  }
}

ProductCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  updateProduct: PropTypes.func.isRequired,
}

export default ProductCart
