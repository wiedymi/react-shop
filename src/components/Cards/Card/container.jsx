import React from 'react'
import PropTypes from 'prop-types'
import { ProductImage } from '@/components/Cards/subcomponents/index'
import ProductInfo from '@/components/Cards/Card/InfoContainer'

const Card = ({ product }) => {
  return (
    <div className="card" key={product._id.$oid}>
      <ProductImage image={product.images[0]} />
      <ProductInfo
        id={product._id.$oid}
        title={product.title}
        rating={product.rating}
        description={product.description}
        tags={product.tags}
        color={product.color}
        size={product.size}
        price={product.price} />
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Card
