import React, { Component } from 'react'

class Price extends Component {
    render() {
        const { price = 0, count = 1, text = 'Price: ' } = this.props;
        return (
            <div className='price'>
                {text}{ count * price }$
            </div>
        )
    }
}

export default Price