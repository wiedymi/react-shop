import { connect } from 'react-redux'
import { getDataForFilter } from '@/halpers'
import { filter } from '@/actions'
import Filter from '@/components/Filter/component'

const { setFilterBy } = filter

const mapStateToProps = state => {
  const { products } = state.products
  return {
    colors: getDataForFilter(products, 'color'),
    size: getDataForFilter(products, 'size'),
    tags: getDataForFilter(products, 'tags'),
  }
}

const mapDispatchToProps = dispatch => ({
  setFilterBy: (type, value) => dispatch(setFilterBy(type, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)
