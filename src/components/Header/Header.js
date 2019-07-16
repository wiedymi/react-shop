import React, { Component } from 'react'
import Social from './social'
import Tippy from '@tippy.js/react'

class Header extends Component {
    render() {  
        return (
            <div className='header'>
                <div className='container'>
                    <div className='grid-d-4 grid-t-4 grid-tl-4 grid-m-6'>
                        <Tippy content='Some info about the company, blah blah blah'>
                            <h1 className='header__title'><a href='/'>React Shop</a></h1>
                        </Tippy>
                    </div>
                    <div className='grid-d-8 grid-t-8 grid-tl-8 grid-m-6'>
                        <Social />
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;