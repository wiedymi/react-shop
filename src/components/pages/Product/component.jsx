import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProductInfo from '@/components/Products/Product/Info'
import { ProductImage } from '@/components/Products/subcomponents'
import ProductWrapper from '@/components/pages/Product/styles'

import Recommendation from '@/components/common/Recommendation'

const Product = ({ product, recommendation }) => {
  const [MuteRecommendation, setMute] = useState(undefined)
  if (
    MuteRecommendation === undefined &&
    recommendation !== undefined &&
    recommendation.length > 0
  ) {
    setMute(recommendation)
  }
  return (
    <div className="container">
      {product !== undefined ? (
        <ProductWrapper>
          <div className="product">
            <ProductImage image={product.images[0]} isShow />
            <ProductInfo
              id={product._id.$oid}
              title={product.title}
              rating={product.rating}
              description={product.description}
              price={product.price}
              color={product.color}
              size={product.size}
              counter
              isProductPage />
          </div>
          <Recommendation products={recommendation} />
        </ProductWrapper>
      ) : (
        <div>Loading product...</div>
      )}
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  recommendation: PropTypes.array,
}

export default Product
