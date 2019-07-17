import React, { Component } from 'react'
import Form from '../Form/Form'
import Input from '../Form/inputs'

class Filter extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const tags = ['hello', 'dsfdsf', 'fdsfsdf'];
        return (
            <div className='filter'>
                <Form handleSubmit={this.handleSubmit}>
                    <Input name='search' placeholder='Something...'/>
                </Form>
            </div>
        )
    }
}

export default Filter;