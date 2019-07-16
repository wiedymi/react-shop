import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {
    state = {
        cart: 0
    }
    render() {
        return (
            <Tippy content="Your cart">
                <a href='#cart' className='header__cart' data-count='1'>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" className='header__cart' />
                </a>
            </Tippy>
        )
    }
}

export default Cart;