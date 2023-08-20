import React from "react";
import logo from "./image/logo.png"

const Header = () => {
  return (
    <>
    <div className="navbar">
      <img src={logo} alt="logo"/>
      <h1>KeepNote</h1>
    </div>
    </>
  );
}

export default Header;
