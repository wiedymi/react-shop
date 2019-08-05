import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from '@/components/Form'
import Input from '@/components/Inputs'

class Search extends Component {
  handleChange = e => {
    e.preventDefault()
    const { searchByText } = this.props
    searchByText(e.target.value)
  }

  render () {
    const { text } = this.props
    return (
      <div className="search">
        <Form onSubmit={this.handleChange}>
          <Input name="search" onChange={this.handleChange}
            placeholder={text} value={text} />
        </Form>
      </div>
    )
  }
}

Search.propTypes = {
  searchByText: PropTypes.func.isRequired,
  text: PropTypes.string,
}

export default Search
