import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handleClick }) => {
  return (
    <div className="button" role="presentation"
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

Button.defaultProps = {
  text: 'Button',
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
