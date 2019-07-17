import React, { Component } from 'react'
import Form from '../Form/Form'
import Input from '../Form/inputs'

class Search extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className='search'>
                <Form handleSubmit={this.handleSubmit}>
                    <Input name='search' placeholder='Something...'/>
                </Form>
            </div>
        )
    }
}

export default Search;