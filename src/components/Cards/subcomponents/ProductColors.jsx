/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'

const ProductColors = ({ colors }) => {
  return (
    <div className="color desktop">
      <label>Avalible colors</label>
      <p>
        {colors.map(color => (
          <button type="button" className="button"
            style={{ background: color }} key={color} />
        ))}
      </p>
    </div>
  )
}

ProductColors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default ProductColors
