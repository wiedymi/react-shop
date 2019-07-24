import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, changeCart } from '../redux/action';

class CartItem extends Component {
  state = {
    id: 0,
    title: '',
    price: 0,
    count: 0
  };

  componentDidMount() {
    const { price, title, count } = [...this.props].product;
    const id = [...this.props].product._id.$oid;
    this.setState({ price, title, count, id });
  }

  handleChange = e => {
    const { id } = this.state;
    const { dispatch } = this.props;

    if (e.target.value === '') {
      this.setState({ count: 1 });
    } else {
      this.setState({ count: e.target.value });
      dispatch(changeCart(id, e.target.value));
    }
  };

  handleClickDelete = () => {
    const { count, id } = this.state;
    const { dispatch } = this.props;
    dispatch(removeFromCart(id, count));
  };

  render() {
    const { title, price, count } = this.state;
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

export default connect()(CartItem);
