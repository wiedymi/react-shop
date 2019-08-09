import React, { useState } from 'react'
import { ProductImage } from '@/components/Products/subcomponents'

const Recommendation = ({ products }) => {
  const [MuteRecommendation, setMute] = useState(undefined)
  if (MuteRecommendation === undefined && products !== undefined && products.length > 0) {
    setMute(products)
  }
  return (
    <div className="recommendation">
      <div className="label">
        <h4>recommendation</h4>
      </div>

      {MuteRecommendation &&
        MuteRecommendation.map(product => (
          <div className="card grid-d-2 grid-t-3 grid-tl-3 grid-m-6" key={product._id.$oid}>
            <a href={`/product/${product._id.$oid}`}>
              <ProductImage image={product.images[0]} isShow />
            </a>
            <a href={`/product/${product._id.$oid}`}>
              <h3>{product.title}</h3>
            </a>
            <h4>{product.price}$</h4>
          </div>
        ))}
    </div>
  )
}

export default Recommendation
