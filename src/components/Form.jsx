import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
}

export default Form
