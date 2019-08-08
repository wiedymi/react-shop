import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from '@/components/styled/StyledInputs'

class Search extends Component {
  handleChange = ({ target }) => {
    const { searchByText } = this.props
    const { value } = target
    searchByText(value)
  }

  render () {
    return (
      <div className="search grid-d-4 grid-t-4 grid-tl-4 grid-m-8 no-padding right">
        <StyledInput
          name="search"
          onChange={this.handleChange}
          placeholder="Search for your style..."
          autoComplete="off" />
      </div>
    )
  }
}

Search.propTypes = {
  searchByText: PropTypes.func.isRequired,
}

export default Search
