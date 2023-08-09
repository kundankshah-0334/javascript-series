import React from 'react';
import  ReactDOM from 'react-dom';
import "./index.css"
let currDate = new Date();
// let currHour = currDate.getHours();
let currHour = 16;
let message = "";

const messageCss = {

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
  <div>
    <h1><span style={messageCss}>{message}</span> , Sir</h1>
  </div>
  </>
  ,document.getElementById("root")
);