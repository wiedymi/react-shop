import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const FilterSelect = ({ label, name, isMulti, isClearable, handleChange, options }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Select
        onChange={handleChange}
        name={name}
        options={options}
        isClearable={isClearable}
        isMulti={isMulti} />
    </>
  )
}

FilterSelect.propTypes = {
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

FilterSelect.defaultProps = {
  isMulti: true,
  isClearable: false,
}

export default FilterSelect
