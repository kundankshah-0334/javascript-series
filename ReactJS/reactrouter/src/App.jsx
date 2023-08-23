import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from "./Service";
import Search from './Search';

import User from './User';


const App = () => {

  const Name = () => {
  return (
    <h1>This is name Function</h1>
  )
 }

  return (
    <>
    <Navbar />
    <Routes >
      <Route exact path='/' Component={() => <Home name="Home" /> } />
      <Route exact path='/contact' Component={() => <Contact name="Contact" />} />
      <Route exact path='/service' Component={() => <Service name="Service" />} />
      <Route exact path='/search' Component={() => <Search name="search" />} />
      <Route  path='/user/:username/:lname' Component={() => <User name="User" />} />
      <Route exact path='/contact/name' Component={Name} />
      <Route component={Error} />
    </Routes>
      {/* <Home />
      <Contact /> */}
    </>
  );
}

export default App;
