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
    handleChange = (selectedOption, type) => {
        const { dispatch } = this.props;
        switch (type.name){
            case 'color': 
                return dispatch(setFilterByColor(selectedOption));
            case 'tags': 
                return dispatch(setFilterByTags(selectedOption));
            case 'size': 
                return dispatch(setFilterBySize(selectedOption)); 
            case 'sortBy': 
                return dispatch(setFilterBySortBy(selectedOption.value));
            default:
                return console.log('Filter default');
        } 
        
    }
    render() {
        const price = [
            { value: 'price', label: 'Price Desc' },
            { value: 'priceAsc', label: 'Price Asc' },
            { value: 'rating', label: 'Rating Desc' },
            { value: 'ratingAsc', label: 'Rating Asc' },
        ]
        const { colors, size, tags} = this.state;
        return (
            <div className={`content grid-12 ${!this.props.mobile ? 'desktop' : 'mobile'}`}>         
                <Form handleSubmit={this.handleSubmit}>
                    <h3>Filter</h3>
                    <label name='sortBy'>Sort By</label>
                    <Select name='sortBy' onChange={this.handleChange} options={price}/>
                    <label name='color'>Color</label>
                    <Select onChange={this.handleChange} name='color' options={colors} isMulti/>
                    <label name='size'>Size</label>
                    <Select onChange={this.handleChange} name='size' options={size} isMulti/>
                    <label name='tags'>Tag</label>
                    <Select onChange={this.handleChange} name='tags' options={tags} isMulti/>
                </Form>
            </div>
        )
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
    }
}

export default connect(mapStateToProps)(Filter);