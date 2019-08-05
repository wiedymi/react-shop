import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProductSizeList = ({ size }) => {
  const [selectedSize, setSize] = useState(0)

  return (
    <div className="size desktop">
      <p>Size:</p>
      <div className="grid-12 no-padding">
        {size.map(sizeProduct => (
          <button
            className={selectedSize === sizeProduct ? 'button selected' : 'button'}
            onClick={() => setSize(sizeProduct)}
            key={sizeProduct}
            value={sizeProduct}
            type="button"
          >
            {sizeProduct}
          </button>
        ))}
      </div>
    </div>
  )
}

ProductSizeList.propTypes = {
  size: PropTypes.array.isRequired,
}
export default ProductSizeList
