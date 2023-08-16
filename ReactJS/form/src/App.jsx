import React from "react";


const App = () => {
    const valueEvent = (event) => {
      let val = event.target.vlaue;
    console.log(val);
  };

  return (
     <>
     <div>
        <h1>Hello</h1>
        <input
          type="text"
          placeholder="Enter Your Name" 
          onChange={valueEvent}
           /> 
        <button>Submit</button>
     </div>
     </>
  );
};

export default App;
