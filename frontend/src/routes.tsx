import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/ServicesPage';
import Contact from './pages/Contact';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/faq' component={Contact} />
      </BrowserRouter>
    </>
  );
}

export default Routes;
