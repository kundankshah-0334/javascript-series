import React from "react";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Error from "./Error";
import Footer from "./footer";
import { Navigate, Route, Routes  } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
     <>
     <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/service" Component={Service} />
        <Route path="*"  Component={Error}  />
      </Routes>
      <Footer />
 
     </>
  );
}

export default App;
