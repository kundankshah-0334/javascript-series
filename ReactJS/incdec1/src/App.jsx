import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
// import Button from '@mui/material/Button';
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
              <button onClick={IncNum} className="btn1"><AddIcon /></button>
              <button onClick={DecNum} className="btn2"><RemoveIcon /></button>
              </div>
         
          </div>
        </> 
      );
}

export default App;
