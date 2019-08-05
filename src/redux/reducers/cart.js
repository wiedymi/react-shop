import actionConsts from '@/redux/actionConsts'

const { SET_PRODUCT_TO_CART, CHANGE_CART_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } = actionConsts

const initState = {
  products: [],
}

export default (state = initState, action) => {
  const { products } = state

  switch (action.type) {
    case SET_PRODUCT_TO_CART:
      return {
        ...state,
        products: action.products,
      }
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: products.filter(product => {
          return product.id !== action.id
        }),
      }
    case CHANGE_CART_PRODUCT_COUNT:
      const { id, count } = action
      return {
        ...state,
        products: products.map(product => {
          let temp = product
          if (product.id === id) {
            temp = {
              id: product.id,
              count,
            }
          }
          return temp
        }),
      }
    default:
      return state
  }
}
