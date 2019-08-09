import { connect } from 'react-redux'
import { filter } from '@/actions'
import { filter as filterConstants } from '@/constants'
import Home from '@/components/pages/Home/component'

const { setFilterBy } = filter
const { SORT_BY } = filterConstants

const mapDispatchToProps = dispatch => ({
  setSort: value => {
    dispatch(setFilterBy(SORT_BY, value))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Home)
