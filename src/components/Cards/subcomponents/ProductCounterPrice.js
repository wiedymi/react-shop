import React, { Component } from 'react';
import Price from './Price';

class ProductCounterPrice extends Component {
  state = {
    count: 1
  };

  componentDidMount() {
    const { count, price } = this.props;
    this.setState(() => ({ count, price }));
  }

  decrement = () => {
    this.setState(prevState => {
      const { handleCount } = this.props;
      const count = prevState.count === 1 ? 1 : prevState.count - 1;
      handleCount(count);
      return { count };
    });
  };

  increment = () => {
    this.setState(prevState => {
      const count = prevState.count + 1;
      const { handleCount } = this.props;
      handleCount(count);
      return { count };
    });
  };

  render() {
    const { count, price } = this.state;
    return (
      <>
        <div className="counter desktop">
          <div className="decrement" onClick={this.decrement} role="presentation">
            -
          </div>
          <div className="result">{count}</div>
          <div className="increment" onClick={this.increment} role="presentation">
            +
          </div>
          <Price count={count} price={price} />
        </div>
        <div className="counter mobile">
          <Price count={count} price={price} text="Price: " />
        </div>
      </>
    );
  }
}

export default ProductCounterPrice;
