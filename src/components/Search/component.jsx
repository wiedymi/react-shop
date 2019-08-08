import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from '@/components/styled/StyledInputs'

class Search extends Component {
  handleChange = e => {
    e.preventDefault()
    const { searchByText } = this.props
    searchByText(e.target.value)
  }

  render () {
    const { text } = this.props
    return (
      <div className="search grid-d-4 grid-t-4 grid-tl-4 grid-m-8 no-padding right">
        <StyledInput
          name="search"
          onChange={this.handleChange}
          placeholder={text}
          autoComplete="off" />
      </div>
    )
  }
}

Search.propTypes = {
  searchByText: PropTypes.func.isRequired,
  text: PropTypes.string,
}

export default Search
