/* eslint-disable no-fallthrough */
import { createSelector } from 'reselect'
import { filter } from '@/constants'

const getFilter = ({ filter }) => filter
const getProducts = ({ products }) => products
const { priceAsc, ratingAsc, search, TAGS, COLOR, SIZE, SORT_BY } = filter

const listAsc = [priceAsc, ratingAsc]

const applyFilter = (type, value, products) => {
  switch (type) {
    case SORT_BY:
      return applyFilterBySort(value, products)
    case search:
      return applyFilterBySearch(value, products)
    case TAGS:
      return applyFilterByMultiSelect(TAGS, value, products)
    case COLOR:
      return applyFilterByMultiSelect(COLOR, value, products)
    case SIZE:
      return applyFilterByMultiSelect(SIZE, value, products)
    default:
      return products
  }
}

const applyFilterBySort = (value, products) => {
  return products.sort((a, b) => {
    if (listAsc.includes(value)) {
      const removeCharsToGetType = -3
      const asc = value.slice(0, removeCharsToGetType)
      if (a[asc] < b[asc]) return 1
      if (a[asc] > b[asc]) return -1
    } else {
      if (a[value] < b[value]) return -1
      if (a[value] > b[value]) return 1
    }

    return 0
  })
}

const applyFilterByMultiSelect = (type, value, products) => {
  return products.filter(product => {
    return value.map(field => field.value).every(id => product[type].includes(id))
  })
}

const applyFilterBySearch = (value, products) => {
  return products.filter(product => {
    return product.title.toLowerCase().includes(value.toLowerCase())
  })
}

const applyFilters = (filter, products) => {
  if (products.length > 0) {
    return Object.entries(filter)
      .map(field => {
        const [type, value] = field
        return applyFilter(type, value, products)
      })
      .reduce((acc, filter) => {
        if (acc.length > 0) {
          const allTitles = filter.map(item => item.title)

          return acc.filter(item => {
            return allTitles.includes(item.title)
          })
        }
        return filter
      }, [])
  }
  return products
}

export default createSelector(
  [getProducts, getFilter],
  (products, filter) => {
    return applyFilters(filter, products)
  },
)
