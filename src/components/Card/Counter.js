import React, { Component } from 'react'
import Price from './Price'

class Counter extends Component {
    state = {
        count: 1
    }
    decrement = () => {
        this.setState((prevState) => {
            const count = prevState.count === 1 ? 1 : prevState.count - 1;
            this.props.handleCount(count);
            return { count }
        })
    }
    increment = () => {
        this.setState((prevState) => {
            const count = prevState.count + 1
            this.props.handleCount(count);
            return { count }
        })
        
    }
    componentWillReceiveProps () {
        const { count } = this.state;
        if(this.state.count !== count) {
            this.setState({ count });
            this.props.handleCount(count);
        }   
    }

    render() {
        return (
            <div className="counter">
                <div className='decrement' onClick={this.decrement}>-</div>
                <div className='result'>{this.state.count}</div>
                <div className='increment' onClick={this.increment}>+</div>
                <Price count={this.state.count} price={this.props.price}/>
            </div>
        )
    }
}

export default Counter