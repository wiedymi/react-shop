import React, { Component } from 'react'

class Color extends Component {
    state = {
        color: ''
    }
    handleColor = () => {

    }
    render() {
        const color =  this.props.color.map((color, index) => (
            <button className='button' style={{ background: color}} key={index}></button>
        ))
        return (
            <div className='color desktop'>
                <label>Avalible colors</label>
                <p>{color}</p>
            </div>
        )
    }
}

export default Color;