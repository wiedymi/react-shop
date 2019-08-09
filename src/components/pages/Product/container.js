import Product from '@/components/pages/Product/component'
import { connect } from 'react-redux'
import { getProduct, getRecommendation } from '@/selectors'
import { getDataForFilter } from '@/halpers'

const mapStateToProps = (state, { match }) => {
  const { id } = match.params
  return {
    product: getProduct(state, id),
    recommendation: getRecommendation(state),
    al: getDataForFilter(state.products.products, 'tags'),
  }
}

export default connect(mapStateToProps)(Product)
