 import React from 'react'
 import ReactDOM from 'react-dom'
 import "./index.css"
 import Card from './card';
import Sdata from './Sdata';

 const a = '';

 console.log(Sdata[0]);

 ReactDOM.render(
  <>
    <h1 className='Heading'>The Favoriot Shows</h1>
    <div class="py-2 container my-4" id="card-container">
  {Sdata.map((val) => {
    return(
      <Card 
        key={val.id}
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