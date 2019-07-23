import React, { Component } from 'react'

class Size extends Component {
    state = {
        size: [],
        selected: undefined
    }
    handleSize = ({ target }) => {
        const selected = target.value;
        this.setState({ 
            ...this.state,
            selected
        })        
    }

    render() {
        const size = this.props.size.map((size, index) => (
            <button 
            className={this.state.selected === size ? 'button selected' : 'button'} 
            onClick={this.handleSize}
            key={index}
            value={size}
            >
                {size}
            </button>
        ));
        return (
            <div className='size desktop'>
                <label>Avalible size</label>
                {size}
            </div>
        )
    }
}

export default Size;