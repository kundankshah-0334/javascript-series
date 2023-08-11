 import React from 'react'
 import ReactDOM from 'react-dom'
 import "./index.css"
 import Card from './card';
import Sdata from './Sdata';

 const a = '';

 console.log(Sdata[0]);

 ReactDOM.render(
  <>
   <Card 
     imgsrc={Sdata[0].imgsrc}
     Sname={Sdata[0].Sname}
     title={Sdata[0].title}
     link={Sdata[0].link}
      />
   <Card 
     imgsrc={Sdata[1].imgsrc}
     Sname={Sdata[1].Sname}
     title={Sdata[1].title}
     link={Sdata[1].link}
      />
   <Card 
     imgsrc={Sdata[2].imgsrc}
     Sname={Sdata[2].Sname}
     title={Sdata[2].title}
     link={Sdata[2].link}
      />
   {/* <Card imgsrc="https://picsum.photos/200/300" Sname="The Dark Thunder" title="The Series of Stranger" link="https://picsum.photos/"/>
   <Card imgsrc="https://picsum.photos/200/300" Sname="Cartel" title="The Game of Politics and Gold" link="https://picsum.photos/"/> */}
  </>
  ,document.getElementById("root")
 )