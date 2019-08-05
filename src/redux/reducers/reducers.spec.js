import FilterReducer from '@/redux/reducers/filter'
import CartReducer from '@/redux/reducers/cart'
import ProductsReducer from '@/redux/reducers/products'
import {
  search,
  setFilterBy,
  addToCart,
  removeFromCart,
  updateCartData,
  fetchItem,
  fetchedItem,
  fetchedError,
  nextPage,
  prevPage,
} from '@/redux/action'

describe('Filter Reducer', () => {
  it('should return the initial state', () => {
    expect(FilterReducer(undefined, {})).toEqual({
      search: '',
      sortBy: '',
      colors: [],
      size: [],
      tags: [],
    })
  })

  it('should return updated search field', () => {
    expect(FilterReducer(undefined, search('Testing'))).toEqual({
      search: 'Testing',
      sortBy: '',
      colors: [],
      size: [],
      tags: [],
    })
  })

  it('should return updated sort by field', () => {
    expect(FilterReducer(undefined, setFilterBy('sortBy', 'price'))).toEqual({
      search: '',
      sortBy: 'price',
      colors: [],
      size: [],
      tags: [],
    })
  })

  it('should return updated colors array', () => {
    expect(
      FilterReducer(undefined, setFilterBy('color', [{ value: 'red', label: 'red' }])),
    ).toEqual({
      search: '',
      sortBy: '',
      colors: [{ value: 'red', label: 'red' }],
      size: [],
      tags: [],
    })
  })

  it('should return updated size array', () => {
    expect(FilterReducer(undefined, setFilterBy('size', [{ value: 'xl', label: 'XL' }]))).toEqual({
      search: '',
      sortBy: '',
      colors: [],
      size: [{ value: 'xl', label: 'XL' }],
      tags: [],
    })
  })

  it('should return updated tags array', () => {
    expect(
      FilterReducer(undefined, setFilterBy('tags', [{ value: 'polo', label: 'polo' }])),
    ).toEqual({
      search: '',
      sortBy: '',
      colors: [],
      size: [],
      tags: [{ value: 'polo', label: 'polo' }],
    })
  })
})

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(CartReducer(undefined, {})).toEqual({
      products: [],
    })
  })

  it('should return setted product', () => {
    const products = []

    expect(CartReducer(undefined, addToCart(1, 15, products))).toEqual({
      products: [
        {
          id: 1,
          count: 15,
        },
      ],
    })
  })

  it('should return state with changed product', () => {
    const products = {
      products: [
        {
          id: 1,
          count: 15,
        },
      ],
    }
    expect(CartReducer(products, updateCartData(1, 10))).toEqual({
      products: [
        {
          id: 1,
          count: 10,
        },
      ],
    })
  })

  it('should return state without product', () => {
    const products = {
      products: [
        {
          id: 1,
          count: 15,
        },
      ],
    }
    expect(CartReducer(products, removeFromCart(1, 15))).toEqual({
      products: [],
    })
  })
})

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(ProductsReducer(undefined, {})).toEqual({
      products: [],
      page: 1,
      isFetching: false,
      isError: false,
    })
  })

  it('should return isFetching true', () => {
    expect(ProductsReducer(undefined, fetchItem())).toEqual({
      products: [],
      page: 1,
      isFetching: true,
      isError: false,
    })
  })

  it('should return isFetching false and set products', () => {
    expect(ProductsReducer(undefined, fetchedItem([{}]))).toEqual({
      products: [{}],
      page: 1,
      isFetching: false,
      isError: false,
    })
  })

  it('should return isFetching is false and isError is true', () => {
    expect(ProductsReducer(undefined, fetchedError())).toEqual({
      products: [],
      page: 1,
      isFetching: false,
      isError: true,
    })
  })

  it('should return state with next page', () => {
    expect(ProductsReducer(undefined, nextPage())).toEqual({
      products: [],
      page: 2,
      isFetching: false,
      isError: false,
    })
  })

  it('should return state with prev page', () => {
    expect(ProductsReducer(undefined, prevPage())).toEqual({
      products: [],
      page: 0,
      isFetching: false,
      isError: false,
    })
  })
})
