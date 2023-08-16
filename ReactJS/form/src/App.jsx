import React, { useState } from "react";


const App = () => {

  const[name1 ,setName1] = useState("");
  const[name2 ,setName2] = useState("");

  const[fullName ,setFullName] = useState("");
 


    const valueEvent1 = (event) => {
    setName1(event.target.value);
  };
  const valueEvent2 = (event) => {
    setName2(event.target.value);
   
  };

    const onSubmit = (event) => {
      event.preventDefault();
    setFullName(name1 + " " + name2);
  };

  return (
     <>
     <form  onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter First Name" 
            onChange={valueEvent1}
            value={name1}
          /> 
          <input
            type="text"
            placeholder="Enter Second Name" 
            onChange={valueEvent2}
            value={name2}
          /> 
          <button type="submit">Submit</button>
        </div>
     </form>

     </>
  );
};

export default App;
