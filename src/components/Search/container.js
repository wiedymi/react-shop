import { connect } from 'react-redux'
import { filter } from '@/actions'
import Search from '@/components/Search/component'

const { search } = filter

const mapDispatchToProps = dispatch => ({
  searchByText: text => dispatch(search(text)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Search)
