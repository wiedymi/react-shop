import React from 'react'
import Social from './social'
import Carts from './Carts'
import Logo from './Logo'
import Container from '../Container'

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Logo />
                <Social />               
                <Carts />
            </Container>
        </div>
    )
}


export default Header;