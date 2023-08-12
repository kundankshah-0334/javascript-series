import React from "react";
import Image from './image';
function Card(props) {
    return (
      <>
 
    <div class="card" id="card_id">
       <Image imgsrc={props.imgsrc} />
        <div class="card-body">
        <h5 class="card-title">{props.Sname}</h5>
        <p class="card-text">{props.title}</p>
        <a href={props.link} className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </>
    )
   }

export default Card;