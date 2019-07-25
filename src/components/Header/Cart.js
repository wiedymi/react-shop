import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import CartModal from '../Cart/container';

class Cart extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    const { products, cart } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="grid-d-2 grid-t-3 grid-tl-3 grid-m-3">
        <Tippy content="Your cart">
          <div
            role="presentation"
            className="header-cart mobile-right right"
            data-count={cart}
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="header-cart" />
          </div>
        </Tippy>
        <CartModal products={products} isOpen={isOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.products.length,
    products: state.cart.products
  };
};

export default connect(mapStateToProps)(Cart);
