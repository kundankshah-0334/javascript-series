// import React from "react";
// import { NavLink } from "react-router-dom";
// import web from "./img/web.svg";

// function Home() {
//   return (
//      <>
//       <section id="header" className="d-flex align-items-center">
//         <div className="container-fluid nav_bg">
//           <div className="row">
//             <div className="col-10 mx-auto">
//               <div className="row">
//                 <div className="col-md-6 pt-2 ptlg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//                   <h1>Grow Your Business With <srtong className="strong"> Trust & Love</srtong></h1>
//                   <h2 className="mt-3">We are the Good Developer In this City.</h2>
//                   <div className="mt-5">
//                     <NavLink to="/contact" className="btn-get-started">Get started </NavLink>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 order-1 order-lg-2 header-img">
//                   <img src={web} className="img-fluid animated" alt="svg"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>
//       </section>
//      </>
//   );
// }

// export default Home;


import React from "react";
import Common from "./Common";
import web from "./img/web.svg";
const Home = () => {
  return (
     <>
     <Common name="Grow Your Business With" visit="/service" imgsrc={web} btnname="Get Satrted"/>
     </>
  );
}

export default Home;
