const isInLocalStorage = key => {
  let result;
  if (typeof localStorage.getItem(key) === 'string') {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const getDataFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

const getDataForFilter = (products, field) => {
  let output = [];
  output = products.reduce((result, product) => [...result, product[field]], []);
  output = new Set([].concat(...output));
  output = Array.from(output, value => {
    return { value, label: value };
  });
  return output;
};

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
  switch (true) {
    case checkFilter(filter.search):
      products = filterList(filter.search, products, 'search');
    /* falls through */
    case checkFilter(filter.sortBy):
      products = filterList(filter.sortBy, products);
    /* falls through */
    case checkFilter(filter.tags):
      products = filterList(filter.tags, products, 'tags');
    /* falls through */
    case checkFilter(filter.size):
      products = filterList(filter.size, products, 'size');
    /* falls through */
    case checkFilter(filter.colors):
      products = filterList(filter.colors, products, 'color');
    /* falls through */
    default:
      return products;
  }
};

const LazyLoadInit = () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  if ('IntersectionObserver' in window) {
    // eslint-disable-next-line no-undef
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage);
    });
  }
};

const isEquil = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const constants = {
  API:
    'https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json',
  PRODUCTS: 'products'
};

const actionConsts = {
  GET_ITEMS: 'GET_ITEMS',
  SET_FILTER_SEARCH: 'SET_FILTER_SEARCH',
  FETCH: 'FETCH',
  FETCHED: 'FETCHED',
  FETCHED_ERROR: 'FETCHED_ERROR',
  SET_ITEMS: 'SET_ITEMS',
  SET_FILTER_COLORS: 'SET_FILTER_COLORS',
  SET_FILTER_SIZE: 'SET_FILTER_SIZE',
  SET_FILTER_TAGS: 'SET_FILTER_TAGS',
  SET_FILTER_SORT_BY: 'SET_FILTER_SORT_BY',
  SET_PRODUCT_TO_CART: 'SET_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
  CHANGE_CART_PRODUCT_COUNT: 'CHANGE_CART_PRODUCT_COUNT',
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE'
};

export {
  isInLocalStorage,
  getDataFromLocalStorage,
  getDataForFilter,
  isEquil,
  filterProduct,
  LazyLoadInit,
  constants,
  actionConsts
};
