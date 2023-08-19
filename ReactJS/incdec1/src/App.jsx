import React, { useState } from "react";

const App = () => {

  let [number , setNumber] = useState(0);

  const IncNum = () => {
     setNumber(number+1)
  }

  const DecNum = () => {
    if(number > 0){
      setNumber(number-1) 
    }else{
      setNumber(0) 
      alert("Zero Limit")
    }
    
  }

  return (
        <>
          <div className="centerdiv">
              <h1 className="heading">{number}</h1>
              <div className="botttons">
              <br /><br /><br />
              <button onClick={IncNum} className="btn1">Increase</button>
              <button onClick={DecNum} className="btn2">Decrease</button>
              </div>
          </div>
        </> 
      );
}

export default App;
