import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/index';
import ProviderList from './pages/ProviderList';
import ProviderForm from './pages/ProviderForm';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={Landing} />

        <Route path='/search-provider' component={ProviderList} />
        <Route path='/register-provider' component={ProviderForm} />
      </BrowserRouter>
    </>
  );
}

export default Routes;
