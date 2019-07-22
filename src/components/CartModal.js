import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '../components/Button'
import Price from '../components/Card/Price'
import { connect } from 'react-redux'
import SmCard from '../components/SmCard'


class CartModal extends Component {
    state = {
        isOpen: false,
        price: 0,
        products: []
    };
    componentDidMount() {
        Modal.setAppElement('body');
    }

 
    componentWillReceiveProps(nextProps) {
        const { isOpen, products, price } = nextProps;
        
        this.setState({ isOpen, products, price })
    }

    componentDidUpdate(nextProps){
        console.log(nextProps)
    }
    render() {
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              border : '2px solid #eee'
            }
        };
        return (
            <Modal
            isOpen={this.state.isOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.props.toggleModal}
            contentLabel="Cart Modal"
            style={customStyles}
            overlayClassName="modal-overlay"
            >
                <div className='cart-modal'>
                    <h3>Your Cart</h3>
                    <div className='sm-cards'>
                        <SmCard products={this.state.products}/>
                    </div>
                    <hr/>
                    <div className='cart-modal-purchase'>
                        <Button text='Purchase' />
                        <Price price={this.state.price}/>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    let { cart, products } = state;
    let cartids = cart.products.map(cart => cart.id);
    cartids = [...new Set(cartids)];

    products = products.products.filter((product) => {
        return [product["_id"]["$oid"]].some(id => {
            return cartids.includes(id);
        })
    })

    products = products.map((product) => {
        return {
            ...product, 
            count: +cart.products.map(cart => {
                let count;
                if(product["_id"]["$oid"] === cart.id) {
                    count = cart.count
                }  
                return count 
            }).toString().replace(',','')
        }
    })
    return {
        products,
        price: products.reduce((price, product) => {
            return price += +product.price * +product.count
        }, 0)
    }
}

export default connect(mapStateToProps)(CartModal)