import { actionConsts } from '../handlers';

const initState = {
  products: []
};

export default (state = initState, action) => {
  const { products } = state;
  const { id, count } = action;
  switch (action.type) {
    case actionConsts.SET_PRODUCT_TO_CART:
      return {
        ...state,
        products: action.products
      };
    case actionConsts.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: products.filter(product => {
          return product.id !== id;
        })
      };
    case actionConsts.CHANGE_CART_PRODUCT_COUNT:
      return {
        ...state,
        products: products.map(product => {
          let temp;
          if (product.id === id) {
            temp = {
              id: product.id,
              count
            };
          }
          return product && temp;
        })
      };
    default:
      return state;
  }
};
