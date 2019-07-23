import React, { Component } from 'react'
import Cart from './Cart'

class Carts extends Component {
    render() {
        return (
            <div 
                className='grid-d-2 grid-t-3 grid-tl-3 grid-m-3'
                style={{ padding: '7px' }}
            > 
                <Cart />
            </div>
        )
    }
}

export default Carts;