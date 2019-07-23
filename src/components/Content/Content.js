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
                <div className='grid-9 no-padding'>
                    <div className='content grid-12'>
                        <Search /> 
                    </div>
                    <div className='grid-12 no-margin'>
                        <Filter mobile={true}/>
                    </div>
                   
                    <div className='content grid-12 tn-top'>
                        <Card />
                    </div>                                
                </div>
                <div className='grid-3 lf-padding'>                         
                    <Filter mobile={false}/>
                </div>
            </div>
        )
    }
}

export default connect()(Content);