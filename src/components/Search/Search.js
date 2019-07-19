import React, { Component } from 'react'
import Form from '../Form/Form'
import Input from '../Form/inputs'
import { connect } from 'react-redux'
import { search } from '../../redux/action'

class Search extends Component {
    handleChange = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(search(e.target.value))
    }
    state = {
        text: 'Something...'
    }
    componentDidMount(){
        const { text } = this.props;
        this.setState({ text });
    }
    render() {
        return (
            <div className='search'>
                <Form onSubmit={ this.handleChange }>
                    <Input
                        name='search'
                        onChange={this.handleChange}
                        placeholder={this.state.text}
                        value={this.state.text}
                    />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      text: state.text ? state.text : 'Something...'
    };
};

export default connect(mapStateToProps)(Search);