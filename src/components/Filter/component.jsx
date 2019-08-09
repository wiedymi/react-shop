/* eslint-disable prefer-destructuring */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippy.js/react'
import { filter } from '@/constants'
import FilterWrapper from '@/components/Filter/styles'

const { COLOR, TAGS, SIZE } = filter

class Filter extends Component {
  state = {
    popularColors: 5,
    selectedSize: [],
    selectedCategories: {},
    selectedColors: [],
  }

  handleSize = value => {
    const { setFilterBy } = this.props
    this.setState(prevState => {
      let state = {
        ...prevState,
        selectedSize: [...new Set([...prevState.selectedSize, value.value])],
      }

      if (prevState.selectedSize.includes(value.value)) {
        state = {
          ...state,
          selectedSize: state.selectedSize.filter(size => {
            return size !== value.value
          }),
        }
      }

      setFilterBy(
        SIZE,
        state.selectedSize.map(size => {
          return {
            value: size,
            label: size,
          }
        }),
      )
      return state
    })
  }

  handleColor = value => {
    const { setFilterBy } = this.props
    return this.setState(prevState => {
      let state = {
        ...prevState,
        selectedColors: [...new Set([...prevState.selectedColors, value])],
      }

      if (prevState.selectedColors.includes(value)) {
        state = {
          ...state,
          selectedColors: state.selectedColors.filter(color => {
            return color !== value
          }),
        }
      }

      setFilterBy(
        COLOR,
        state.selectedColors.map(color => {
          return {
            value: color,
            label: color,
          }
        }),
      )
      return state
    })
  }

  handleTags = value => {
    this.setState(prevState => {
      const { setFilterBy } = this.props
      let state = {
        ...prevState,
        selectedCategories: value,
      }

      if (prevState.selectedCategories.value === state.selectedCategories.value) {
        state = {
          ...prevState,
          selectedCategories: [],
        }
        setFilterBy(TAGS, [])
      } else {
        setFilterBy(TAGS, [state.selectedCategories])
      }

      return state
    })
  }

  showAllColors = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        popularColors: this.props.colors.length,
      }
    })
  }

  showLessColors = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        popularColors: 5,
      }
    })
  }

  render () {
    const { colors, size, tags } = this.props
    const { selectedCategories, selectedSize, selectedColors } = this.state
    const visibleColor = colors
      .sort((a, b) => {
        const value1 = a.count
        const value2 = b.count

        if (value1 < value2) return 1
        if (value1 > value2) return -1

        return 0
      })
      .slice(0, this.state.popularColors)

    const visibleSize = selectedSize.reduce((acc, size) => ({ ...acc, [size]: size }), {})
    const selectedColor = selectedColors.reduce((acc, color) => ({ ...acc, [color]: color }), {})

    return (
      <FilterWrapper>
        <div>
          <div className="filter-field">
            <h3>Filter by size</h3>
            <div className="size-field">
              {size.map(size => (
                <div
                  className={`size ${size.value === visibleSize[size.value] ? ' active' : ''}`}
                  onClick={e => this.handleSize(size)}
                  key={size.value}
                >
                  {size.value}
                </div>
              ))}
            </div>
          </div>
          <div className="filter-field">
            <h3>Categories</h3>
            <div className="size-field">
              {tags.map(tag => (
                <div
                  key={tag.value}
                  className={`categories ${
                    tag.value === selectedCategories.value ? ' active' : ''
                  }`}
                  onClick={e => this.handleTags(tag)}
                >
                  {tag.value}
                </div>
              ))}
            </div>
          </div>
          <div className="filter-field">
            <h3>Color</h3>
            <div className="colors">
              {visibleColor.map(color => (
                <Tippy content={color.value} key={color.value}>
                  <div className="color" onClick={e => this.handleColor(color.value)}>
                    <div
                      style={{ background: color.value }}
                      className={`block ${
                        color.value === selectedColor[color.value] ? ' active' : ''
                      }`} />
                  </div>
                </Tippy>
              ))}
              {this.state.popularColors > 5 ? (
                <span onClick={this.showLessColors}>&uarr;</span>
              ) : (
                <span onClick={this.showAllColors}>&darr;</span>
              )}
            </div>
          </div>
        </div>
      </FilterWrapper>
    )
  }
}

Filter.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  size: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default Filter
