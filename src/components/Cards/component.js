import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { LazyLoadInit } from '../../redux/handlers';
import Card from './Card/container';

class Cards extends Component {
  componentDidMount() {
    const { getProducts, isLoading } = this.props;
    let result;
    if (isLoading) {
      try {
        getProducts();
      } catch (error) {
        result = new Error(error);
        return result;
      }
    }

    return result;
  }

  componentDidUpdate() {
    LazyLoadInit();
  }

  loadProducts = () => {
    const { nextPage, hasMoreProducts } = this.props;
    if (hasMoreProducts) {
      nextPage();
    }
  };

  render() {
    const { visibleProducts, hasMoreProducts } = this.props;
    const cards = visibleProducts.map(product => <Card product={product} key={product._id.$oid} />);
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadProducts}
        hasMore={hasMoreProducts}
        loader="Load"
      >
        <div className="cards">{cards.length > 0 ? cards : <div>Nothing to show</div>}</div>
      </InfiniteScroll>
    );
  }
}

export default Cards;
