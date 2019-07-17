import React, { Component } from 'react'

class Size extends Component {
    state = {
        size: [],
        selected: ''
    }
    handleSize = ({ target }) => {
        const selected = target.innerTEXT;
        this.setState({selected});
    }

    render() {
        const size = this.props.size.map((size, index) => (
            <button className='button' onClick={this.handleSize} key={index}>
                {size}
            </button>
        ));
        return (
            <div className='size'>
                <label>Avalible size</label>
                {size}
            </div>
        )
    }
}

export default Size;