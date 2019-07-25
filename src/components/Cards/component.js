import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import getProducts from '../../redux/thunk';
import { isEquil, LazyLoadInit } from '../../redux/handlers';
import Card from './Card/container';

class Cards extends Component {
  state = {
    products: [],
    selectedProducts: [],
    search: '',
    isLoading: true,
    isError: false,
    hasMoreProducts: true,
    load: false,
    page: 1
  };

  componentDidMount() {
    LazyLoadInit();
    if (this.state.isLoading) {
      try {
        this.props.dispatch(getProducts());
      } catch (error) {
        return new Error(error);
      }
    }
  }

  componentDidUpdate() {
    LazyLoadInit();
    let { products, search = '', isLoading, isError, page, filter } = this.props;

    if (page === 0) {
      page = 1;
    } else {
      page++;
    }
    let selectedProducts = products.slice(0, page * 6);

    if (this.state.isLoading !== isLoading) {
      this.setState({
        products,
        selectedProducts,
        search,
        isLoading,
        isError,
        page,
        filter
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    let { products, search = '', isLoading, isError, page, filter } = nextProps;

    if (this.state.products.length === 0) {
      this.setState({ hasMoreProducts: true });
    } else if (products.slice(0, page * 6).length === this.state.products.length) {
      this.setState({ hasMoreProducts: false });
    }

    let selectedProducts = products.slice(0, page * 6);
    if (!isEquil(filter, this.state.filter)) {
      selectedProducts = products.slice(0, ++page * 6);
      const load = selectedProducts.length < 3 ? true : false;
      this.setState({
        selectedProducts,
        filter,
        load
      });
    } else {
      selectedProducts = products;
    }

    if (products.length > 0 && this.state.page !== page) {
      const selectedProducts = products.slice(0, page * 6);
      this.setState({
        products,
        selectedProducts,
        search,
        isLoading,
        isError,
        load: false,
        page,
        filter
      });
    }
  }

  loadProducts = () => {
    if (this.state.isLoading === false && this.state.load === false) {
      const { dispatch } = this.props;
      this.setState({ load: true });
      dispatch({ type: 'NEXT_PAGE' });
    }
  };

  render() {
    const cards = this.state.selectedProducts.map((product, i) => (
      <Card product={product} key={i} />
    ));
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadProducts}
        hasMore={this.state.hasMoreProducts}
        loader=""
      >
        <div className="cards">{cards.length > 0 ? cards : <div>Nothing to show</div>}</div>
      </InfiniteScroll>
    );
  }
}

export default Cards;
