import React, { Component } from 'react';
import Select from 'react-select';
import Form from '../Form';

class Filter extends Component {
  state = {
    sortBy: [
      { value: 'price', label: 'Price Desc' },
      { value: 'priceAsc', label: 'Price Asc' },
      { value: 'rating', label: 'Rating Desc' },
      { value: 'ratingAsc', label: 'Rating Asc' }
    ]
  };

  handleChange = (selectedOption, type) => {
    const { setFilterBy } = this.props;
    switch (type.name) {
      case 'color':
        return setFilterBy('colors', selectedOption);
      case 'tags':
        return setFilterBy('tags', selectedOption);
      case 'size':
        return setFilterBy('size', selectedOption);
      case 'sortBy':
        return setFilterBy('sortBy', selectedOption.value);
      default:
        throw new Error('Filter default');
    }
  };

  render() {
    const { colors, size, tags, mobile } = this.props;
    const { sortBy } = this.state;
    return (
      <div className={`content grid-12 ${!mobile ? 'desktop' : 'mobile'}`}>
        <Form handleSubmit={this.handleSubmit}>
          <h3>Filter</h3>
          <span>
            Sort By
            <Select name="sortBy" onChange={this.handleChange} options={sortBy} id="sortBy" />
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

export default Filter;
