import { connect } from 'react-redux'
import Cards from '../../components/Cards'
import { filterProduct  } from '../handlers'


const mapStateToProps = (state) => {
    let { products } = state.products;
    products = filterProduct(products, state.filter);
    return {
      products,
      isLoading: state.products.isFetching,
      isError: state.products.isError,
      page: state.products.page,
      filter: state.filter
    };
  };
  
  export default connect(mapStateToProps)(Cards);