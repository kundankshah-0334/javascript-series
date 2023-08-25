import React from "react";
import { NavLink } from "react-router-dom";


const Common = (Props) => {
  return (
     <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-2 ptlg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{Props.name}<srtong className="strong"> Trust & Love</srtong></h1>
                  <h2 className="mt-3">We are the Good Developer In this City.</h2>
                  <div className="mt-5">
                    <NavLink to={Props.visit} className="btn-get-started">{Props.btnname}</NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={Props.imgsrc} className="img-fluid animated" alt="svg"/>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>
     </>
  );
}

export default Common;
