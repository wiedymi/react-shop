import React from 'react'
import PropTypes from 'prop-types'
import { ProductImage } from '@/components/Cards/subcomponents/index'
import ProductInfo from '@/components/Cards/Card/InfoContainer'

const Card = ({ product }) => {
  return (
    <div className="card grid-d-12 grid-t-3 grid-tl-3 grid-m-6" key={product._id.$oid}>
      <a href={`/product/${product._id.$oid}`}>
        <ProductImage image={product.images[0]} />
      </a>
      <ProductInfo
        id={product._id.$oid}
        title={product.title}
        rating={product.rating}
        description={product.description}
        price={product.price} />
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Card
