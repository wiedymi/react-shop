import { createSelector } from 'reselect'

const getCart = state => state.cart
const getProducts = state => state.products.products

const getPrice = products => {
  return products.reduce((acc, product) => {
    return product.price * product.count
  }, 0)
}

const getCount = (cart, product) => {
  return cart.products.filter(({ id }) => product._id.$oid === id).map(({ count }) => count)[0]
}

const getCartProducts = createSelector(
  [getCart, getProducts],
  (cart, products) => {
    let cartids = cart.products.map(({ id }) => id)
    cartids = [...new Set(cartids)]

    const result = products
      .filter(product => {
        return [product._id.$oid].some(id => {
          return cartids.includes(id)
        })
      })
      .map(product => {
        return {
          ...product,
          count: getCount(cart, product),
        }
      })

    return {
      products: result,
      price: getPrice(result),
    }
  },
)

export default getCartProducts
