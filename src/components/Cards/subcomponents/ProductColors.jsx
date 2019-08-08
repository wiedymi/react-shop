/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippy.js/react'

const ProductColors = ({ colors }) => {
  const [selectedColor, setColor] = useState(0)

  return (
    <div className="color">
      <p>Colors:</p>
      <p>
        {colors.map(color => (
          <Tippy content={color} key={color}>
            <button
              type="button"
              className={`button ${selectedColor === color ? 'selected' : ''}`}
              style={{ background: color }}
              onClick={e => setColor(color)} />
          </Tippy>
        ))}
      </p>
    </div>
  )
}

ProductColors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default ProductColors
