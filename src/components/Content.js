import React from 'react';
import Search from './Search/container';
import Cards from './Cards/container';
import Filter from './Filter/container';
import Container from './Container';

const Content = () => {
  return (
    <Container>
      <div className="grid-d-9 grid-t-8 grid-tl-8 grid-m-12 no-padding">
        <div className="content grid-12">
          <Search />
        </div>
        <div className="grid-d-12 rid-t-4 grid-tl-4 grid-m-12 no-margin">
          <Filter mobile />
        </div>
        <div className="content grid-12 tn-top">
          <Cards />
        </div>
      </div>
      <div className="grid-d-3 grid-t-4 grid-tl-4 grid-m-12 lf-padding">
        <Filter mobile={false} />
      </div>
    </Container>
  );
};

export default Content;
