import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProductInfo from '@/components/Cards/Card/InfoContainer'
import { ProductImage } from '@/components/Cards/subcomponents'
import Container from '@/components/Container'
import StyledProduct from '@/components/Product/styled'
import StyledCard from '@/components/styled/StyledCard'

const Product = ({ product, recommendation }) => {
  const [isMuteRecommendation, setMute] = useState(undefined)
  if (
    isMuteRecommendation === undefined &&
    recommendation !== undefined &&
    recommendation.length > 0
  ) {
    setMute(recommendation)
  }
  return (
    <Container>
      {product !== undefined ? (
        <StyledProduct>
          <div className="product">
            <ProductImage image={product.images[0]} isShow />
            <StyledCard>
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
            </StyledCard>
          </div>
          <div className="recommendation">
            <div className="label">
              <h4>recommendation</h4>
            </div>

            {isMuteRecommendation
              ? isMuteRecommendation.map(product => (
                <div className="card grid-d-2 grid-t-3 grid-tl-3 grid-m-6" key={product._id.$oid}>
                  <a href={`/product/${product._id.$oid}`}>
                    <ProductImage image={product.images[0]} isShow />
                  </a>
                  <a href={`/product/${product._id.$oid}`}>
                    <h3>{product.title}</h3>
                  </a>
                  <h4>{product.price}$</h4>
                </div>
              ))
              : ''}
          </div>
        </StyledProduct>
      ) : (
        <div>Loading product...</div>
      )}
    </Container>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  recommendation: PropTypes.array,
}

export default Product
