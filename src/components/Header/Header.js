import React from 'react'
import Tippy from '@tippy.js/react'
import Social from './social'
import Lang from './Language'
import Container from '../Container'

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <div className='grid-d-2 grid-t-2 grid-tl-2 grid-m-4'>
                    <Tippy content='Some info about the company, blah blah blah'>
                        <h1 className='header__title'><a href='/'>React Shop</a></h1>
                    </Tippy>
                </div>
                <Social />               
                <div 
                    className='grid-d-4 grid-t-4 grid-tl-4 grid-m-4'
                    style={{ padding: '7px' }}
                > 
                    <Lang />
                </div>
            </Container>
        </div>
    )
}


export default Header;