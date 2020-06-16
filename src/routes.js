import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AllNotes from './pages/AllNotes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={AllNotes} path="/allnotes" />
    </BrowserRouter>
  );
};

export default Routes;
