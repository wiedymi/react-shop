import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'


class Cart extends Component {
    state = {
        cart: 0
    }
    componentDidMount() {
        const { cart } = this.props;
        if(cart !== this.state.cart) {
            this.setState({ cart })
        }
    }
    componentDidUpdate() {
        const { cart } = this.props;
        if(cart !== this.state.cart) {
            this.setState({ cart })
        }
    }
    render() {
        return (
            <Tippy content="Your cart">
                <a href='#cart' className='header__cart' data-count={this.state.cart}>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" className='header__cart' />
                </a>
            </Tippy>
        )
    }
}

const mapStateToProps = state => {
    return { 
        cart: state.cart.count
    }
}

export default connect(mapStateToProps)(Cart);