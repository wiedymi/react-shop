import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import {
  ProductColors,
  ProductCounterPrice,
  ProductDescription,
  ProductSizeList,
} from '@/components/Cards/subcomponents/index'
import theme from '@/components/Cards/Card/theme'
import Button from '@/components/Button'
import Tags from '@/components/Tags'

class Info extends Component {
  state = {
    count: 1,
  }

  handleClick = e => {
    e.preventDefault()
    const { count } = this.state
    const { id, add, products } = this.props
    this.setState(() => {
      add(id, count, products)
      return { count: 1 }
    })
  }

  handleCount = count => {
    this.setState(() => ({
      count,
    }))
  }

  handleTags = e => {
    const { setTags, tags } = this.props
    setTags(tags)
  }

  render () {
    const { count } = this.state
    const { title, rating, description, tags, color, size, price } = this.props
    return (
      <div className="info">
        <div className="info-title-rating">
          <h3>{title}</h3>
          <div className="start-tags">
            <StarRatings
              rating={rating}
              starRatedColor={theme.STAR_COLOR}
              numberOfStars={5}
              starDimension={theme.STAR_SIZE}
              starSpacing={theme.STAR_SPACE}
              isSelectable
              name="rating"
              changeRating={e => console.log(e)} />
            <Tags tags={tags} handleClick={this.handleTags} />
          </div>
        </div>
        <ProductColors colors={color} />
        <ProductSizeList size={size} />
        <ProductDescription description={description} />
        <div className="purchase">
          <Button name="buy" text="Add To Cart"
            handleClick={this.handleClick} />
          <ProductCounterPrice price={price} count={count}
            handleCount={this.handleCount} />
        </div>
      </div>
    )
  }
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  size: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
}

export default Info
