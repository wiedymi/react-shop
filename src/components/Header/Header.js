import React from 'react';
import Cart from './Cart';
import Logo from './Logo';
import Container from '../Container';

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Logo />
        <div className="grid-d-8 grid-t-1 grid-tl-1 grid-m-1"> </div>
        <Cart />
      </Container>
    </div>
  );
};

export default Header;
