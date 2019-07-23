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
                <div className='grid-d-9 grid-t-8 grid-tl-8 grid-m-12 no-padding'>
                    <div className='content grid-12'>
                        <Search /> 
                    </div>
                    <div className='grid-d-12 rid-t-4 grid-tl-4 grid-m-12 no-margin'>
                        <Filter mobile={true}/>
                    </div>
                   
                    <div className='content grid-12 tn-top'>
                        <Card />
                    </div>                                
                </div>
                <div className='grid-d-3 grid-t-4 grid-tl-4 grid-m-12 lf-padding'>                         
                    <Filter mobile={false}/>
                </div>
            </div>
        )
    }
}

export default connect()(Content);