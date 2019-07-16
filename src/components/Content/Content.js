import React, { Component } from 'react'
import Filter from '../Filter/Filter'

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <Filter />
                </div>
                <div className='content'>

                </div>
            </div>
        )
    }
}

export default Content;