import React, { Component } from 'react'
import CartItem from './CartItem';


class SmCard extends Component {
    state = {
        products: []
    }
   
    componentDidMount () {
        const { products } = this.props;
        this.setState({ products });
    }
    componentWillReceiveProps(nextProps) {
        const { products } = nextProps;
        this.setState({ products });
    }
    
   
    render() {
        const products = this.state.products.map((product, i) => 
            <CartItem
                key={i}
                product={product}
            />
        )
        return (
            <div className='cart-list-product'>
               {products.length > 0 ? products : (<div>Nothing to show</div>) }
            </div>
        )
    }
}



export default SmCard