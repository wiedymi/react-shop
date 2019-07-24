import React from 'react';

const Button = ({ url, text, handleClick }) => {
  return (
    <a className="button" href={url} onClick={handleClick}>
      {text}
    </a>
  );
};
Button.defaultProps = {
  url: '#',
  text: 'Button'
};

export default Button;
