import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="nav_bar">

    
    <NavLink exact activeClassName="active_class"  to="/">
    Home
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/contact">
    Contact
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/service">
    Service
    </NavLink>

    </div>


    {/* <br />
 
      <a href="/"> Home</a>
      <a href="/contact"> Contact</a> */}
    </>
  );
}

export default Navbar;