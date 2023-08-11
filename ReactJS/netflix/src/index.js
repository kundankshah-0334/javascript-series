 import React from 'react'
 import ReactDOM from 'react-dom'
 import "./index.css"

 const a = '';

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

 ReactDOM.render(
  <>
   <Card imgsrc="https://picsum.photos/200/300" Sname="MIRZAPUR" title="The Series of Power and Money" link="https://picsum.photos/"/>
   <Card imgsrc="https://picsum.photos/200/300" Sname="The Dark Thunder" title="The Series of Stranger" link="https://picsum.photos/"/>
   <Card imgsrc="https://picsum.photos/200/300" Sname="Cartel" title="The Game of Politics and Gold" link="https://picsum.photos/"/>
  </>
  ,document.getElementById("root")
 )