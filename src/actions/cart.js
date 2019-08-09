import { actions } from '@/constants'

const { SET_PRODUCT_TO_CART, CHANGE_CART_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } = actions

export const addToCart = (id, count, products) => {
  let result = products
  if (result.length > 0) {
    let cartids = result.map(cart => cart.id)
    cartids = [...new Set(cartids)]

    if (cartids.includes(id)) {
      result = result.map(product => {
        let output = {
          id: product.id,
          count: product.count,
        }
        if (product.id === id) {
          output = {
            id,
            count: product.count + count,
          }
        }
        return output
      })
    } else {
      result.push({
        id,
        count,
      })
    }
  } else {
    result.push({
      id,
      count,
    })
  }
  return { type: SET_PRODUCT_TO_CART, products: result }
}

export const removeFromCart = function removeProductFromCartById (id, count) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
    count,
  }
}

export const updateCartData = function changeCartProductCount (id, count) {
  return {
    type: CHANGE_CART_PRODUCT_COUNT,
    id,
    count,
  }
}
