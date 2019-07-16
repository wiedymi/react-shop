import React from 'react'
import Tippy from '@tippy.js/react'

const Logo = () => {
    return (
        <div className='grid-d-2 grid-t-2 grid-tl-2 grid-m-4'>
            <Tippy content='Some info about the company, blah blah blah'>
                <h1 className='header__title'><a href='/'>React Shop</a></h1>
            </Tippy>
        </div>
    )
}


export default Logo;