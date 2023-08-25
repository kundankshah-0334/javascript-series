import React from "react";
import Card from "./Card";
import Sdata from "./api";

const Service = () => {
  return (
     <>
      <div className="my-1">
        <h2 className="text-center">Our Services</h2><br />
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-3">
                  {
                    Sdata.map((val,index) => {
                       return (
                        <Card title={val.title} imgsrc={val.imgsrc}/>
                       )
                    })
                  }
                </div>
              </div>
            </div>
      </div>
      </div>
     </>
  );
}

export default Service;
