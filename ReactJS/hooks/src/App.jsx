import React from "react";


let count = 0;

const IncreamentNumber = () => {
  count++;
 console.log("clicked" + count );
 

}

const App = () => {
  return (
    <>
      {/* <h1>0</h1>

      <button className="" >Click Me</button> */}

      <div class="container">
    <h1>{count}</h1>
    <button onClick={IncreamentNumber}>Click Me</button>
  </div>
    </>
  );
}

export default App;
