import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartModal from '@/components/Cart/container'
import { CartIconWrapper, CartIcon } from '@/components/Cart/CartHeaderIcon/styles'

class CartHeaderIcon extends Component {
  state = {
    isOpen: false,
  }

  toggleModal = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen }
    })
  }

  render () {
    const { products, cart } = this.props
    const { isOpen } = this.state
    return (
      <CartIconWrapper>
        <Tippy content="Your cart">
          <CartIcon role="presentation" data-count={cart}
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg"
              className="header-cart" />
          </CartIcon>
        </Tippy>
        <CartModal products={products} isOpen={isOpen}
          toggleModal={this.toggleModal} />
      </CartIconWrapper>
    )
  }
}

CartHeaderIcon.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.number,
}
export default CartHeaderIcon
