import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import {
  setFilterByColor,
  setFilterByTags,
  setFilterBySize,
  setFilterBySortBy
} from '../../redux/action';
import {
  getAllColorsFromItems,
  getAllSizeFromItems,
  getAllTagsFromItems
} from '../../redux/handlers';

class Filter extends Component {
  state = {
    colors: [],
    size: [],
    tags: [],
    mobile: false
  };

  componentWillReceiveProps(nextProps) {
    const { colors, size, tags, mobile } = nextProps;
    this.setState({ colors, size, tags, mobile });
  }

  handleChange = (selectedOption, type) => {
    const { dispatch } = this.props;
    switch (type.name) {
      case 'color':
        return dispatch(setFilterByColor(selectedOption));
      case 'tags':
        return dispatch(setFilterByTags(selectedOption));
      case 'size':
        return dispatch(setFilterBySize(selectedOption));
      case 'sortBy':
        return dispatch(setFilterBySortBy(selectedOption.value));
      default:
        throw new Error('Filter default');
    }
  };

  render() {
    const price = [
      { value: 'price', label: 'Price Desc' },
      { value: 'priceAsc', label: 'Price Asc' },
      { value: 'rating', label: 'Rating Desc' },
      { value: 'ratingAsc', label: 'Rating Asc' }
    ];
    const { colors, size, tags, mobile } = this.state;
    return (
      <div className={`content grid-12 ${!mobile ? 'desktop' : 'mobile'}`}>
        <Form handleSubmit={this.handleSubmit}>
          <h3>Filter</h3>
          <span>
            Sort By
            <Select name="sortBy" onChange={this.handleChange} options={price} id="sortBy" />
          </span>
          <span>
            Color
            <Select onChange={this.handleChange} name="color" options={colors} isMulti />
          </span>
          <span>
            Size
            <Select onChange={this.handleChange} name="size" options={size} isMulti />
          </span>
          <span>
            Tag
            <Select onChange={this.handleChange} name="tags" options={tags} isMulti />
          </span>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const colors = getAllColorsFromItems(state.products.products);
  const size = getAllSizeFromItems(state.products.products);
  const tags = getAllTagsFromItems(state.products.products);
  return {
    colors,
    size,
    tags
  };
};

export default connect(mapStateToProps)(Filter);
