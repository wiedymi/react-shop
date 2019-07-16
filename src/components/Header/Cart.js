import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCart } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {
    state = {
        cart: 0
    }
    render() {
        return (
            <Tippy content="Your cart">
                <a href='#cart'>
                    <FontAwesomeIcon icon={faCart} size="lg" inverse/>
                    { this.state.cart }
                </a>
            </Tippy>
        )
    }
}

export default Cart;