import { connect } from 'react-redux';
import Cards from './component';
import { filterProduct } from '../../redux/handlers';

const mapStateToProps = ({ products, filter }) => {
  return {
    products: filterProduct(products.products, filter),
    isLoading: products.isFetching,
    isError: products.isError,
    page: products.page,
    filter
  };
};

export default connect(mapStateToProps)(Cards);
