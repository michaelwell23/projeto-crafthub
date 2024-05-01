import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/ServicesPage';
import Contact from './pages/Contact';
import ProviderList from './pages/ProviderList';
import ProviderForm from './pages/ProviderForm';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />

        <Route path='/search-provider' component={ProviderList} />
        <Route path='/register-provider' component={ProviderForm} />
      </BrowserRouter>
    </>
  );
}

export default Routes;
