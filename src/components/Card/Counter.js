import React, { Component } from 'react'
import Price from './Price'

class Counter extends Component {
    state = {
        count: 1
    }
    decrement = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count === 1 ? 1 : prevState.count - 1
            }
        })
    }
    increment = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
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