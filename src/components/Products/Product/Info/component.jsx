import React, { useState } from 'react'
import { NotificationManager } from 'react-notifications'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import {
  ProductDescription,
  ProductColors,
  ProductSizeList,
} from '@/components/Products/subcomponents'
import theme from '@/components/Products/Product/Info/theme'
import Button from '@/components/common/Button/component'
import ProductCounterPrice from '@/components/Products/subcomponents/ProductCounterPrice'

const Info = ({
  title,
  rating,
  description,
  price,
  id,
  add,
  products,
  color,
  size,
  counter,
  isProductPage,
}) => {
  const [productCount, setProductCount] = useState(1)
  const handleClick = e => {
    e.preventDefault()
    NotificationManager.success('Added to your cart', title)
    add(id, productCount, products)
  }

  return (
    <div className="info">
      <div className="info-title-rating">
        <a href={`/product/${id}`}>
          <h3>{title}</h3>
        </a>
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
      {color && size && (
        <>
          <ProductColors colors={color} />
          <ProductSizeList size={size} />
        </>
      )}
      <ProductDescription description={description} />
      <div className="purchase">
        <Button name="buy" text="Add To Cart"
          handleClick={handleClick} />
        {price && counter && (
          <>
            <ProductCounterPrice
              price={price}
              handleCount={setProductCount}
              count={productCount}
              isProductPage={isProductPage} />
          </>
        )}
      </div>
    </div>
  )
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  products: PropTypes.array,
  color: PropTypes.array,
  size: PropTypes.array,
  counter: PropTypes.bool,
  isProductPage: PropTypes.bool,
}

export default Info
