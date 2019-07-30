import { connect } from 'react-redux'
import Cards from './component'
import getVisibleProducts from '@/selectors/card'
import getProducts from '@/redux/thunk'
import { nextPage } from '@/redux/action'

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
    getProducts: () => dispatch(getProducts()),
    nextPage: () => dispatch(nextPage()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards)
