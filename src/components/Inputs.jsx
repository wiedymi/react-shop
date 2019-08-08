import React from 'react'
import PropTypes from 'prop-types'
import { StyledField, StyledInput, StyledLabel } from '@/components/styled/StyledInputs'

const Inputs = ({ type, name, placeholder, onChange }) => {
  return (
    <StyledField>
      <StyledLabel>
        {name}
        <StyledInput
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off" />
      </StyledLabel>
    </StyledField>
  )
}

Inputs.defaultProps = {
  type: 'text',
  name: 'Label',
  placeholder: '',
}

Inputs.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Inputs
