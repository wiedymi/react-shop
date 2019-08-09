import { connect } from 'react-redux'
import Cards from './component'
import { getVisibleProducts } from '@/selectors'
import { products } from '@/actions'

const { nextPage } = products

const mapStateToProps = state => {
  const { products } = state
  return {
    visibleProducts: getVisibleProducts({ state, hasMoreProducts: false }),
    isLoading: products.isFetching,
    isError: products.isError,
    hasMoreProducts: getVisibleProducts({ state, hasMoreProducts: true }),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextPage: () => dispatch(nextPage()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)
