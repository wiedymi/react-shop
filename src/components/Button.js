import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <div className="button" role="presentation" onClick={handleClick}>
      {text}
    </div>
  );
};

Button.defaultProps = {
  text: 'Button'
};

export default Button;
