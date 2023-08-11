import React from "react";

function Card(props) {
    return (
      <>
    <div class='Divv'>
    <div class="card">
    <img src={props.imgsrc} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.Sname}</h5>
      <p class="card-text">{props.title}</p>
      <a href={props.link} className="btn btn-primary" target='_blank'>Go somewhere</a>
    </div>
  </div>
    </div>
    </>
    )
   }

export default Card;