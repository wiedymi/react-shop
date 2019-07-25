import React from 'react';

const Price = ({ price, count, text }) => {
  return (
    <div className="price">
      <span>{text}</span> {count * price}$
    </div>
  );
};

Price.defaultProps = {
  price: 0,
  count: 1,
  text: 'Price: '
};

export default Price;
