import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartModal from '@/components/Cart/container'
import { StyledCart, StyledCartIcon } from '@/components/styled/StyledHeader'

class Cart extends Component {
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
      <StyledCart>
        <Tippy content="Your cart">
          <StyledCartIcon role="presentation" data-count={cart}
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg"
              className="header-cart" />
          </StyledCartIcon>
        </Tippy>
        <CartModal products={products} isOpen={isOpen}
          toggleModal={this.toggleModal} />
      </StyledCart>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.products.length,
    products: state.cart.products,
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.number,
}

export default connect(mapStateToProps)(Cart)
