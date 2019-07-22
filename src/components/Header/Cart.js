import React, { Component } from 'react'
import Tippy from '@tippy.js/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import CartModal from '../CartModal';


class Cart extends Component {
    state = {
        cart: 0,
        isOpen: false
    }
    componentDidMount() {
        const { cart } = this.props;
        if(cart !== this.state.cart) {
            this.setState({ cart })
        }
    }
    componentDidUpdate() {
        const { cart, products } = this.props;
        if(cart !== this.state.cart) {
            this.setState({ cart, products })
        }
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
 
    render() {
        return (
            <>
                <Tippy content="Your cart">
                    <a href='#cart' className='header__cart' data-count={this.state.cart} onClick={this.toggleModal}>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" className='header__cart' />
                    </a>
                    
                </Tippy>
                <CartModal products={this.state.products} isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return { 
        cart: state.cart.count,
        products: state.cart.products
    }
}

export default connect(mapStateToProps)(Cart);