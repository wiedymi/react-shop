import { connect } from 'react-redux'
import { search } from '@/redux/action'
import Search from '@/components/Search/component'

const mapDispatchToProps = dispatch => ({
  searchByText: text => dispatch(search(text)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Search)
