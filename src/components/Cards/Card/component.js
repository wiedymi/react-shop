import { connect } from 'react-redux';
import { addToCart } from '../../../redux/action';
import Info from './Info';

const mapStateToProps = state => ({
  products: state.cart.products
});

const mapDispatchToProps = dispatch => ({
  add: (id, count, products) => dispatch(addToCart(id, count, products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
