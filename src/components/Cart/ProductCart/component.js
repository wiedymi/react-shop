import React, { Component } from 'react';

class ProductCart extends Component {
  state = {
    maxCountOfProduct: 50,
    minCountOfProduct: 1
  };

  handleChange = ({ target }) => {
    const { id, updateProduct } = this.props;
    const currentValueInCounter = target.value;
    const { maxCountOfProduct, minCountOfProduct } = this.state;
    if (currentValueInCounter === '') {
      updateProduct(id, 1);
    } else if (
      currentValueInCounter >= minCountOfProduct &&
      currentValueInCounter <= maxCountOfProduct
    ) {
      updateProduct(id, target.value);
    }
  };

  handleClickDelete = () => {
    const { id, count, removeProduct } = this.props;
    removeProduct(id, count);
  };

  render() {
    const { title, price, count } = this.props;
    return (
      <>
        {title.length > 0 ? (
          <div className="cart-item">
            <div className="cart-item-info">
              <p>
                {title} {price}$
              </p>
            </div>
            <div className="cart-item-counter">
              <input type="number" value={count} onChange={this.handleChange} />
              <div
                className="cart-item-close"
                onClick={this.handleClickDelete}
                role="presentation"
                onKeyDown={() => {}}
              >
                x
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default ProductCart;
