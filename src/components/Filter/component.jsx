/* eslint-disable prefer-destructuring */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from '@/components/Form'
import FilterConst from '@/components/Filter/constants'
import FilterSelect from '@/components/Filter/FilterSelect'

const { COLOR, TAGS, SIZE, SORT_BY } = FilterConst

class Filter extends Component {
  state = {
    sortBy: [
      { value: 'price', label: 'Price Desc' },
      { value: 'priceAsc', label: 'Price Asc' },
      { value: 'rating', label: 'Rating Desc' },
      { value: 'ratingAsc', label: 'Rating Asc' },
    ],
    fixed: false,
  }

  handleChange = (selectedOption, type) => {
    const { setFilterBy } = this.props
    let value = selectedOption
    if (value === null) {
      value = []
    }

    switch (type.name) {
      case COLOR:
        return setFilterBy(COLOR, value)
      case TAGS:
        if (type.name === TAGS && value.length !== 0) {
          value = [value]
        }
        return setFilterBy(TAGS, value)
      case SIZE:
        return setFilterBy(SIZE, value)
      case SORT_BY:
        if (type.name === SORT_BY) {
          selectedOption !== null ? (value = selectedOption.value) : (value = '')
        }
        return setFilterBy(SORT_BY, value)
      default:
        throw new Error('Filter default')
    }
  }

  handleScroll = e => {
    const { scrollY } = window

    if (scrollY > 50) {
      this.setState(() => ({
        fixed: true,
      }))
    } else {
      this.setState(() => ({
        fixed: false,
      }))
    }
  }

  componentDidMount () {
    const { mobile } = this.props
    if (!mobile) window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    const { colors, size, tags, mobile } = this.props
    const { sortBy, fixed } = this.state
    return (
      <div
        className={`content ${!fixed ? 'grid-12' : ' fixed'}  ${!mobile ? 'desktop' : 'mobile'}`}
      >
        <Form handleSubmit={this.handleSubmit}>
          <h3>Filter</h3>
          <FilterSelect
            label="Sort By"
            name="sortBy"
            options={sortBy}
            isMulti={false}
            handleChange={this.handleChange} />
          <FilterSelect
            label="Color"
            name="color"
            options={colors}
            isMulti
            handleChange={this.handleChange} />
          <FilterSelect
            label="Size"
            name="size"
            options={size}
            isMulti
            handleChange={this.handleChange} />
          <FilterSelect
            label="Type"
            name="tags"
            options={tags}
            isMulti={false}
            isClearable
            handleChange={this.handleChange} />
        </Form>
      </div>
    )
  }
}

Filter.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  colors: PropTypes.array,
  size: PropTypes.array,
  tags: PropTypes.array,
  mobile: PropTypes.bool,
}

export default Filter
