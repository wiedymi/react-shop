import React, { Component } from 'react'
import Search from '../Search/Search'
import Card from '../Card/Card'

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <div className='content grid-12'>
                    <Search />
                </div>
                <div className='content grid-9'>              
                    <Card />    
                </div>
                <div className='grid-3 lf-padding'>              
                    <div className='content'>
                        Filters
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;