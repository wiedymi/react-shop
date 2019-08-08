import { createSelector } from 'reselect'
import getFilteredProducts from '@/selectors/filter'

const getProducts = ({ state }) => state.products.products
const getPage = ({ state }) => state.products.page
const getFilter = ({ state }) => state.filter
const getType = ({ hasMoreProducts }) => hasMoreProducts

export default createSelector(
  [getProducts, getPage, getFilter, getType],
  (products, page, filter, hasMoreProducts) => {
    const productsPerPage = 6
    const filteredProducts = getFilteredProducts({ products, filter }).slice(
      0,
      page * productsPerPage,
    )
    if (hasMoreProducts === true) {
      return filteredProducts.length > getFilteredProducts({ products, filter }).length
    }
    return filteredProducts
  },
)
