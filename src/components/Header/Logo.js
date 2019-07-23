import React from 'react'
import Tippy from '@tippy.js/react'

const Logo = () => {
    return (
        <div className='grid-d-2 grid-t-8 grid-tl-8 grid-m-8'>
            <Tippy content='Some info about the company, blah blah blah'>
                <h1 className='header-title'><a href='/'>React Shop</a></h1>
            </Tippy>
        </div>
    )
}


export default Logo;