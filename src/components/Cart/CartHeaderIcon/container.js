import { connect } from 'react-redux'
import CartHeaderIcon from '@/components/Cart/CartHeaderIcon/component'

const mapStateToProps = state => {
  return {
    cart: state.cart.products.length,
    products: state.cart.products,
  }
}

export default connect(mapStateToProps)(CartHeaderIcon)
