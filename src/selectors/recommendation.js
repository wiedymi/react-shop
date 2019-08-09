import { createSelector } from 'reselect'
import sampleSize from 'lodash.samplesize'
const getProducts = state => state.products.products
const getId = (state, id) => id

export const getProduct = createSelector(
  [getProducts, getId],
  (products, id) => {
    return [...products].filter(product => {
      return product._id.$oid === id
    })[0]
  },
)

export const getRecommendation = createSelector(
  [getProducts],
  products => {
    if (products.length > 0) {
      return sampleSize(products, 5)
    }
  },
)
