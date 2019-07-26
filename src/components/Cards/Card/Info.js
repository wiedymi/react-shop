import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import {
  ProductColors,
  ProductCounterPrice,
  ProductDescription,
  ProductSizeList
} from '../subcomponents/index';
import theme from './theme';
import Button from '../../Button';
import Tags from '../../Tags';

class Info extends Component {
  state = {
    count: 1
  };

  handleClick = e => {
    e.preventDefault();
    const { count } = this.state;
    const { id, add, products } = this.props;
    this.setState(() => {
      add(id, count, products);
      return { count: 1 };
    });
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
              starRatedColor={theme.STAR_COLOR}
              numberOfStars={5}
              starDimension={theme.STAR_SIZE}
              starSpacing={theme.STAR_SPACE}
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
