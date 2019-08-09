import React from 'react'
import PropTypes from 'prop-types'
import InputWrapper from '@/components/common/Input/styles'

const Inputs = ({ type, name, placeholder, onChange }) => {
  return (
    <InputWrapper>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off" />
    </InputWrapper>
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
