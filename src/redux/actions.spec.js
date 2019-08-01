import {
  fetchItem,
  fetchedError,
  nextPage,
  search,
  setFilterBy,
  addToCart,
  removeFromCart,
  updateCartData,
} from '@/redux/action'
import types from '@/redux/actionConsts'

describe('actions', () => {
  it('FETCH', () => {
    const expectedAction = {
      type: types.FETCH,
    }
    expect(fetchItem()).toEqual(expectedAction)
  })

  it('FETCHED_ERROR', () => {
    const expectedAction = {
      type: types.FETCHED_ERROR,
    }
    expect(fetchedError()).toEqual(expectedAction)
  })

  it('NEXT_PAGE', () => {
    const expectedAction = {
      type: types.NEXT_PAGE,
    }
    expect(nextPage()).toEqual(expectedAction)
  })

  it('SET_FILTER_SEARCH', () => {
    const expectedAction = {
      type: types.SET_FILTER_SEARCH,
    }
    expect(search()).toEqual(expectedAction)
  })

  it('SET_FILTER_SEARCH', () => {
    const expectedAction = {
      type: types.SET_FILTER_SEARCH,
    }
    expect(search()).toEqual(expectedAction)
  })

  it('SET_FILTER_COLORS', () => {
    const expectedAction = {
      type: types.SET_FILTER_COLORS,
    }
    expect(setFilterBy('color')).toEqual(expectedAction)
  })

  it('SET_FILTER_TAGS', () => {
    const expectedAction = {
      type: types.SET_FILTER_TAGS,
    }
    expect(setFilterBy('tags')).toEqual(expectedAction)
  })

  it('SET_FILTER_SIZE', () => {
    const expectedAction = {
      type: types.SET_FILTER_SIZE,
    }
    expect(setFilterBy('size')).toEqual(expectedAction)
  })

  it('SET_FILTER_SORT_BY', () => {
    const expectedAction = {
      type: types.SET_FILTER_SORT_BY,
    }
    expect(setFilterBy('sortBy')).toEqual(expectedAction)
  })

  it('SET_PRODUCT_TO_CART', () => {
    const expectedAction = {
      type: types.SET_PRODUCT_TO_CART,
      products: [
        {
          id: 1,
          count: 1,
        },
      ],
    }
    expect(addToCart(1, 1, [])).toEqual(expectedAction)
  })

  it('REMOVE_PRODUCT_FROM_CART', () => {
    const expectedAction = {
      type: types.REMOVE_PRODUCT_FROM_CART,
    }
    expect(removeFromCart()).toEqual(expectedAction)
  })

  it('CHANGE_CART_PRODUCT_COUNT', () => {
    const expectedAction = {
      type: types.CHANGE_CART_PRODUCT_COUNT,
    }
    expect(updateCartData()).toEqual(expectedAction)
  })
})
