import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from '@/components/common/Button/styles'

const Button = ({ text, handleClick }) => {
  return (
    <StyledButton role="presentation" onClick={handleClick}>
      {text}
    </StyledButton>
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
