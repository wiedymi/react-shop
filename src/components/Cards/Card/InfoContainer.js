import { connect } from 'react-redux'
import { addToCart, setFilterBy } from '@/redux/action'
import Info from '@/components/Cards/Card/Info'

const mapStateToProps = state => ({
  products: state.cart.products,
})

const mapDispatchToProps = dispatch => ({
  add: (id, count, products) => dispatch(addToCart(id, count, products)),
  setTags: tag => dispatch(setFilterBy('tags', [{ value: tag[0] }])),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info)
