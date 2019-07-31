import React from 'react'
import PropTypes from 'prop-types'
import StyledForm from '@/components/styled/StyledForm'

const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
}

export default Form
