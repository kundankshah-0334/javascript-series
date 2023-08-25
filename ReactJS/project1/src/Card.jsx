import React from "react";
import { NavLink } from "react-router-dom";
// import web from "./img/web.svg"

const Card = (props) => {
  return (
     <>
 
    <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} /><br />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <div className="text-center">
                    <NavLink to="" className="btn btn-sm btn-primary">Learn more</NavLink>
                    </div>
                    <br />
                </div>
        </div>
    </div>
   
     </>
  );
}

export default Card;
