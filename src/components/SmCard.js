import React, { Component } from 'react'

export default class SmCard extends Component {
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
        const products = this.state.products.map((product, i) => <div key={i}>{product.title} x{product.count}</div>)
        return (
            <div className='cart-list-product'>
               {products.length > 0 ? products : (<div>Nothing to show</div>) }
            </div>
        )
    }
}
