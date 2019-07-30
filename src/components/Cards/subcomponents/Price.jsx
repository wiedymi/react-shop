import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ price, count, text }) => {
  return (
    <div className="price">
      <span>{text}</span> {count * price}$
    </div>
  )
}

Price.defaultProps = {
  price: 0,
  count: 1,
  text: 'Price: ',
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Price
