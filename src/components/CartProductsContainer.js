import React from 'react';
import CartItem from './CartItem';

const CartProductsContainer = ({ products }) => {
  const CartProducts = products.map(product => (
    <CartItem key={product._id.$oid} {...product} id={product._id.$oid} />
  ));
  return (
    <div className="cart-list-product">
      {CartProducts.length > 0 ? CartProducts : <div>Nothing to show</div>}
    </div>
  );
};

export default CartProductsContainer;
