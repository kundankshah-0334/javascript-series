 import React from 'react'
 import ReactDOM from 'react-dom'
 import "./index.css"
 import Card from './card';
import Sdata from './Sdata';

 const a = '';

 console.log(Sdata[0]);

 ReactDOM.render(
  <>
    <div class="py-2 container my-4" id="card-container">
  {Sdata.map((val) => {
    return(
      <Card 
        imgsrc={val.imgsrc}
        Sname={val.Sname}
        title={val.title}
        link={val.link}
      />
      
    )
  })}
  </div>
  </>
  ,document.getElementById("root")
 )