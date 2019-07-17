import React, { Component } from 'react'

class Color extends Component {
    state = {
        color: ''
    }
    handleColor = () => {

    }
    render() {
        return (
            <div className='color m-top'>
                <label>Avalible colors</label>
                <button className='button' style={{ background: this.props.color[0]}}>

                </button>
            </div>
        )
    }
}

export default Color;