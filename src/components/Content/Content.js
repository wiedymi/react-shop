import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <Filter />
                </div>
                <div className='content'>
                    <Card />
                </div>
            </div>
        )
    }
}

export default Content;