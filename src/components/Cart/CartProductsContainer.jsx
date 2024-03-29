import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '@/components/Cart/ProductItem/container'

const CartProductsContainer = ({ products }) => {
  const CartProducts = products.map(product => (
    <ProductItem key={product._id.$oid} {...product}
      id={product._id.$oid} />
  ))
  return (
    <div className="cart-list-product">
      {CartProducts.length > 0 ? CartProducts : <div>Nothing to show</div>}
    </div>
  )
}

CartProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
}
export default CartProductsContainer
