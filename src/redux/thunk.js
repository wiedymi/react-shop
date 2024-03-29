import API from '@/redux/api'
import { fetchItem, fetchedItem, fetchedError } from '@/redux/action'

const url = API.URL

export default function () {
  return function fetchProductData (dispatch) {
    dispatch(fetchItem())
    return fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Not 200 response')
        }
        return res.json()
      })
      .then(products => {
        if (products.length > 0) {
          return dispatch(fetchedItem(products))
        }
        return true
      })
      .catch(() => {
        return dispatch(fetchedError())
      })
  }
}
