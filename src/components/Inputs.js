import React from 'react';

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
          autoComplete="off"
        />
      </label>
    </div>
  );
};

Inputs.defaultProps = {
  type: 'text',
  name: 'Label',
  placeholder: ''
};

export default Inputs;
