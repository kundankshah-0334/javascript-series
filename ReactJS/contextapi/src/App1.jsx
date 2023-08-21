import React, { createContext, useEffect, useState } from "react";



const App =() => {
    const [num , SetNum] = useState(0);
    useEffect(() => {
        document.title = `You clicked me ${num} times`;
    })
    const incData = () => {
        SetNum(num+1);
    }

  return (
    <>
    <button onClick={incData}>Click Me {num}</button>
    </>
  );
}

export default App;

