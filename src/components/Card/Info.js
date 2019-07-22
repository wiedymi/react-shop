import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import Stars from './Stars'
import Color from './Color'
import Size from './Size'
import Description from './Description'
import Tags from '../Tags'
import Button from '../Button'
import Counter from './Counter'
import { addToCart } from '../../redux/action'

class Info extends Component {
    state = {
        id: 1,
        count: 1
    }
    componentWillMount() {
         const {
            id,
            title,
            rating,
            description,
            tags,
            color,
            size,
            price
        } = this.props;
        this.setState({
            id,
            title,
            rating,
            description,
            tags,
            color,
            size,
            price
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        const { id, count } = this.state;
        const { dispatch } = this.props;
        this.setState({ count: 1 })
        dispatch(addToCart(id, count))
        
    }
    handleCount = (count) => {
        this.setState({ count })
    }
    render() {
        const { 
            title, rating, description, tags, color, size, price 
        } = this.state;
        return (
            <div className='info'>  
                <div className='info__title__rating'>
                    <Title title={title} />
                    <div className='start__tags'>
                        <Stars rating={rating} />
                        <Tags tags={tags}/>
                    </div>                
                </div>
                <Color color={color} />
                <Size size={size} />
                <Description description={description} />
                <div className='purchase'>
                    <Button name='buy' text='Buy' handleClick={this.handleClick}/>
                    <Counter price={price} count={this.state.count} handleCount={this.handleCount}/>
                </div>
            </div>
        )
    }

}

export default connect()(Info)
