import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import { Price } from '../Cards/subcomponents/index';
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

export default CartModal;
