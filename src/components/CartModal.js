import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Button from './Button';
import { Price } from './Cards/subcomponents/index';
import CartProductsContainer from './CartProductsContainer';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #eee'
  }
};

class CartModal extends Component {
  componentDidMount() {
    Modal.setAppElement('body');
  }

  render() {
    const { isOpen, toggleModal, products, price } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Cart Modal"
        style={modalStyles}
        overlayClassName="modal-overlay"
      >
        <div className="cart-modal">
          <h3>Your Cart</h3>
          <div className="sm-cards">
            <CartProductsContainer products={products} />
          </div>
          <hr />
          <div className="cart-modal-purchase">
            <Button text="Purchase" />
            <Price price={price} text="Total: " />
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  let { cart, products } = state;
  let cartids = cart.products.map(cartProduct => cartProduct.id);
  cartids = [...new Set(cartids)];

  products = products.products.filter(product => {
    return [product._id.$oid].some(id => {
      return cartids.includes(id);
    });
  });

  products = products.map(product => {
    return {
      ...product,
      count: +cart.products
        .map(cart => {
          let count;
          if (product._id.$oid === cart.id) {
            count = cart.count;
          }
          return count;
        })
        .toString()
        .replace(/,/g, '')
    };
  });
  return {
    products,
    price: products.reduce((price, product) => {
      return (price += +product.price * +product.count);
    }, 0)
  };
};

export default connect(mapStateToProps)(CartModal);
