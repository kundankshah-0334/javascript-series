import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';

const App = () => {
  return (
    <>
    <Routes >
      <Route exact path='/' Component={Home} />
      <Route exact path='/contact' Component={Contact} />
      <Route component={Error} />
    </Routes>
      {/* <Home />
      <Contact /> */}
    </>
  );
}

export default App;
