import { connect } from 'react-redux';
import { search } from '../../redux/action';
import Search from './component';

const mapStateToProps = state => {
  return {
    text: state.text ? state.text : 'Something...'
  };
};

const mapDispatchToProps = dispatch => ({
  searchByText: text => dispatch(search(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
