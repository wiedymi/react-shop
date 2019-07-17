import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';

class Stars extends Component {
    render(){
        return (
            <StarRatings
                rating={this.props.rating}
                starRatedColor="#00e0c7" 
                numberOfStars={5}
                starDimension="30px"
                starSpacing="0px"
                name='rating'
            />
        )
    }
}

export default Stars
