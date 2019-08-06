import React, { Component } from 'react'
import { NotificationContainer } from 'react-notifications'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFilterBy } from '@/redux/action'
import 'react-notifications/lib/notifications.css'
import Container from '@/components/Container'
import Filter from '@/components/Filter'
import Cards from '@/components/Cards'
import {
  StyledSearch,
  StyledCardContent,
  StyledFilterMobile,
  StyledSort,
} from '@/components/styled/StyledContent'
import Select from 'react-select'

class Content extends Component {
  state = {
    sortBy: [
      { value: 'price', label: 'Price Desc' },
      { value: 'priceAsc', label: 'Price Asc' },
      { value: 'rating', label: 'Rating Desc' },
      { value: 'ratingAsc', label: 'Rating Asc' },
    ],
  }

  handleSort = selectedOption => {
    const { setSort } = this.props
    setSort(selectedOption.value)
  }

  render () {
    return (
      <Container>
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
            <Cards />
          </StyledCardContent>
        </StyledSearch>
        <StyledFilterMobile>
          <div className="grid-12 no-padding relative">
            <div className="absolute">
              <Filter mobile={false} />
            </div>
          </div>
        </StyledFilterMobile>
        <NotificationContainer />
      </Container>
    )
  }
}

Content.propTypes = {
  setSort: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setSort: value => {
    dispatch(setFilterBy('sortBy', value))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Content)
