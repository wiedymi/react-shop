import React, { Component } from 'react'

class Price extends Component {
    render() {
        const { price = 0, count = 1 } = this.props;
        return (
            <div className='price'>
                Price: { count * price }$
            </div>
        )
    }
}

export default Price