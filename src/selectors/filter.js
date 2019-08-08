/* eslint-disable no-fallthrough */
import { createSelector } from 'reselect'

const getFilter = ({ filter }) => filter
const getProducts = ({ products }) => products

const filterList = (filterValue, value, type) => {
  let result = value
  let types = type
  if (types === 'rating' || types === 'price' || types === 'priceAsc' || types === 'ratingAsc') {
    let asc = false
    result = result.sort((a, b) => {
      if (types === 'priceAsc' || types === 'ratingAsc') {
        types = types.slice(0, -3)
        asc = true
      }
      const value1 = a[types]
      const value2 = b[types]

      if (value1 < value2) return 1
      if (value1 > value2) return -1

      return 0
    })

    if (asc) {
      result = result.reverse()
    }
  } else if (types === 'search') {
    result = result.filter(product => {
      return product.title.toLowerCase().includes(filterValue.toLowerCase())
    })
  }

  if (types === 'tags' || types === 'color' || types === 'size') {
    const i = result.filter(product => {
      const productVal = product[types]
      const sizes = filterValue.map(size => size.value)
      return sizes.every(id => productVal.includes(id))
    })
    result = i
  }
  return result
}

const applyFilter = filter => {
  return filter.length > 0 && filter !== null
}

const filterProduct = (products, filter) => {
  let result = products
  switch (true) {
    case applyFilter(filter.search):
      result = filterList(filter.search, result, 'search')
    case applyFilter(filter.sortBy):
      result = filterList(filter.sortBy, result, filter.sortBy)
    case applyFilter(filter.tags):
      result = filterList(filter.tags, result, 'tags')
    case applyFilter(filter.size):
      result = filterList(filter.size, result, 'size')
    case applyFilter(filter.colors):
      result = filterList(filter.colors, result, 'color')
    default:
      return result
  }
}

export default createSelector(
  [getProducts, getFilter],
  (products, filter) => {
    return filterProduct(products, filter)
  },
)
