import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import {
  ProductColors,
  ProductCounterPrice,
  ProductDescription,
  ProductSizeList
} from '../subcomponents/index';
import Button from '../../Button';
import Tags from '../../Tags';

class Info extends Component {
  state = {
    count: 1
  };

  handleClick = e => {
    e.preventDefault();
    const { count } = this.state;
    const { id, add, products, title } = this.props;
    this.setState(() => {
      add(id, count, products);
      return { count: 1 };
    });
    alert(`Added To Your Cart: \n${title} x${count}`);
  };

  handleCount = count => {
    this.setState(() => ({
      count
    }));
  };

  render() {
    const { count } = this.state;
    const { title, rating, description, tags, color, size, price } = this.props;
    return (
      <div className="info">
        <div className="info-title-rating">
          <h3>{title}</h3>
          <div className="start-tags">
            <StarRatings
              rating={rating}
              starRatedColor="#00e0c7"
              numberOfStars={5}
              starDimension="30px"
              starSpacing="0px"
              name="rating"
            />
            <Tags tags={tags} />
          </div>
        </div>
        <ProductColors colors={color} />
        <ProductSizeList size={size} />
        <ProductDescription description={description} />
        <div className="purchase">
          <Button name="buy" text="Buy" handleClick={this.handleClick} />
          <ProductCounterPrice price={price} count={count} handleCount={this.handleCount} />
        </div>
      </div>
    );
  }
}

export default Info;
