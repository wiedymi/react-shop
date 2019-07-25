import { connect } from 'react-redux';
import { getDataForFilter } from '../../redux/handlers';
import { setFilterBy } from '../../redux/action';
import Filter from './component';

const mapStateToProps = state => {
  const { products } = state.products;
  const colors = getDataForFilter(products, 'colors');
  const size = getDataForFilter(products, 'size');
  const tags = getDataForFilter(products, 'tags');
  return {
    colors,
    size,
    tags
  };
};

const mapDispatchToProps = dispatch => ({
  setFilterBy: (type, value) => dispatch(setFilterBy(type, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
