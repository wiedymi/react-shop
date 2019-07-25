import React from 'react';
import ProductCart from './ProductCart/container';

const CartProductsContainer = ({ products }) => {
  const CartProducts = products.map(product => (
    <ProductCart key={product._id.$oid} {...product} id={product._id.$oid} />
  ));
  return (
    <div className="cart-list-product">
      {CartProducts.length > 0 ? CartProducts : <div>Nothing to show</div>}
    </div>
  );
};

export default CartProductsContainer;
