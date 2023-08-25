import React from "react";
import Common from "./Common";
import about from "./img/about.svg"

const About = () => {
  return (
     <>
     <Common name="Welcome To About Page" visit="/contact" imgsrc={about} btnname="Contact US"/>
     </>
  );
}

export default About;
