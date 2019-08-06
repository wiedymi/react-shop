import React from 'react'
import { NotificationManager } from 'react-notifications'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import { ProductDescription } from '@/components/Cards/subcomponents/index'
import theme from '@/components/Cards/Card/theme'
import Button from '@/components/Button'

const Info = ({ title, rating, description, price }) => {
  const handleClick = e => {
    e.preventDefault()
    const { count } = this.state
    const { id, add, products, title } = this.props
    this.setState(() => {
      NotificationManager.success('Added to your cart', title)
      add(id, count, products)
      return { count: 1 }
    })
  }
  return (
    <div className="info">
      <div className="info-title-rating">
        <h3>{title}</h3>
        <StarRatings
          rating={rating}
          starRatedColor={theme.STAR_COLOR}
          numberOfStars={5}
          starDimension={theme.STAR_SIZE}
          starSpacing={theme.STAR_SPACE}
          isSelectable
          name="rating"
          changeRating={e => console.log(e)} />
      </div>
      <h4>{price}$</h4>
      <ProductDescription description={description} />

      <div className="purchase">
        <Button name="buy" text="Add To Cart"
          handleClick={handleClick} />
      </div>
    </div>
  )
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Info
