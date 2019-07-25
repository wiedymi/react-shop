import { connect } from 'react-redux';
import { updateCartData, removeFromCart } from '../../../redux/action';
import ProductCart from './component';

const mapDispatchToProps = dispatch => ({
  updateProduct: (id, count) => dispatch(updateCartData(id, count)),
  removeProduct: (id, count) => dispatch(removeFromCart(id, count))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCart);
