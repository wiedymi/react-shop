import React, { Component } from 'react'
import Form from '../Form/Form'
import Select from 'react-select'

class Filter extends Component {
    handleSubmit = () => {

    }
    render() {
        const price = [
            { value: 'price', label: 'Price' },
            { value: 'rating', label: 'Rating' }
        ]
        const color = [
            { value: 'red', label: 'Red' },
            { value: 'rating', label: 'rating' },
        ]
        const size = [
            { value: 'red', label: 'Red' },
            { value: 'rating', label: 'rating' },
        ]
        const tags = [
            { value: 'red', label: 'Red' },
            { value: 'rating', label: 'rating' },
        ]
        return (
            <Form handleSubmit={this.handleSubmit}>
                <h1>Filter</h1>
                <label name='sortBy'>Sort By</label>
                <Select options={price} />
                <label name='color'>Color</label>
                <Select options={color} isMulti/>
                <label name='size'>Size</label>
                <Select options={size} isMulti/>
                <label name='tags'>Tag</label>
                <Select options={tags} isMulti/>
            </Form>
        )
    }
}

export default Filter;