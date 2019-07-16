import React from 'react'
import Social from './social'
import Lang from './Language'
import Logo from './Logo'
import Container from '../Container'

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Logo />
                <Social />               
                <Lang />
            </Container>
        </div>
    )
}


export default Header;