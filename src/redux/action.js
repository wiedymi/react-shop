import actionConsts from '@/redux/actionConsts';

const {
  SET_PRODUCT_TO_CART,
  CHANGE_CART_PRODUCT_COUNT,
  SET_FILTER_COLORS,
  SET_FILTER_SEARCH,
  SET_FILTER_SIZE,
  SET_FILTER_SORT_BY,
  SET_FILTER_TAGS,
  REMOVE_PRODUCT_FROM_CART,
  PREV_PAGE,
  NEXT_PAGE,
  FETCH,
  FETCHED,
  FETCHED_ERROR
} = actionConsts;

export const search = searchText => {
  return { type: SET_FILTER_SEARCH, search: searchText };
};

export const fetchItem = () => {
  return { type: FETCH };
};

export const fetchedItem = products => {
  return { type: FETCHED, products };
};

export const fetchedItemError = () => {
  return { type: FETCHED_ERROR };
};

export const setFilterBy = (type, value) => {
  switch (type) {
    case 'color':
      return { type: SET_FILTER_COLORS, colors: value };
    case 'tags':
      return { type: SET_FILTER_TAGS, tags: value };
    case 'size':
      return { type: SET_FILTER_SIZE, size: value };
    case 'sortBy':
      return { type: SET_FILTER_SORT_BY, sortBy: value };
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
  return { type: SET_PRODUCT_TO_CART, products: result };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const prevPage = () => {
  return { type: PREV_PAGE };
};

export const removeFromCart = function removeProductFromCartById(id, count) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
    count
  };
};

export const updateCartData = function changeCartProductCount(id, count) {
  return {
    type: CHANGE_CART_PRODUCT_COUNT,
    id,
    count
  };
};
