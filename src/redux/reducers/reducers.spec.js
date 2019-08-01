import FilterReducer from '@/redux/reducers/filter'
import CartReducer from '@/redux/reducers/cart'
import ProductsReducer from '@/redux/reducers/products'
import { search, setFilterBy } from '@/redux/action'
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
})

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(ProductsReducer(undefined, {})).toEqual({
      products: [],
      page: 1,
      isFetching: true,
      isError: false,
    })
  })
})
