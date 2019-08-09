import { api } from '@/constants'
import { products } from '@/actions'

const { fetchProducts, fetchedProducts, fetchedError } = products

const url = api.URL

export default function () {
  return function fetchProductData (dispatch) {
    dispatch(fetchProducts())
    return fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Not 200 response')
        }
        return res.json()
      })
      .then(products => {
        if (products.length > 0) {
          return dispatch(fetchedProducts(products))
        }
        return true
      })
      .catch(() => {
        return dispatch(fetchedError())
      })
  }
}
