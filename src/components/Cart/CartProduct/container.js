import { connect } from 'react-redux'
import { cart } from '@/actions'
import ProductaItem from '@/components/Cart/CartProduct/component'

const { updateCartData, removeFromCart } = cart

const mapDispatchToProps = dispatch => ({
  updateProduct: (id, count) => dispatch(updateCartData(id, count)),
  removeProduct: (id, count) => dispatch(removeFromCart(id, count)),
})

export default connect(
  null,
  mapDispatchToProps,
)(ProductaItem)
