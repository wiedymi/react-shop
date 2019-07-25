import { connect } from 'react-redux';
import CartModal from './component';

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
