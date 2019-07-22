import React, { Component } from 'react'
import Card from './Card'
import getProducts from '../redux/thunk'
import InfiniteScroll from 'react-infinite-scroller';
import { filterProduct  } from '../redux/handlers'
class Cards extends Component {
    state = {
        products: [],
        search: '',
        isLoading: true,
        isError: false,
        hasMoreProducts: true,
        load: false,
        page: 1
  
    }
    componentDidMount(){
        if(this.state.isLoading){
            try {
                this.props.dispatch(getProducts());
            } catch (error) {
                return new Error(error)
            }
        }
        
    }
    componentDidUpdate(){
        let { products, search = '', isLoading, isError, filter } = this.props;
        if(this.state.isLoading !== isLoading){
            
            products = filterProduct(products, filter)

            this.setState({ products, search, isLoading, isError })
        }
       
      }
  
    componentWillReceiveProps(nextProps) {
        let { products, search = '', isLoading, isError, page, filter } = nextProps; 
        if(JSON.stringify(this.state.filter) !== JSON.stringify(filter)){
            products = filterProduct(products, filter);
            this.setState({ products }) 
        }

        if(this.state.products.length === 0) {
            
            this.setState({ hasMoreProducts: true })
        } else if (products.length === 0) {
            this.setState({ hasMoreProducts: false })
        }
  
        
        if(products.length > 0 && page !== this.state.page){  
            products = this.state.products.concat(products);
            this.setState({ products, search, isLoading, isError, load: false, page, filter });
        } 
    }
    loadProducts = () => {
        if(this.state.isLoading === false && this.state.load === false) {
            const { dispatch } = this.props;
            this.setState({ load: true })
            dispatch({ type: 'NEXT_PAGE'})
    
        }
    }
    render() {
        const cards = this.state.products.map((product, i) => 
            <Card product={product} key={i}/>
        )
        return (
            <InfiniteScroll 
                pageStart={this.state.page}
                loadMore={this.loadProducts}
                hasMore={this.state.hasMoreProducts}
                loader={ <div className='loading' key={0}>Loading...</div>}
            >
                <div className='cards'>
                    {cards}
                </div>
            </InfiniteScroll>   
        )
    }
}

export default Cards