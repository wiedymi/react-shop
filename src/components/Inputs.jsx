import React from 'react'
import PropTypes from 'prop-types'

const Inputs = ({ type, name, placeholder, onChange }) => {
  return (
    <div className="field">
      <label htmlFor={name}>
        {name}
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off" />
      </label>
    </div>
  )
}

Inputs.defaultProps = {
  type: 'text',
  name: 'Label',
  placeholder: '',
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Inputs
