import React, { useState } from "react";

const  Accord = ({question ,answer}) => {
    const[ans , setAns] = useState(false);
    return (
        <>
        <div className="main-heading">
        <p onClick={() => setAns(!ans)}>{ ans ? "➖" : "➕"} </p>
        <h3>{question}</h3>

        </div>
        {
            ans && <p className="answers">{answer}</p>
        }
        
        </>
    );
  
 }

export default Accord;
