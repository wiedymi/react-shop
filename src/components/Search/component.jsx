import React, { Component } from 'react';
import Form from '../Form';
import Input from '../Inputs';

class Search extends Component {
  handleChange = e => {
    e.preventDefault();
    const { searchByText } = this.props;
    searchByText(e.target.value);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="search">
        <Form onSubmit={this.handleChange}>
          <Input name="search" onChange={this.handleChange} placeholder={text} value={text} />
        </Form>
      </div>
    );
  }
}

export default Search;
