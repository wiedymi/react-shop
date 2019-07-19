import React, { Component } from 'react'
import Form from '../Form/Form'
import Select from 'react-select'
import { connect } from 'react-redux'
import { 
    getItems, setFilterByColor, setFilterByTags, setFilterBySize, setFilterBySortBy 
} from '../../redux/action'
import { 
    getAllColorsFromItems, getAllSizeFromItems, getAllTagsFromItems 
} from '../../redux/handlers'


class Filter extends Component {
    state = {
        colors: [],
        size: [],
        tags: []
    }
    componentDidMount(){
        if(this.state.colors.length === 0){
            this.props.dispatch(getItems())
        }
      }
    componentDidUpdate(){
        let { colors, size, tags } = this.props;
        if(this.state.colors.length !== colors.length){
            this.setState({ colors, size, tags });
        } 
    }
    handleChange = (selectedOprion, type) => {
        const { dispatch } = this.props;
        switch (type.name){
            case 'color': 
                return dispatch(setFilterByColor(selectedOprion));
            case 'tags': 
                return dispatch(setFilterByTags(selectedOprion));
            case 'size': 
                return dispatch(setFilterBySize(selectedOprion)); 
            case 'sortBy': 
                return dispatch(setFilterBySortBy(selectedOprion.value));
            default:
                return console.log('Filter default');
        } 
    }
    render() {
        const price = [
            { value: 'price', label: 'Price' },
            { value: 'rating', label: 'Rating' }
        ]
        return (
            <Form handleSubmit={this.handleSubmit}>
                <h1>Filter</h1>
                <label name='sortBy'>Sort By</label>
                <Select name='sortBy' onChange={this.handleChange} options={price} />
                <label name='color'>Color</label>
                <Select onChange={this.handleChange} name='color' options={this.state.colors} isMulti/>
                <label name='size'>Size</label>
                <Select onChange={this.handleChange} name='size' options={this.state.size} isMulti/>
                <label name='tags'>Tag</label>
                <Select onChange={this.handleChange} name='tags' options={this.state.tags} isMulti/>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    const colors = getAllColorsFromItems(state.items.items);
    const size = getAllSizeFromItems(state.items.items);
    const tags = getAllTagsFromItems(state.items.items);
    return {
        colors,
        size,
        tags
    }
}

export default connect(mapStateToProps)(Filter);