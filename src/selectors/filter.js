import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getProducts = state => state.products.products;

const filterList = (type, value, name) => {
  let result = value;
  if (type === 'rating' || type === 'price' || type === 'priceAsc' || type === 'ratingAsc') {
    let asc = false;
    result = result.sort((a, b) => {
      if (type === 'priceAsc' || type === 'ratingAsc') {
        type.slice(0, -3);
        asc = true;
      }
      const value1 = a[type];
      const value2 = b[type];

      if (value1 < value2) return 1;
      if (value1 > value2) return -1;

      return 0;
    });

    if (asc) {
      result = result.reverse();
    }
  } else if (name === 'search') {
    result = result.filter(product => {
      return product.title.includes(type);
    });
  }

  if (typeof type === 'object' && type !== null) {
    const i = result.filter(product => {
      const productVal = product[name];
      const sizes = type.map(size => size.value);
      return sizes.every(id => productVal.includes(id));
    });
    result = i;
  }
  return result;
};

const checkFilter = filter => {
  return filter !== null && filter.length !== 0;
};

const filterProduct = (products, filter) => {
  let result = products;
  switch (true) {
    case checkFilter(filter.search):
      result = filterList(filter.search, result, 'search');
    /* falls through */
    case checkFilter(filter.sortBy):
      result = filterList(filter.sortBy, result);
    /* falls through */
    case checkFilter(filter.tags):
      result = filterList(filter.tags, result, 'tags');
    /* falls through */
    case checkFilter(filter.size):
      result = filterList(filter.size, result, 'size');
    /* falls through */
    case checkFilter(filter.colors):
      result = filterList(filter.colors, result, 'colors');
    /* falls through */
    default:
      return result;
  }
};

export default createSelector(
  [getFilter, getProducts],
  (filter, products) => {
    return filterProduct(products, filter);
  }
);
