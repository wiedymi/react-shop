import React from 'react';
import Tippy from '@tippy.js/react';

const Logo = () => {
  return (
    <div className="grid-d-2 grid-t-8 grid-tl-8 grid-m-8">
      <Tippy content="Some info about the company, blah blah blah">
        <a href="/">
          <h1 className="header-title">React Shop</h1>
        </a>
      </Tippy>
    </div>
  );
};

export default Logo;
