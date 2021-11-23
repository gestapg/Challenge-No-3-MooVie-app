import Navigation from './Navigation';
import Footer from './Footer';

import React from 'react';

const Layouts = props => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layouts;
