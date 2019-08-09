import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { filter } from '@/constants'
import Filter from '@/components/Filter'
import Products from '@/components/Products'
import {
  StyledSearch,
  StyledCardContent,
  StyledFilterMobile,
  StyledSort,
} from '@/components/pages/Home/styles'

const { price, priceAsc, rating, ratingAsc } = filter

class Home extends Component {
  state = {
    sortBy: [
      { value: price, label: 'Price Desc' },
      { value: priceAsc, label: 'Price Asc' },
      { value: rating, label: 'Rating Desc' },
      { value: ratingAsc, label: 'Rating Asc' },
    ],
  }

  handleSort = selectedOption => {
    const { setSort } = this.props
    setSort(selectedOption.value)
  }

  render () {
    return (
      <div className="container">
        <StyledSearch>
          <StyledCardContent>
            <StyledSort>
              <div className="grid-d-12">
                <p>Sort By</p>
                <div className="grid-d-3">
                  <Select
                    label="Sort By"
                    name="sortBy"
                    options={this.state.sortBy}
                    isMulti={false}
                    onChange={this.handleSort}
                    defaultValue={this.state.sortBy[0]}
                    className="react-select-container"
                    classNamePrefix="react-select" />
                </div>
              </div>
            </StyledSort>
            <Products />
          </StyledCardContent>
        </StyledSearch>
        <StyledFilterMobile>
          <div className="grid-12 no-padding relative">
            <div className="absolute">
              <Filter mobile={false} />
            </div>
          </div>
        </StyledFilterMobile>
      </div>
    )
  }
}

Home.propTypes = {
  setSort: PropTypes.func.isRequired,
}

export default Home
