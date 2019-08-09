import { connect } from 'react-redux'
import { cart, filter } from '@/actions'
import Info from '@/components/Products/Product/Info/component'
const { addToCart } = cart
const { setFilterBy, TAGS } = filter

const mapStateToProps = state => ({
  products: state.cart.products,
})

const mapDispatchToProps = dispatch => ({
  add: (id, count, products) => dispatch(addToCart(id, count, products)),
  setTags: tag => dispatch(setFilterBy(TAGS, [{ value: tag[0] }])),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info)
