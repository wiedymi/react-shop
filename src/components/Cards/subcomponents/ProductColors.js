/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const ProductColors = ({ colors }) => {
  return (
    <div className="color desktop">
      <label>Avalible colors</label>
      <p>
        {colors.map(color => (
          <button type="button" className="button" style={{ background: color }} key={color} />
        ))}
      </p>
    </div>
  );
};

export default ProductColors;
