import Navigation from './Navigation';
import Footer from './Footer';

import React from 'react';

const Layouts = props => {
  return (
    <>
      <Navigation />
      <main className="py-3">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layouts;
