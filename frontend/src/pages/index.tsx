import React from 'react';

import Header from '../components/Header';
import About from './PageAbout';
import Home from './PageHome';
import Services from './PageServices';
import Connections from './PageConnections';
import Contact from './PageContact';
import Footer from './PageFooter';

const Landing = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Connections />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
