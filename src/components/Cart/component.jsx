import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import Button from '@/components/common/Button/component'
import { Price } from '@/components/Products/subcomponents'
import CartProduct from '@/components/Cart/CartProduct'
import CartWrapper from '@/components/Cart/styles'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #e6e6e6',
    borderRadius: '1rem',
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
          <CartWrapper>
            <div className="cart-modal">
              <h3>Your Cart</h3>
              <div className="sm-cards">
                <div className="cart-list-product">
                  {products.length > 0 ? (
                    products.map(product => (
                      <CartProduct
                        key={product._id.$oid}
                        id={product._id.$oid}
                        title={product.title}
                        price={product.price}
                        count={product.count} />
                    ))
                  ) : (
                    <div>Nothing to show</div>
                  )}
                </div>
              </div>
              <hr />
              <div className="cart-modal-purchase">
                <Button text="Purchase" />
                <Price price={price} text="Total: " />
              </div>
            </div>
          </CartWrapper>
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
