import React from 'react';
import  ReactDOM from 'react-dom';

let currDate = new Date();
// let currHour = currDate.getHours();
let currHour = 16;
let message = "";

const messageCss = {

}
const style = {
    color : "",
    textAlign : "center",
    padding :"100px"
  }

if(currHour >= 6  && currHour < 12){
    message = "Good Morining";
    messageCss.color = "Yellow";
} else if(currHour >= 12 && currHour < 16){
    message = "Good Afternoon";
    messageCss.color = "pink";
} else if( currHour >= 16 && currHour < 20) {
    message = "Good Evening";
    messageCss.color = "Blue";
} else{
    message = "Good Night";
    messageCss.color = "Black";
}

ReactDOM.render(
  <>
<h1 style={style}><span style={messageCss}>{message}</span>, Sir {currHour}</h1>
  </>
  ,document.getElementById("root")
);