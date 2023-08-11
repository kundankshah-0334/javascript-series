 import React from 'react'
 import ReactDOM from 'react-dom'
 import "./index.css"

 const a = '';

 function Card() {
  return (
    <>
  <div class='Divv'>
  <div class="card">
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  </>

  )
  
 }

 ReactDOM.render(
  <>
   <Card />
   <Card />
   <Card />
  </>
  ,document.getElementById("root")
 )