import React, { Component } from 'react'
import Search from '../Search/Search'
import Card from '../../redux/container/Card'
import Filter from '../Filter/Filter'
import { connect } from 'react-redux'
import { nextPage } from '../../redux/action';


class Content extends Component {
    loadFunc = () => {
        return this.props.dispatch(nextPage())
    }
    render() {
        return (
            <div className='container'>
                <div className='content grid-9'>
                    <Search />
                    <br/>
                    <Card />          
                </div>
                <div className='grid-3 lf-padding'>              
                    <div className='content'>
                        <Filter />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Content);