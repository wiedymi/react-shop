import { connect } from 'react-redux';
import Cards from './component';
import getFilteredProduct from '../../selectors/filter';

const mapStateToProps = state => {
  const { products, filter } = state;
  return {
    products: getFilteredProduct(state),
    isLoading: products.isFetching,
    isError: products.isError,
    page: products.page,
    filter
  };
};

export default connect(mapStateToProps)(Cards);
