import { actionConsts } from './handlers';

export const getItems = () => {
  return { type: actionConsts.GET_ITEMS };
};

export const search = searchText => {
  return { type: actionConsts.SET_FILTER_SEARCH, search: searchText };
};

export const fetchItem = () => {
  return { type: actionConsts.FETCH };
};

export const fetchedItem = products => {
  return { type: actionConsts.FETCHED, products };
};

export const fetchedItemError = () => {
  return { type: actionConsts.FETCHED_ERROR };
};

export const setItems = products => {
  return { type: actionConsts.SET_ITEMS, products };
};

export const setColors = colors => {
  return { type: actionConsts.SET_FILTER_COLORS, colors };
};

export const setFilterBy = (type, value) => {
  switch (type) {
    case 'colors':
      return { type: actionConsts.SET_FILTER_COLORS, colors: value };
    case 'tags':
      return { type: actionConsts.SET_FILTER_TAGS, tags: value };
    case 'size':
      return { type: actionConsts.SET_FILTER_SIZE, size: value };
    case 'sortBy':
      return { type: actionConsts.SET_FILTER_SORT_BY, sortBy: value };
    default:
      return {};
  }
};

export const addToCart = (id, count, products) => {
  let result = products;
  if (result.length > 0) {
    let cartids = result.map(cart => cart.id);
    cartids = [...new Set(cartids)];

    if (cartids.includes(id)) {
      result = result.map(product => {
        let output = {
          id: product.id,
          count: product.count
        };
        if (product.id === id) {
          output = {
            id,
            count: product.count + count
          };
        }
        return output;
      });
    } else {
      result.push({
        id,
        count
      });
    }
  } else {
    result.push({
      id,
      count
    });
  }
  return { type: actionConsts.SET_PRODUCT_TO_CART, products: result };
};

export const nextPage = () => {
  return { type: actionConsts.NEXT_PAGE };
};

export const prevPage = () => {
  return { type: actionConsts.PREV_PAGE };
};

export const removeFromCart = function removeProductFromCartById(id, count) {
  return {
    type: actionConsts.REMOVE_PRODUCT_FROM_CART,
    id,
    count
  };
};

export const updateCartData = function changeCartProductCount(id, count) {
  return {
    type: actionConsts.CHANGE_CART_PRODUCT_COUNT,
    id,
    count
  };
};
