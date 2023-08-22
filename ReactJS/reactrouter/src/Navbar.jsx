import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <NavLink exact activeClassName="active_class"  to="/">
    Home
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/contact">
    Contact
    </NavLink>


    {/* <br />
 
      <a href="/"> Home</a>
      <a href="/contact"> Contact</a> */}
    </>
  );
}

export default Navbar;