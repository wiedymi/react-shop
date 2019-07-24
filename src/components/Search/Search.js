import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Input from '../Form/Inputs';
import { search } from '../../redux/action';

class Search extends Component {
  state = {
    text: 'Something...'
  };

  componentDidMount() {
    const { text } = this.props;
    this.setState({ text });
  }

  handleChange = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(search(e.target.value));
  };

  render() {
    return (
      <div className="search">
        <Form onSubmit={this.handleChange}>
          <Input
            name="search"
            onChange={this.handleChange}
            placeholder={{ ...this.state }.text}
            value={{ ...this.state }.text}
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text ? state.text : 'Something...'
  };
};

export default connect(mapStateToProps)(Search);
