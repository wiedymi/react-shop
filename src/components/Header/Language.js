import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import Cart from './Cart'

class Language extends Component {
    _onSelect = ({ value }) => {
        console.log(value)
    }
    render() {
        const options = [
            'English', 'Russian'
        ]
        const defaultOption = options[0];
        return (
            <div 
                className='grid-d-2 grid-t-2 grid-tl-4 grid-m-4'
                style={{ padding: '7px' }}
            > 
                <Cart />
                <div className='header__language grid-d-8 right'>
                    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select your language" />
                </div>
            </div>
        )
    }
}

export default Language;