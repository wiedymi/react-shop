import { connect } from 'react-redux';
import CartModal from './component';
import getCartProducts from '../../selectors/cart';

const mapStateToProps = state => {
  return getCartProducts(state);
};

export default connect(mapStateToProps)(CartModal);
