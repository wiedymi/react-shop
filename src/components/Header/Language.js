import React, { Component } from 'react'
import Dropdown from 'react-dropdown'

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
            <div className='header__language grid-d-4'>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select your language" />
            </div>
        )
    }
}

export default Language;