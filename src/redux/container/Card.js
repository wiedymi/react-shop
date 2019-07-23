import { connect } from 'react-redux'
import Cards from '../../components/Cards'

function paginate (array, page_size, page_number) {
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

const mapStateToProps = (state) => {
    let { products } = state.products;
    products = paginate(products, 6, state.products.page);
    return {
      products,
      isLoading: state.products.isFetching,
      isError: state.products.isError,
      page: state.products.page,
      filter: state.filter
    };
  };
  
  export default connect(mapStateToProps)(Cards);