import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import { Price } from '@/components/Cards/subcomponents/index'
import CartProductsContainer from '@/components/Cart/CartProductsContainer'
import StyledModal from '@/components/styled/StyledModal'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #eee',
  },
}

class CartModal extends Component {
  componentDidMount () {
    Modal.setAppElement('body')
  }

  render () {
    const { isOpen, toggleModal, products, price } = this.props
    return (
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="Cart Modal"
          style={modalStyles}
          overlayClassName="modal-overlay"
        >
          <StyledModal>
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
          </StyledModal>
        </Modal>
      </>
    )
  }
}

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
}

export default CartModal
